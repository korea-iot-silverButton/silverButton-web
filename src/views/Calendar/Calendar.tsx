import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../../layouts/header/Header";
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
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!token) {
      window.alert("로그인 정보가 없습니다. 로그인 페이지로 이동합니다.");
      navigate("/auth");
    }
  }, [token, navigate]);

  const fetchEvents = async (year: number, month: number) => {
    try {
      const fetchPromises = [
        axios.get(`http://localhost:4040/api/v1/schedule/search?year=${year}&month=${month}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`http://localhost:4040/api/v1/schedule/search?year=${month === 1 ? year - 1 : year}&month=${month === 1 ? 12 : month - 1}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`http://localhost:4040/api/v1/schedule/search?year=${month === 12 ? year + 1 : year}&month=${month === 12 ? 1 : month + 1}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ];

      const responses = await Promise.all(fetchPromises);
      const calendarEvents = responses.flatMap((response) =>
        response.data.data.map((event: { id: string; scheduleDate: string; task: string }) => {
          const startDate = new Date(event.scheduleDate);
          const eventId = `${startDate.toISOString()}@${event.id}`;

          return {
            id: eventId,
            title: event.task,
            date: startDate.toISOString().split("T")[0], // date는 YYYY-MM-DD 형식
          };
        })
      );

      setEvents(calendarEvents);
    } catch (error) {
      console.error("일정을 가져오는 데 실패했습니다:", error);
    }
  };

  const handleDatesSet = (arg: { start: Date; end: Date; view: any }) => {
    let year = arg.view.currentStart.getFullYear();
    let month = arg.view.currentStart.getMonth();
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
      // 수정 로직
      try {
        const temp = eventId.indexOf('@');
        eventId = eventId.substring(temp + 1);
        const response = await axios.put(
          `http://localhost:4040/api/v1/schedule/update/${eventId}`, 
          { task: title }, // 수정할 task만 전달
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          // 이벤트 리스트에서 수정된 항목을 업데이트
          setEvents((prevEvents) =>
            prevEvents.map((event) =>
              event.id === eventId ? { ...event, title } : event
            )
          );
          fetchEvents(new Date().getFullYear(), new Date().getMonth() + 1);
        }
      } catch (error) {
        console.error("일정 수정 실패:", error);
      }
    } else {
      // 새 일정 추가 로직 (기존과 동일)
      const newEvent = { scheduleDate: date || "", task: title };
  
      try {
        const response = await axios.post("http://localhost:4040/api/v1/schedule/create", newEvent, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const addedEvent = {
          id: `${Date.now()}`, // 고유한 ID를 timestamp로 설정
          title: title,
          date: date || "",
        };
  
        setEvents((prevEvents) => [...prevEvents, addedEvent]);
        fetchEvents(new Date().getFullYear(), new Date().getMonth() + 1);
      } catch (error) {
        console.error("일정 추가 실패:", error);
      }
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      const temp = eventId.indexOf('@');
      eventId = eventId.substring(temp + 1);  // 삭제할 ID 부분만 추출
      const response = await axios.delete(
        `http://localhost:4040/api/v1/schedule/delete/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== eventId)
        );
        fetchEvents(new Date().getFullYear(), new Date().getMonth() + 1);
      }
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <>
      <div id="calendar-container">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          locale={koLocale}
          headerToolbar={{
            left: "",
            center: "title",
            right: "today prev,next",
          }}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          datesSet={handleDatesSet}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedDate={selectedDate}
          eventToEdit={eventToEdit}
          events={events}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
        />
      </div>
    </>
  );
};

export default CalendarComponent;
//end
