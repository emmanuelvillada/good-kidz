import { Card, CardContent } from '../components/ui/card'; 
import { CalendarIcon, ClockIcon } from '../pages/icons';
import React from 'react';
import goodkidzimg from '../images/good kidz.jpg';
const EventList = ({ events = []}) => {
    return (
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {events.map(event => {
                // Convertir la fecha a un objeto Date
                const eventDate = new Date(event.date);
                const formattedDate = eventDate.toLocaleDateString();

                return (
                    <Card key={event._id}>
                        <CardContent key={event._id} className="grid gap-4">
                            <img
                                src={goodkidzimg}
                                width="550"
                                height="310"
                                alt="Event"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                            />
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold">{event.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {event.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-semibold">
                                    <CalendarIcon className="w-4 h-4" />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold">
                                    <ClockIcon className="w-4 h-4" />
                                    <span>{event.hour}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default EventList;
