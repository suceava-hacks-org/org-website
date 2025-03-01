"use client"
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function About() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);
    const activitiesRef = useRef(null);
    const ctaRef = useRef(null);

    const isHeadingInView = useInView(headingRef, { amount: 0.3, once: true });
    const isCardsInView = useInView(cardsRef, { amount: 0.15, once: true });
    const isActivitiesInView = useInView(activitiesRef, { amount: 0.15, once: true });
    const isCtaInView = useInView(ctaRef, { amount: 0.3, once: true });
    
    const headingControls = useAnimation();
    const cardsControls = useAnimation();
    const activitiesControls = useAnimation();
    const ctaControls = useAnimation();
    
    useEffect(() => {
        if (isHeadingInView) headingControls.start("visible");
        if (isCardsInView) cardsControls.start("visible");
        if (isActivitiesInView) activitiesControls.start("visible");
        if (isCtaInView) ctaControls.start("visible");
    }, [isHeadingInView, isCardsInView, isActivitiesInView, isCtaInView, 
        headingControls, cardsControls, activitiesControls, ctaControls]);
    
    
    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };
    
    const childVariant = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };
    
    const cardVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };
    
    const iconReveal = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 150, 
                damping: 15,
                delay: 0.2
            }
        }
    };


    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20 overflow-hidden">
            <motion.div 
                ref={sectionRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-6xl mx-auto px-4"
            >
                <motion.div 
                    ref={headingRef}
                    initial="hidden"
                    animate={headingControls}
                    variants={staggerChildren}
                    className="relative mb-24"
                >
                    <motion.div 
                        className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                    
                    <motion.div 
                        className="flex items-center gap-6 mb-8"
                        variants={childVariant}
                    >
                        <motion.div 
                            className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-full"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, 5, -3, 0] }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                repeatType: "reverse",
                                ease: "easeInOut" 
                            }}
                        >
                            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold">About <span className="text-red-500">Suceava Hacks</span></h1>
                    </motion.div>
                    
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl leading-relaxed"
                        variants={childVariant}
                    >
                        Suceava Hacks is a student-led coding club affiliated with the global 
                        <span className="text-red-500 font-semibold"> Hack Club </span> 
                        network. We are on a mission to empower students in Suceava with coding skills, 
                        creativity, and a supportive community to build amazing tech projects together.
                    </motion.p>
                    
                    <motion.div
                        className="mt-8 p-4 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border border-red-500/10 rounded-lg"
                        variants={childVariant}
                    >
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-red-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-sm">
                                <span className="font-semibold">Hack Club</span> is a global network of student-led coding clubs where young people learn to code through building projects. 
                                Suceava Hacks is proud to be part of this network, while operating independently to serve our local community.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    ref={cardsRef}
                    initial="hidden"
                    animate={cardsControls}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    <motion.div 
                        className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                        variants={cardVariant}
                        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <motion.div 
                            className="mb-6 w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"
                            variants={iconReveal}
                        >
                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">Student-Led</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Our club is entirely led by students, for students. We believe in learning through doing, 
                            teaching others, and creating a space where everyones voice matters.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                        variants={cardVariant}
                        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <motion.div 
                            className="mb-6 w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"
                            variants={iconReveal}
                        >
                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">Real Projects</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Members build real projects, from games to websites to hardware hacks. 
                            We emphasize hands-on learning, creative exploration, and solving local problems with technology.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                        variants={cardVariant}
                        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <motion.div 
                            className="mb-6 w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"
                            variants={iconReveal}
                        >
                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                            </svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">Connected Community</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            As part of Hack Club, we connect with a worldwide network of young makers, 
                            while building a strong local tech community in Suceava with opportunities for collaboration and growth.
                        </p>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    ref={activitiesRef}
                    initial="hidden"
                    animate={activitiesControls}
                    variants={staggerChildren}
                    className="mb-24"
                >
                    <motion.div
                        className="flex items-center gap-4 mb-12"
                        variants={childVariant}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">What We <span className="text-red-500">Do</span></h2>
                        <motion.div 
                            className="h-px bg-gradient-to-r from-red-500/50 to-transparent flex-grow ml-4"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                    </motion.div>
                    
                    <div className="space-y-6">
                        <motion.div 
                            className="group p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                            variants={childVariant}
                            whileHover={{ scale: 1.01, transition: { duration: 0.4, ease: "easeOut" } }}
                        >
                            <div className="flex items-start gap-6">
                                <motion.div 
                                    className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mt-1 flex-shrink-0"
                                    whileHover={{ rotate: 5, scale: 1.1, transition: { duration: 0.3 } }}
                                >
                                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Weekly Workshops</h3>
                                    <p className="text-gray-400 leading-relaxed max-w-4xl">
                                        Our club meets weekly to work on coding projects, learn new technologies, and collaborate with fellow members. 
                                        From web development to IoT, cybersecurity to Linux, we explore diverse areas of technology tailored to members interests 
                                        and the needs of our local community.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="group p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                            variants={childVariant}
                            whileHover={{ scale: 1.01, transition: { duration: 0.4, ease: "easeOut" } }}
                        >
                            <div className="flex items-start gap-6">
                                <motion.div 
                                    className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mt-1 flex-shrink-0"
                                    whileHover={{ rotate: -5, scale: 1.1, transition: { duration: 0.3 } }}
                                >
                                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Hackathons & Events</h3>
                                    <p className="text-gray-400 leading-relaxed max-w-4xl">
                                        We organize regular hackathons, coding competitions, and tech events where members can dive deep into 
                                        specific technologies, collaborate on time-bound projects, and connect with the broader tech community 
                                        in Suceava and beyond.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="group p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                            variants={childVariant}
                            whileHover={{ scale: 1.01, transition: { duration: 0.4, ease: "easeOut" } }}
                        >
                            <div className="flex items-start gap-6">
                                <motion.div 
                                    className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mt-1 flex-shrink-0"
                                    whileHover={{ rotate: 5, scale: 1.1, transition: { duration: 0.3 } }}
                                >
                                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Mentorship & Learning</h3>
                                    <p className="text-gray-400 leading-relaxed max-w-4xl">
                                        We facilitate peer-to-peer learning and connections with industry mentors. 
                                        More experienced members guide beginners, and we organize sessions with tech professionals who 
                                        share insights about career paths, emerging technologies, and real-world development practices.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="group p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                            variants={childVariant}
                            whileHover={{ scale: 1.01, transition: { duration: 0.4, ease: "easeOut" } }}
                        >
                            <div className="flex items-start gap-6">
                                <motion.div 
                                    className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mt-1 flex-shrink-0"
                                    whileHover={{ rotate: -5, scale: 1.1, transition: { duration: 0.3 } }}
                                >
                                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Community Projects</h3>
                                    <p className="text-gray-400 leading-relaxed max-w-4xl">
                                        Our members work on both individual and collaborative projects that address real needs in our community. 
                                        From websites for local organizations to apps that solve campus problems, we believe in using technology for 
                                        positive impact while building our portfolios.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    ref={ctaRef}
                    className="text-center py-16 relative"
                    initial="hidden"
                    animate={ctaControls}
                    variants={staggerChildren}
                >
                    <motion.div 
                        className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-6"
                        variants={childVariant}
                    >
                        Ready to <span className="text-red-500">Join Us</span>?
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                        variants={childVariant}
                    >
                        Whether youre a beginner curious about coding or an experienced developer looking to share your knowledge,
                        theres a place for you in the Suceava Hacks community.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        variants={childVariant}
                    >
                        <motion.button 
                            className="relative bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 group"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
                            whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span>Join Suceava Hacks</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <motion.div 
                                className="absolute inset-0 rounded-xl bg-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ 
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.button>
                        
                        <motion.button 
                            className="relative border border-red-500 text-red-500 hover:text-red-400 hover:border-red-400 font-bold py-4 px-10 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
                            whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}