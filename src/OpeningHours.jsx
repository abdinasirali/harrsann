// D.jsx

import React from 'react';

const OpeningHours = () => {
  return (
    <div className="h-screen flex-1 p-7">
    <div className="opening-hours">
    <h2>Opening Hours</h2>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Saturday</td>
          <td>10:00 AM - 7:00 PM</td>
        </tr>
        <tr>
          <td>sunday</td>
          <td>10:00 AM - 7:00 PM</td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>10:00 AM - 7:00 PM</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>10:00 AM - 7:00 PM</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>10:00 AM - 7:00 PM</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>10:00 AM - 7:00 PM</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>10:00 AM - 7:00 PM</td>
        </tr>
      
      </tbody>
    </table>
  </div>
  </div>
  );
};

export default OpeningHours;
