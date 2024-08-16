import React from "react";
export const EventRowItem: React.FC<{
    eventId: number,
    eventDate: string,
    eventTime: string,
    eventDescription: string,
    eventCoordinator: string,
    deleteEvent: Function
    }> = (props) => {
    return(
        <tr>
            <th scope='row'>{props.eventId}</th>
            <td>{props.eventDate}</td>
            <td>{props.eventTime}</td>
            <td>{props.eventDescription}</td>
            <td>{props.eventCoordinator}</td>
            <td><button type="button" className='btn btn-danger btn-sm' onClick={() => props.deleteEvent(props.eventId)}>Delete</button></td>
          </tr>
    )
}