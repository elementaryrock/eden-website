import React from 'react';
import './Schedule.css';

// Define the grid hours for the old design
const Schedule = ({ date, slots }) => (
  <section id="schedule">
    <div className="pixel-section-title">SCHEDULE</div>
    <div className="schedule-table-responsive">
      <div className="schedule-label">{date}</div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, idx) => (
            <tr key={idx}>
              <td>{slot.start} - {slot.end}</td>
              <td>{slot.label}</td>
              <td>{slot.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile Cards */}
      <div className="schedule-table-cards">
        {slots.map((slot, idx) => (
          <div className="schedule-card" key={idx}>
            <div className="schedule-card-time">{slot.start} - {slot.end}</div>
            <div className="schedule-card-label">{slot.label}</div>
            <div className="schedule-card-location">{slot.location}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Schedule;
