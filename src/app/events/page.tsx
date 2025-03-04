"use client"

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

type Event = {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    category: string;
    featured?: boolean;
    registrationLink?: string;
};

export default function Events() {
    const [filter, setFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [events, setEvents] = useState<Event[]>([
        {
            id: "1",
            title: "Intro to Github and web development",
            date: "April 12, 2025",
            time: "14:00 - 17:00",
            location: "CNPRSV - CDI",
            description: "Learn the fundamentals of web development with HTML. Share your site out in the world to get $5 for buying yourself boba.",
            image: "/images/web-dev-workshop.jpg",
            category: "workshop",
            featured: true,
            registrationLink: "https://suceava.hackclub.com/register"
        },
    ]);

    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const eventsRef = useRef(null);
    
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
    const isEventsInView = useInView(eventsRef, { once: true, amount: 0.1 });
    
    const headerControls = useAnimation();
    const eventsControls = useAnimation();
    
    useEffect(() => {
        if (isHeaderInView) {
            headerControls.start("visible");
        }
        if (isEventsInView) {
            eventsControls.start("visible");
        }
        setEvents(events);
    }, [isHeaderInView, isEventsInView, headerControls, eventsControls, events]);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const eventCardVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };
    
    const filteredEvents = events.filter(event => {
        const matchesFilter = filter === "all" || event.category === filter;
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             event.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const featuredEvents = events.filter(event => event.featured);
    
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div 
                    className="absolute top-40 left-10 w-64 h-64 bg-red-500 rounded-full filter blur-3xl opacity-5"
                    animate={{
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 right-10 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-5"
                    animate={{
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div 
                    className="absolute top-1/3 right-1/4 w-40 h-40 bg-red-500 rounded-full filter blur-3xl opacity-5"
                    animate={{
                        x: [0, 30, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>
            
            <motion.div 
                ref={sectionRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-6xl mx-auto px-4 relative z-10"
            >
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerControls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="mb-16 text-center"
                >
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6"
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { 
                                y: 0, 
                                opacity: 1,
                                transition: {
                                    duration: 0.8
                                }
                            }
                        }}
                    >
                        Upcoming <motion.span 
                            className="text-red-500"
                            animate={{
                                textShadow: ["0px 0px 0px rgba(239, 68, 68, 0)", "0px 0px 10px rgba(239, 68, 68, 0.3)", "0px 0px 0px rgba(239, 68, 68, 0)"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            Events
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { 
                                y: 0, 
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                }
                            }
                        }}
                    >
                        Join us for workshops, hackathons, and networking opportunities to expand your skills and connect with the tech community.
                    </motion.p>
                    
                    <motion.div 
                        className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-center"
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { 
                                y: 0, 
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4
                                }
                            }
                        }}
                    >
                        <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                            <input 
                                type="text" 
                                placeholder="Search events..." 
                                className="w-full py-3 px-5 pr-10 bg-[#1a1a1a] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div className="flex gap-2">
                            {["all", "workshop", "hackathon", "networking"].map(category => (
                                <button
                                    key={category}
                                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        filter === category 
                                            ? 'bg-red-500 text-white' 
                                            : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                                    }`}
                                    onClick={() => setFilter(category)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
                
                {featuredEvents.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-red-500 pb-1">Featured Events</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {featuredEvents.map((event) => (
                                <motion.div
                                    key={event.id}
                                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl overflow-hidden border border-red-500/10 hover:border-red-500/30 transition-all duration-300 shadow-lg hover:shadow-red-900/10"
                                    initial={{ scale: 1, y: 0 }}
                                    whileHover={{ 
                                        y: -5, 
                                        boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
                                        transition: { 
                                            type: "spring", 
                                            stiffness: 400, 
                                            damping: 17 
                                        }
                                    }}
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-red-500/20 z-10"></div>
                                        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg uppercase z-20">
                                            Featured
                                        </div>
                                        <div className="h-full w-full bg-[#2a2a2a] flex items-center justify-center">
                                            <svg className="w-16 h-16 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                            <span className="bg-[#2a2a2a] text-gray-300 text-xs px-3 py-1 rounded-full capitalize">
                                                {event.category}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center text-gray-400 text-sm mb-4">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            {event.date} | {event.time}
                                        </div>
                                        
                                        <div className="flex items-start text-gray-400 text-sm mb-4">
                                            <svg className="w-4 h-4 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>
                                        
                                        <p className="text-gray-300 mb-5">
                                            {event.description}
                                        </p>
                                        
                                        {event.registrationLink && (
                                            <Link 
                                                href={event.registrationLink} 
                                                className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                                            >
                                                Register Now
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            
                <motion.div
                    ref={eventsRef}
                    initial="hidden"
                    animate={eventsControls}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={eventCardVariant}
                                className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-red-500/10 hover:border-red-500/30 transition-all duration-300 flex flex-col h-full"
                                initial={{ scale: 1, y: 0 }}
                                whileHover={{ 
                                    y: -5,
                                    boxShadow: "0 10px 20px -5px rgba(239, 68, 68, 0.08)",
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 400, 
                                        damping: 17 
                                    }
                                }}
                            >
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold text-white">{event.title}</h3>
                                        <span className="bg-[#2a2a2a] text-gray-300 text-xs px-2 py-0.5 rounded-full capitalize">
                                            {event.category}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center text-gray-400 text-sm mb-2">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        {event.date}
                                    </div>
                                    
                                    <div className="flex items-center text-gray-400 text-sm mb-3">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        {event.time}
                                    </div>
                                    
                                    <div className="flex items-start text-gray-400 text-sm mb-4">
                                        <svg className="w-4 h-4 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{event.location}</span>
                                    </div>
                                    
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                        {event.description}
                                    </p>
                                </div>
                                
                                <div className="p-6 pt-0 mt-auto">
                                    {event.registrationLink && (
                                        <Link 
                                            href={event.registrationLink} 
                                            className="inline-block w-full text-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-3 py-20 text-center">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <svg className="w-16 h-16 mx-auto text-gray-700 mb-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                                <p className="text-gray-400 text-xl">No events found matching your criteria</p>
                                <button 
                                    className="mt-4 text-red-400 hover:text-red-500"
                                    onClick={() => {
                                        setFilter("all");
                                        setSearchQuery("");
                                    }}
                                >
                                    Clear filters
                                </button>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 text-center bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] p-10 rounded-2xl border border-red-500/10 relative overflow-hidden"
                >
                    <motion.div 
                        className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-500 rounded-full opacity-10"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 45, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                    
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Want to host your own event?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Have an idea for a workshop, hackathon, or tech talk? We welcome event proposals from members and partners!
                    </p>
                    
                    <Link 
                        href="/contact" 
                        className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 relative z-10"
                    >
                        Submit Your Proposal
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}