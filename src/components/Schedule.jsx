import React from 'react';
import './Schedule.css';

const hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"];

const Schedule = ({ date, slots }) => (
  <section id="schedule">
    <div className="pixel-section-title">SCHEDULE</div>
    <div className="schedule">
      <div className="schedule-label">{date}</div>
      <div className="schedule-grid">
        {hours.map((hour, idx) => {
          const slot = slots.find(s => s.start === hour);
          return (
            <div key={hour} className="schedule-slot" style={{height: slot ? '40px' : '20px', background: slot ? '#b678e6' : '#4d267d'}}>
              {slot ? slot.label : ''}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Schedule;
