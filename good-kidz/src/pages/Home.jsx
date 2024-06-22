import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card'; // Ajusta la ruta si es necesario
import { CalendarIcon, ClockIcon } from './icons';
import goodkidzimg from '../images/good kidz.jpg';


export default function Component() {
    const events = [
        { id: 1, name: 'Community Cleanup', date: '2024-06-10', description: 'Join us for a community cleanup event to keep our parks clean.', hour: '6:00 PM - 9:00 PM' },
        { id: 2, name: 'Summer Camp', date: '2024-07-15', description: 'A fun and educational summer camp for kids aged 5-12.', hour: '6:00 PM - 9:00 PM' },
        { id: 3, name: 'Fundraising Gala', date: '2024-09-20', description: 'An evening of dining and entertainment to support our programs.', hour: '6:00 PM - 9:00 PM' },
    ];
    const past_events = [
        { id: 1, name: 'Community Cleanup', date: '2024-06-10', description: 'Join us for a community cleanup event to keep our parks clean.', hour: '6:00 PM - 9:00 PM' },
        { id: 2, name: 'Summer Camp', date: '2024-07-15', description: 'A fun and educational summer camp for kids aged 5-12.', hour: '6:00 PM - 9:00 PM' },
        { id: 3, name: 'Fundraising Gala', date: '2024-09-20', description: 'An evening of dining and entertainment to support our programs.', hour: '6:00 PM - 9:00 PM' },
        { id: 4, name: 'Fundraising Gala', date: '2024-09-20', description: 'An evening of dining and entertainment to support our programs.', hour: '6:00 PM - 9:00 PM' },
    ];
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40 border-b">
                    <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 sm:gap-6 md:gap-16 lg:grid-cols-2">
                            <div className="space-y-4">
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Discover the Art of Good Kidz
                                </h1>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    Immerse yourself in the vibrant world of art events hosted by Good Kidz. Explore our upcoming exhibitions, workshops, and more.
                                </p>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        to="#"
                                        className="btn btn-primary"
                                    >
                                        Upcoming Events
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-secondary"
                                    >
                                        View Gallery
                                    </Link>
                                </div>
                            </div>
                            <img
                                src={goodkidzimg}
                                width="600"
                                height="600"
                                alt="Hero"
                                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                            />
                        </div>
                    </div>
                </section>
                <section id="events" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-5 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Art Events</h2>
                                <p className="py-8 max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Check out our upcoming art exhibitions, workshops, and special events. Join us for a creative and
                                    inspiring experience.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            {events.map(event =>
                                <Card key={event.id}>
                                    <CardContent key={event.id} className="grid gap-4">
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
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-semibold">
                                                <ClockIcon className="w-4 h-4" />
                                                <span>{event.hour}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                        </div>
                    </div>
                </section>
                <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gallery of Past Events</h2>
                                <p className="py-8 max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Explore our gallery of past art events and get a glimpse of the creativity and energy that Good Kidz
                                    brings to the community.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {past_events.map(event =>
                                <img
                                    key={event.id}
                                    width="300"
                                    height="300"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover" src={goodkidzimg} alt={event.name} />
                            )}

                        </div>
                    </div>
                </section>
                <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Good Kidz</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Good Kidz is a non-profit organization dedicated to promoting and celebrating the arts within our
                                    community. Our mission is to provide accessible and inclusive art experiences that inspire creativity,
                                    foster community, and empower the next generation of artists.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="310"
                                alt="About"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Our Mission</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Good Kidz aims to create a vibrant and inclusive arts community by hosting engaging events,
                                        workshops, and exhibitions that celebrate the diverse talents and perspectives of our local artists.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Our Team</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Our team of passionate art enthusiasts and community organizers work tirelessly to bring the best
                                        art experiences to our neighborhood. Get to know the individuals behind Good Kidz.
                                    </p>
                                    <Link
                                        to="#"
                                        className="btn btn-primary"
                                    >
                                        Meet the Team
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
