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

// 이벤트 타입 정의
interface Event {
  id: string;
  title: string;
  date: string;
}

// ModalProps 타입 정의
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string | null;
  eventToEdit: Event | null;
  events: Event[];
  onSave: (date: string | null, title: string, eventId?: string) => void;
  onDelete: (eventId: string) => void;
}

// 모달 컴포넌트
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  eventToEdit,
  events,
  onSave,
  onDelete,
}) => {
  const [eventTitle, setEventTitle] = useState<string>(
    eventToEdit ? eventToEdit.title : ""
  );
  const [selectedEventId, setSelectedEventId] = useState<string | null>(
    eventToEdit?.id || null
  );

  useEffect(() => {
    if (eventToEdit) {
      setEventTitle(eventToEdit.title);
      setSelectedEventId(eventToEdit.id);
    } else {
      setEventTitle("");
      setSelectedEventId(null);
    }
  }, [eventToEdit]);

  useEffect(() => {
    setEventTitle(eventToEdit ? eventToEdit.title : "");
    setSelectedEventId(eventToEdit?.id || null);
  }, [selectedDate, eventToEdit]);

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

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter" && eventTitle) {
      handleSave();
    }
  };

  useEffect(() => {
    const modalElement = document.getElementById("modal-overlay");
    if (modalElement) {
      modalElement.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      const modalElement = document.getElementById("modal-overlay");
      if (modalElement) {
        modalElement.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [eventTitle]);

  return isOpen ? (
    <div
      id="modal-overlay"
      className="modal-overlay"
      onClick={handleOutsideClick}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="modal-left">
          <h4>{selectedDate}</h4>
          <div className="event-list">
            {events
              .filter((event) => event.date === selectedDate)
              .map((event) => (
                <div
                  key={event.id}
                  className="event-item"
                  onClick={() => handleEventClick(event)}
                >
                  {event.title}
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(event.id)}
                  >
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

  // 쿠키에서 'token' 값을 가져오는 함수
  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null; // 쿠키에 token이 없으면 null 반환
  };

  const token = getTokenFromCookies();
  console.log(token);

  // token이 없으면 로그인 페이지로 리디렉션 (알람 후 이동)
  useEffect(() => {
    if (!token) {
      window.alert("로그인 정보가 없습니다. 로그인 페이지로 이동합니다."); // 알람 창 띄우기
      navigate("/auth"); // 로그인 페이지로 리디렉션
    }
  }, [token, navigate]);

  // 일정 데이터를 서버에서 받아오는 useEffect
  const fetchEvents = async (year: number, month: number) => {
    console.log(year + " " + month);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/schedule/search?year=${year}&month=${month}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer 토큰을 헤더에 추가
          },
        }
      );

      // 이벤트를 FullCalendar에 맞는 형식으로 변환
      const calendarEvents = response.data.data.map(
        (event: { scheduleDate: string; task: string }) => {
          const startDate = new Date(event.scheduleDate); // 문자열을 Date 객체로 변환

          return {
            id: event.scheduleDate,
            title: event.task,
            start: startDate.toISOString(),
          };
        }
      );
      setEvents(calendarEvents);
    } catch (error) {
      console.error("일정을 가져오는 데 실패했습니다:", error);
    }
  };

  const handleDatesSet = (arg: { start: Date; end: Date; view: any }) => {
    let year = arg.view.currentStart.getFullYear();
    let month = arg.view.currentStart.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1

    console.log(`현재 보고 있는 월: ${year}년 ${month}월`);

    fetchEvents(year, month);
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

  const handleSaveEvent = (
    date: string | null,
    title: string,
    eventId?: string
  ) => {
    if (eventId) {
      setEvents(
        events.map((event) =>
          event.id === eventId ? { ...event, title } : event
        )
      );
    } else {
      const newEvent = {
        id: String(events.length + 1),
        title,
        date: date || "",
      };
      setEvents([...events, newEvent]);
    }
    setIsModalOpen(false);
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
          // 시간을 제외한 제목만 표시
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
        events={events}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
};

export default CalendarComponent;
