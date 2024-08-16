import React, {useState} from 'react';
import './App.css';
import {EventTable} from './components/EventTable';
import {AddEventForm} from './components/AddEventForm';

export const App = () => {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  
  const [events, setEvents] = useState([
    {eventId: 1, eventDate: '2024-06-26', eventTime: '11 a.m.', eventDescription: 'event number 1', eventCoordinator: 'user One'},
    {eventId: 2, eventDate: '2024-06-27', eventTime: '10 a.m.', eventDescription: 'event number 2', eventCoordinator: 'user Two'},
    {eventId: 3, eventDate: '2024-06-28', eventTime: '12 p.m.', eventDescription: 'event number 3', eventCoordinator: 'user One'},
    {eventId: 4, eventDate: '2024-06-29', eventTime: '1 p.m.', eventDescription: 'event number 4', eventCoordinator: 'user One'}
  ])

  const addEvent= (date: string, time: string, description: string, coordinator: string) => {
    let eventId = 0;
    if (events.length > 0) {
      eventId = events[events.length -1].eventId + 1;
    } else {
      eventId = 1;
    }
    const newEvent = {
      eventId: events[events.length -1].eventId + 1,
      eventDate: date,
      eventTime: time,
      eventDescription: description,
      eventCoordinator: coordinator
    };
    setEvents(events => [...events, newEvent]);
  }

  const deleteEvent = (deleteEventEventId: number) => {
    let filtered = events.filter(function (value) {
      return value.eventId !== deleteEventEventId;
    });
    setEvents(filtered);
  }

  return (
    <div className='mt-5 container'> 
      <div className="card">
        <div className="card-header">
          Your Event's
        </div>
      </div>
      <div className="card-body">
        <EventTable events={events} deleteEvent={deleteEvent}/>
        <button className='btn btn-primary' onClick={() => setShowAddEventForm(!showAddEventForm)}>{showAddEventForm ? 'Close New Event' : 'New Event'}</button>
        {showAddEventForm && <AddEventForm addEvent={addEvent}/>}
      </div>
    </div>
  );
}
