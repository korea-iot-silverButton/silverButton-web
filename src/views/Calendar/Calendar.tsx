import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../../layouts/Header";
import "../../styles/Calendar.css";
import { EventClickArg } from "@fullcalendar/core";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // react-router-dom에서 navigate 훅을 import

interface Event {
  id: string;
  title: string;
  date: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string | null;
  eventToEdit: Event | null;
  events: Event[];
  onSave: (date: string | null, title: string, eventId?: string) => void;
  onDelete: (eventId: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  eventToEdit,
  events,
  onSave,
  onDelete,
}) => {
  const [eventTitle, setEventTitle] = useState<string>(eventToEdit ? eventToEdit.title : "");
  const [selectedEventId, setSelectedEventId] = useState<string | null>(eventToEdit?.id || null);

  useEffect(() => {
    if (eventToEdit) {
      setEventTitle(eventToEdit.title);
      setSelectedEventId(eventToEdit.id);
    } else {
      setEventTitle("");
      setSelectedEventId(null);
    }
  }, [eventToEdit]);

  const handleSave = () => {
    if (eventTitle) {
      onSave(selectedDate, eventTitle, selectedEventId ?? undefined);
      onClose();
    }
  };

  const handleEventClick = (event: Event) => {
    setSelectedEventId(event.id);
    setEventTitle(event.title);
  };

  const handleAddNewEvent = () => {
    setSelectedEventId(null);
    setEventTitle("");
  };

  const handleDelete = () => {
    if (selectedEventId) {
      onDelete(selectedEventId);
      onClose();
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div id="modal-overlay" className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <h4>{selectedDate}</h4>
          <div className="event-list">
            {events
              .filter((event) => event.date === selectedDate)
              .map((event) => (
                <div key={event.id} className="event-item" onClick={() => handleEventClick(event)}>
                  {event.title}
                  <button className="delete-btn" onClick={() => onDelete(event.id)}>
                    X
                  </button>
                </div>
              ))}
            <div className="add-event" onClick={handleAddNewEvent}>
              + 일정 추가
            </div>
          </div>
        </div>

        <div className="modal-right">
          <h4>{selectedEventId ? "일정 수정" : "새 일정 추가"}</h4>
          <textarea
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="일정"
            autoFocus
          />
          <button id="save" onClick={handleSave} disabled={!eventTitle}>
            저장
          </button>
          {selectedEventId && (
            <button id="delete" onClick={handleDelete}>
              삭제
            </button>
          )}
          <button id="close" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const CalendarComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [eventToEdit, setEventToEdit] = useState<Event | null>(null);
  const calendarRef = useRef<any>(null);
  const navigate = useNavigate(); // navigate 훅을 사용하여 페이지 이동

  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null;
  };

  const token = getTokenFromCookies();
  console.log(token);

  useEffect(() => {
    if (!token) {
      window.alert("로그인 정보가 없습니다. 로그인 페이지로 이동합니다.");
      navigate("/auth");
    }
  }, [token, navigate]);

  const fetchEvents = async (year: number, month: number) => {
    console.log(`Fetching events for: ${year}-${month}`);
    
    try {
      const fetchPromises = [
        axios.get(
          `http://localhost:8080/api/v1/schedule/search?year=${year}&month=${month}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        axios.get(
          `http://localhost:8080/api/v1/schedule/search?year=${month === 1 ? year - 1 : year}&month=${month === 1 ? 12 : month - 1}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        axios.get(
          `http://localhost:8080/api/v1/schedule/search?year=${month === 12 ? year + 1 : year}&month=${month === 12 ? 1 : month + 1}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
      ];

      const responses = await Promise.all(fetchPromises);
      const calendarEvents = responses.flatMap((response) =>
        response.data.data.map((event: { scheduleDate: string; task: string }) => {
          const startDate = new Date(event.scheduleDate);
          return {
            id: event.scheduleDate,
            title: event.task,
            date: startDate.toISOString().split("T")[0],
          };
        })
      );

      setEvents(calendarEvents); // 새로운 이벤트 리스트를 상태에 반영
    } catch (error) {
      console.error("일정을 가져오는 데 실패했습니다:", error);
    }
  };

  const handleDatesSet = (arg: { start: Date; end: Date; view: any }) => {
    let year = arg.view.currentStart.getFullYear();
    let month = arg.view.currentStart.getMonth();
    console.log(`현재 보고 있는 월: ${year}년 ${month + 1}월`);
    fetchEvents(year, month + 1);
  };

  const handleDateClick = (info: { dateStr: string }) => {
    setSelectedDate(info.dateStr);
    setEventToEdit(null);
    setIsModalOpen(true);
  };

  const handleEventClick = (info: EventClickArg) => {
    const event = events.find((e) => e.id === info.event.id);
    if (event) {
      setEventToEdit(event);
      setSelectedDate(event.date);
      setIsModalOpen(true);
    }
  };

  const handleSaveEvent = async (date: string | null, title: string, eventId?: string) => {
    if (eventId) {
      // 기존 일정 수정
      setEvents(
        events.map((event) =>
          event.id === eventId ? { ...event, title } : event
        )
      );
    } else {
      // 새 일정 추가
      const newEvent = {
        scheduleDate: date || "",
        task: title,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/schedule/create",
          newEvent,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // 새로 추가된 이벤트 반영 후, 최신 일정을 불러옴
        const addedEvent = {
          id: response.data.id, // 서버에서 반환한 ID로 업데이트
          title: title,
          date: date || "",
        };

        // 기존 이벤트 목록에 새 이벤트 추가
        setEvents((prevEvents) => [...prevEvents, addedEvent]);

        // FullCalendar를 강제로 리렌더링하여 새로 추가된 일정을 반영하도록 함
        if (calendarRef.current) {
          calendarRef.current.getApi().refetchEvents();
        }

        setIsModalOpen(false); // 모달 닫기
      } catch (error) {
        console.error("일정을 추가하는 데 실패했습니다:", error);
        alert("일정을 추가하는 데 실패했습니다.");
      }
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <div id="calendar-container">
      <Header />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={koLocale}
        events={events}
        height="100%"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        datesSet={handleDatesSet}
        eventContent={(eventInfo) => {
          const eventTitle = eventInfo.event.title
            .replace(/\d{1,2}:\d{2}/, "")
            .trim();
          return {
            html: `<div>${eventTitle}</div>`,
          };
        }}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        eventToEdit={eventToEdit}
        events={events.filter((event) => event.date === selectedDate)}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
};

export default CalendarComponent;
