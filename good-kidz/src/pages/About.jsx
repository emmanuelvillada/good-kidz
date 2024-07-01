import React from 'react';
import { Link } from 'react-router-dom';
import goodkidzimg from '../images/good kidz.jpg';

export default function About() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section id="about" className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40 border-b">
                    <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 sm:gap-6 md:gap-16 lg:grid-cols-2">
                            <div className="space-y-4">
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    About Good Kidz
                                </h1>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    Good Kidz is a non-profit organization dedicated to promoting and celebrating the arts within our community. Our mission is to provide accessible and inclusive art experiences that inspire creativity, foster community, and empower the next generation of artists.
                                </p>
                            </div>
                            <img
                                src={goodkidzimg}
                                width="600"
                                height="600"
                                alt="About Good Kidz"
                                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Good Kidz aims to create a vibrant and inclusive arts community by hosting engaging events, workshops, and exhibitions that celebrate the diverse talents and perspectives of our local artists.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                src={goodkidzimg}
                                width="550"
                                height="310"
                                alt="Mission"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Our Vision</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        To be a leading community arts organization recognized for our innovative and inclusive programs that make art accessible to everyone.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Our Team</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Our team of passionate art enthusiasts and community organizers work tirelessly to bring the best art experiences to our neighborhood. Get to know the individuals behind Good Kidz.
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
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Involved</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    There are many ways to get involved with Good Kidz. Whether you’re an artist, volunteer, or donor, your support helps us bring the joy of art to more people.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    to="#"
                                    className="btn btn-primary"
                                >
                                    Volunteer
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-secondary"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
