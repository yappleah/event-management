class EventModel {
    eventId: number;
    eventDate: string;
    eventTime: string;
    eventDescription: string;
    eventCoordinator: string;
 
    constructor(eventId: number, eventDate: string, eventTime: string, eventDescription: string, eventCoordinator: string) {
        this.eventId = eventId;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.eventDescription = eventDescription;
        this.eventCoordinator = eventCoordinator;
    }
}