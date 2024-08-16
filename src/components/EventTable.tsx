import React from "react";
import {EventRowItem} from "./EventRowItem"

export const EventTable: React.FC<{
  events: EventModel[],
  deleteEvent: Function
}> = (props) => {
    return ( 
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Date</th>
            <th scope='col'>Time</th>
            <th scope='col'>Description</th>
            <th scope='col'>Coordinator</th>
          </tr>
        </thead>
        <tbody>
          {props.events.map(event => (
            <EventRowItem 
                key={event.eventId}
                eventId = {event.eventId}
                eventDate = {event.eventDate}
                eventTime = {event.eventTime}
                eventDescription = {event.eventDescription}
                eventCoordinator = {event.eventCoordinator}
                deleteEvent={props.deleteEvent}
            />
          ))}
        </tbody>
      </table>
    )
}