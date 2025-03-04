"use client"
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurMission() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef(null);
    const ctaRef = useRef(null);
    const statsRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0.05, 0.02]);
    
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.7 });
    const isSubtitleInView = useInView(subtitleRef, { once: true, amount: 0.7 });
    const isDescriptionInView = useInView(descriptionRef, { once: true, amount: 0.7 })
    const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.7 });
    const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
    
    
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i: number) => ({
            y: 0, 
            opacity: 1,
            transition: { 
                type: "tween", 
                duration: 0.3,
                delay: i * 0.3
            }
        })
    };
    
    const statsVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (i: number) => ({
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.3,
                delay: i * 0.2
            }
        })
    };

    const glassCardStyle = "bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-lg border border-white/5 shadow-xl";

    return (
        <div className="relative overflow-hidden pb-40 pt-32" ref={containerRef}>
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-red-500 to-rose-500 rounded-full filter blur-[120px]"
                    style={{ opacity: backgroundOpacity }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#080808] opacity-90 z-10"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? 
                        { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }} : 
                        { opacity: 0, y: 30 }
                    }
                    className="text-center mb-24"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400 text-sm uppercase tracking-[0.2em] font-medium mb-2 inline-block">
                        Our Purpose
                    </span>
                    
                    <h2 className="text-5xl sm:text-7xl font-bold mt-4 mb-6 tracking-tight">
                        Our <span className="relative whitespace-nowrap">
                            <span className="relative inline-block text-white z-10">Mission</span>
                            <motion.span
                                className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-red-600 to-rose-500"
                                initial={{ width: "0%", left: "50%" }}
                                animate={isTitleInView ? { width: "100%", left: "0%" } : {}}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            />
                        </span>
                    </h2>
                    
                    <motion.p
                        ref={subtitleRef}
                        className="text-xl sm:text-2xl font-light text-gray-300/90 mt-8 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isSubtitleInView ? 
                            { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 }} : 
                            { opacity: 0, y: 20 }
                        }
                    >
                        Empowering the next generation of tech innovators through
                        <span className="inline-block font-medium text-red-400 relative mx-1">
                            community, innovation
                        </span>
                        and growth.
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    ref={descriptionRef}
                    className="mb-32 text-center relative"
                    initial={{ opacity: 0 }}
                    animate={isDescriptionInView ? 
                        { opacity: 1, transition: { duration: 0.5 }} : 
                        { opacity: 0 }
                    }
                >
                    <motion.p
                        className="text-xl sm:text-2xl font-light text-gray-100/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        animate={isDescriptionInView ? 
                            { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 }} : 
                            { y: 30, opacity: 0 }
                        }
                    >
                        We exist to <span className="font-medium text-red-400">ignite the creative potential</span> in
                        every young developer, fostering an environment where innovation thrives and technology
                        becomes a powerful tool for positive change.
                    </motion.p>
                    
                    <motion.p
                        className="text-lg text-gray-400/90 max-w-2xl mx-auto leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        animate={isDescriptionInView ? 
                            { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.4 }} : 
                            { y: 30, opacity: 0 }
                        }
                    >
                        Whether you are just starting your coding journey or looking to level up your skills,
                        our community provides the resources, mentorship, and collaborative opportunities
                        to help you build the future you envision.
                    </motion.p>
                    
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-12"
                        initial={{ width: 0 }}
                        animate={isDescriptionInView ? { width: 96 } : { width: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    />
                </motion.div>
                
                <div ref={cardsRef} className="mb-32">
                    <motion.h3
                        className="text-center text-xl uppercase font-medium tracking-wider text-gray-400 mb-12"
                        initial={{ opacity: 0 }}
                        animate={isCardsInView ? { opacity: 1, transition: { duration: 0.4 }} : { opacity: 0 }}
                    >
                        Our Core <span className="text-red-500">Values</span>
                    </motion.h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                        {[
                            {
                                title: "Community",
                                eyebrow: "Connection",
                                content: "We build an inclusive space where diverse perspectives thrive, everyone belongs, and collaboration drives innovation forward. Our peer-to-peer learning environment encourages students to share knowledge and solve problems together.",
                                icon: (
                                    <svg className="w-full h-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" fill="currentColor" />
                                    </svg>
                                ),
                                hue: "from-red-500/80 to-red-600/80"
                            },
                            {
                                title: "Innovation",
                                eyebrow: "Creativity",
                                content: "We encourage creative thinking, experimentation with emerging technologies, and the courage to push boundaries. Through hackathons, challenges, and project-based learning, students develop the skills to transform ideas into impactful solutions.",
                                icon: (
                                    <svg className="w-full h-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill="currentColor" />
                                    </svg>
                                ),
                                hue: "from-rose-500/80 to-rose-600/80"
                            },
                            {
                                title: "Growth",
                                eyebrow: "Development",
                                content: "We foster continuous learning and development of both technical and interpersonal skills through mentorship and collaboration. Our curriculum adapts to industry trends, ensuring students gain relevant experience with technologies that matter.",
                                icon: (
                                    <svg className="w-full h-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" fill="currentColor" />
                                    </svg>
                                ),
                                hue: "from-red-600/80 to-rose-500/80"
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isCardsInView ? "visible" : "hidden"}
                                className="group h-full"
                            >
                                <div 
                                    className={`h-full ${glassCardStyle} p-8 rounded-2xl overflow-hidden relative`}
                                >
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="flex items-start justify-between">
                                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden">
                                                <div className={`w-full h-full rounded-lg p-2 bg-gradient-to-br ${card.hue} flex items-center justify-center text-white`}>
                                                    {card.icon}
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-400 uppercecase tracking-wider font-medium">
                                                {card.eyebrow}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-3xl font-semibold mt-6 mb-4 relative inline-block text-white group-hover:text-red-400 transition-colors duration-500">
                                            {card.title}
                                        </h3>
                                        
                                        <p className="text-gray-300/90 text-base leading-relaxed flex-grow">
                                            {card.content}
                                        </p>
                                        
                                        <div className="mt-8 relative overflow-hidden">
                                            <div className="flex items-center text-sm text-gray-400 group-hover:text-red-400 transition-colors duration-300 cursor-pointer">
                                                <span className="mr-2 font-medium">Learn more</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <motion.div 
                    ref={statsRef}
                    className="mb-32 relative"
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? 
                        { opacity: 1, transition: { duration: 0.3 }} : 
                        { opacity: 0 }
                    }
                >
                    <motion.h3
                        className="text-center text-xl uppercase font-medium tracking-wider text-gray-400 mb-16"
                        initial={{ opacity: 0 }}
                        animate={isStatsInView ? { opacity: 1, transition: { duration: 0.8 }} : { opacity: 0 }}
                    >
                        Our <span className="text-red-500">Impact</span>
                    </motion.h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { number: "1000+", label: "Active Student Members", detail: "Across high schools and colleges nationwide" },
                            { number: "50+", label: "Campus Chapters", detail: "With dedicated student-led communities" },
                            { number: "200+", label: "Projects Completed", detail: "Making real-world impact" }
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                variants={statsVariants}
                                custom={index}
                                initial="hidden"
                                animate={isStatsInView ? "visible" : "hidden"}
                                className={`relative ${glassCardStyle} p-8 rounded-2xl overflow-hidden flex flex-col items-center`}
                            >
                                <div className="relative z-10 text-center">
                                    <h4 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-500 mb-2">
                                        {stat.number}
                                    </h4>
                                    
                                    <h5 className="text-lg font-semibold text-gray-100/90 mb-2">
                                        {stat.label}
                                    </h5>
                                    <p className="text-sm text-gray-300/90 text-center">
                                        {stat.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                <motion.div
                    ref={ctaRef}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isCtaInView ? 
                        { opacity: 1, y: 0, transition: { duration: 0.1 }} : 
                        { opacity: 0, y: 30 }
                    }
                >
                    <div className={`${glassCardStyle} rounded-2xl overflow-hidden relative`}>
                        <div className="relative z-10 p-12 md:p-16 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-500">Community</span>
                            </h2>
                            
                            <motion.p
                                className="text-lg text-gray-300/90 max-w-2xl mx-auto mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Become part of our growing network of innovators, creators, and problem-solvers.
                                Connect with mentors, access educational resources, and participate in events that
                                will accelerate your growth in tech.
                            </motion.p>
                            
                            <motion.div 
                                className="flex flex-col sm:flex-row justify-center items-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-red-900/20">
                                    Get Started Today
                                </button>
                                
                                <button className="px-8 py-3 border border-red-600/50 text-red-500 hover:text-red-400 font-semibold rounded-xl transition-colors duration-300 hover:border-red-500">
                                    Contact Us
                                </button>
                            </motion.div>
                            
                            <motion.div
                                className="mt-16 flex flex-wrap justify-center items-center gap-4 opacity-70"
                                initial={{ opacity: 0 }}
                                animate={isCtaInView ? { opacity: 0.7 } : {}}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                <span className="text-sm text-gray-400 mr-3">Joined by students from:</span>
                                {["Local High School", "Tech College", "Science School", "Arts Academy", "Vocational School"].map((school, index) => (
                                    <div
                                        key={index}
                                        className="text-gray-400/70 text-sm font-medium px-3 py-1.5 border border-gray-800 rounded-md"
                                    >
                                        {school}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}