"use client"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function OurMission() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
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
    const backgroundScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3]);
    
    // Viewport animations
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isSubtitleInView = useInView(subtitleRef, { once: true, amount: 0.5 });
    const isDescriptionInView = useInView(descriptionRef, { once: true, amount: 0.5 });
    const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
    const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
    
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
    
    useEffect(() => {
        return () => {
            if (hoverTimeout) clearTimeout(hoverTimeout);
        };
    }, [hoverTimeout]);
    
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i: number) => ({
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: i * 0.2
            }
        }),
        hover: {
            y: -10,
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
            }
        }
    };
    
    const statsVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (i: number) => ({
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.5,
                delay: i * 0.15
            }
        })
    };

    const glassCardStyle = "bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-lg border border-white/5 shadow-xl";

    return (
        <div className="relative overflow-hidden pb-40 pt-32" ref={containerRef}>
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-red-500 to-rose-500 rounded-full filter blur-[120px]"
                    style={{ opacity: backgroundOpacity, scale: backgroundScale }}
                />
                <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-gradient-to-r from-red-700 to-red-900 rounded-full filter blur-[100px]"
                    style={{ opacity: backgroundOpacity }}
                    animate={{
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#080808] opacity-90 z-10"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 pattern-grid-lg text-red-500/[0.03]" aria-hidden="true"></div>
                
                <svg className="absolute top-0 right-0 w-20 h-20 text-red-500/10" viewBox="0 0 100 100" fill="none">
                    <motion.path
                        d="M10,10 L90,10 L90,90 L10,90 Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                </svg>
                
                <svg className="absolute bottom-0 left-0 w-20 h-20 text-red-500/10" viewBox="0 0 100 100" fill="none">
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? 
                        { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }} : 
                        { opacity: 0, y: 30 }
                    }
                    className="text-center mb-24"
                >
                    <motion.div
                        className="inline-block"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400 text-sm uppercase tracking-[0.2em] font-medium mb-2 inline-block">
                            Our Purpose
                        </span>
                    </motion.div>
                    
                    <h2 className="text-5xl sm:text-7xl font-bold mt-4 mb-6 tracking-tight">
                        Our <motion.span 
                            className="relative whitespace-nowrap"
                        >
                            <motion.span 
                                className="relative inline-block text-white z-10"
                            >
                                Mission
                            </motion.span>
                            <motion.span
                                className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-red-500 to-rose-500 opacity-70 blur-sm"
                                initial={{ width: "0%", left: "50%" }}
                                animate={isTitleInView ? { width: "100%", left: "0%" } : {}}
                                transition={{ delay: 0.5, duration: 1 }}
                            />
                            <motion.span
                                className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-red-600 to-rose-500"
                                initial={{ width: "0%", left: "50%" }}
                                animate={isTitleInView ? { width: "100%", left: "0%" } : {}}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.span>
                    </h2>
                    
                    <motion.p
                        ref={subtitleRef}
                        className="text-xl sm:text-2xl font-light text-gray-300/90 mt-8 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isSubtitleInView ? 
                            { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 }} : 
                            { opacity: 0, y: 20 }
                        }
                    >
                        <AnimatePresence>
                            {isSubtitleInView && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    Empowering the next generation of tech innovators through
                                    <motion.span
                                        className="inline-block font-medium text-red-400 relative mx-1"
                                        animate={{ 
                                            color: ["#f87171", "#ef4444", "#f87171"],
                                         }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        community, innovation
                                    </motion.span>
                                    and growth.
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    ref={descriptionRef}
                    className="mb-32 text-center relative"
                    initial={{ opacity: 0 }}
                    animate={isDescriptionInView ? 
                        { opacity: 1, transition: { duration: 1 }} : 
                        { opacity: 0 }
                    }
                >
                    <svg className="absolute left-1/2 -top-12 transform -translate-x-1/2 text-red-500/10 w-40 h-12" viewBox="0 0 100 30" fill="none">
                        <motion.path
                            d="M0,15 Q25,5 50,15 T100,15"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isDescriptionInView ? { pathLength: 1 } : {}}
                            transition={{ duration: 1.5, delay: 0.2 }}
                        />
                    </svg>
                    
                    <motion.p
                        className="text-xl sm:text-2xl font-light text-gray-100/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        animate={isDescriptionInView ? 
                            { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 }} : 
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
                            { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 }} : 
                            { y: 30, opacity: 0 }
                        }
                    >
                        Whether you're just starting your coding journey or looking to level up your skills,
                        our community provides the resources, mentorship, and collaborative opportunities
                        to help you build the future you envision.
                    </motion.p>
                    
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-12"
                        initial={{ width: 0 }}
                        animate={isDescriptionInView ? { width: 96 } : { width: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                </motion.div>
                
                <div ref={cardsRef} className="mb-32">
                    <motion.h3
                        className="text-center text-xl uppercase font-medium tracking-wider text-gray-400 mb-12"
                        initial={{ opacity: 0 }}
                        animate={isCardsInView ? { opacity: 1, transition: { duration: 0.8 }} : { opacity: 0 }}
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
                                bgPattern: "radial-gradient(circle at 20% 80%, #991b1b22 0%, transparent 30%), radial-gradient(circle at 80% 20%, #991b1b22 0%, transparent 30%)",
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
                                bgPattern: "radial-gradient(circle at 80% 80%, #991b1b22 0%, transparent 30%), radial-gradient(circle at 20% 20%, #991b1b22 0%, transparent 30%)",
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
                                bgPattern: "radial-gradient(circle at 50% 50%, #991b1b22 0%, transparent 40%)",
                                hue: "from-red-600/80 to-rose-500/80"
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isCardsInView ? "visible" : "hidden"}
                                onMouseEnter={() => {
                                    if (hoverTimeout) clearTimeout(hoverTimeout);
                                    setActiveCard(index);
                                }}
                                onMouseLeave={() => {
                                    const timeout = setTimeout(() => {
                                        setActiveCard(null);
                                    }, 300);
                                    setHoverTimeout(timeout);
                                }}
                                className="group h-full"
                            >
                                <motion.div 
                                    className={`h-full ${glassCardStyle} p-8 rounded-2xl overflow-hidden relative`}
                                    initial={{ scale: 1, y: 0 }}
                                    whileHover={{ 
                                        y: -8,
                                        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3), 0 0 15px -3px rgba(239, 68, 68, 0.15)",
                                        transition: { type: "spring", stiffness: 400, damping: 20 }
                                    }}
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ background: card.bgPattern }}></div>
                                    
                                    <motion.div
                                        className={`absolute -inset-1 bg-gradient-to-r ${card.hue} rounded-2xl opacity-0 blur-xl transition-opacity duration-700`}
                                        animate={{ opacity: activeCard === index ? 0.15 : 0 }}
                                    />
                                    
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="flex items-start justify-between">
                                            <motion.div 
                                                className="w-12 h-12 flex-shrink-0 overflow-hidden"
                                                whileHover={{ rotate: 5 }}
                                            >
                                                <motion.div
                                                    className={`w-full h-full rounded-lg p-2 bg-gradient-to-br ${card.hue} flex items-center justify-center text-white`}
                                                    animate={{ 
                                                        boxShadow: activeCard === index ? 
                                                            "0 0 20px 2px rgba(239, 68, 68, 0.3)" : 
                                                            "0 0 0px 0px rgba(239, 68, 68, 0)"
                                                    }}
                                                    transition={{ duration: 0.8 }}
                                                >
                                                    {card.icon}
                                                </motion.div>
                                            </motion.div>

                                            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                                                {card.eyebrow}
                                            </span>
                                        </div>
                                        
                                        <motion.h3 
                                            className="text-3xl font-semibold mt-6 mb-4 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-red-400 group-hover:to-rose-300 transition-all duration-500"
                                        >
                                            {card.title}
                                            
                                            <motion.span
                                                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-red-500/0 via-red-500/90 to-red-500/0"
                                                initial={{ scaleX: 0, opacity: 0 }}
                                                animate={activeCard === index ? 
                                                    { scaleX: 1, opacity: 1 } : 
                                                    { scaleX: 0, opacity: 0 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </motion.h3>
                                        
                                        <p className="text-gray-300/90 text-base leading-relaxed flex-grow">
                                            {card.content}
                                        </p>
                                        
                                        <div className="mt-8 relative overflow-hidden">
                                            <motion.div 
                                                className="flex items-center text-sm text-gray-400 group-hover:text-red-400 transition-colors duration-300 cursor-pointer"
                                                whileHover={{ x: 5 }}
                                            >
                                                <span className="mr-2 font-medium">Learn more</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <motion.path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        strokeWidth={2} 
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                        animate={activeCard === index ? 
                                                            { x: [0, 3, 0] } : 
                                                            {}}
                                                        transition={{ 
                                                            duration: 1.5, 
                                                            repeat: activeCard === index ? Infinity : 0,
                                                            repeatType: "loop",
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                </svg>
                                            </motion.div>
                                            <motion.div 
                                                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0"
                                                initial={{ width: 0, x: "0%" }}
                                                animate={activeCard === index ? 
                                                    { width: "100%" } : 
                                                    { width: 0 }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <motion.div 
                    ref={statsRef}
                    className="mb-32 relative"
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? 
                        { opacity: 1, transition: { duration: 0.8 }} : 
                        { opacity: 0 }
                    }
                >
                    <motion.div 
                        className="absolute inset-0 -z-10 opacity-10"
                        initial={{ opacity: 0 }}
                        animate={isStatsInView ? { opacity: 0.1 } : { opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="absolute top-8 left-4 w-40 h-40 border border-red-500/30 rounded-full" />
                        <div className="absolute bottom-8 right-4 w-60 h-60 border border-red-500/20 rounded-full" />
                        <div className="absolute -top-20 right-1/3 w-20 h-20 border border-red-500/10 rounded-full" />
                    </motion.div>
                    
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
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 400, damping: 17 }
                                }}
                            >
                                <motion.div
                                    className="absolute -inset-px bg-gradient-to-br from-red-500/10 to-rose-500/5 opacity-0 rounded-2xl"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                
                                <div className="relative z-10 text-center">
                                    <AnimatePresence>
                                        {isStatsInView && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ 
                                                    type: "spring", 
                                                    stiffness: 50,
                                                    delay: index * 0.2 + 0.3,
                                                    duration: 0.8 
                                                }}
                                                className="mb-4"
                                            >
                                                <svg className="w-10 h-10 mx-auto text-red-500/30" fill="currentColor" viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="40" />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    
                                    <AnimatePresence>
                                        {isStatsInView && (
                                            <div className="relative">
                                                <motion.span
                                                    className="absolute -inset-y-2 -inset-x-8 bg-red-500/5 blur-lg rounded-lg"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ 
                                                        duration: 2,
                                                        delay: index * 0.3 + 0.5,
                                                        repeat: 2,
                                                        repeatType: "reverse"
                                                    }}
                                                />
                                                <motion.h4
                                                    className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-500 mb-2"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                                                >
                                                    {stat.number}
                                                </motion.h4>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                    </div>
                                    <h5 className="text-lg font-semibold text-gray-100/90 mb-2">
                                        {stat.label}
                                    </h5>
                                    <p className="text-sm text-gray-300/90 text-center">
                                        {stat.detail}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        
                    </motion.div>
                
                <motion.div
                    ref={ctaRef}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isCtaInView ? 
                        { opacity: 1, y: 0, transition: { duration: 1 }} : 
                        { opacity: 0, y: 30 }
                    }
                >
                    <div className={`${glassCardStyle} rounded-2xl overflow-hidden relative`}>
                        <motion.div 
                            className="absolute -right-32 -bottom-32 w-96 h-96 bg-red-600/20 rounded-full filter blur-[80px] z-0"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 45, 0],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                        <motion.div 
                            className="absolute -left-32 -top-32 w-64 h-64 bg-rose-600/10 rounded-full filter blur-[60px] z-0"
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, -30, 0],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                        
                        <div className="relative z-10 p-12 md:p-16 text-center">

                            <motion.div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                                initial={{ width: 0, opacity: 0 }}
                                animate={isCtaInView ? { width: 96, opacity: 1 } : {}}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            />

                            <motion.h2 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-500">Community</span>
                            </motion.h2>
                            
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
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                <motion.button
                                    className="relative overflow-hidden px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-red-900/20 group"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <motion.span 
                                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ 
                                            x: "100%", 
                                            transition: { duration: 1, ease: "easeInOut" } 
                                        }}
                                    />
                                    <span className="relative z-10">Get Started Today</span>
                                </motion.button>
                                
                                <motion.button
                                    className="px-8 py-3 border border-red-600/50 text-red-500 hover:text-red-400 font-semibold rounded-xl transition-colors duration-300 hover:border-red-500 group"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <motion.span
                                        className="absolute inset-0 rounded-xl opacity-0 border border-red-500/0 group-hover:border-red-500/30"
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            opacity: [0, 0.5, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    />
                                    Contact Us
                                </motion.button>
                            </motion.div>
                            
                            <motion.div
                                className="mt-16 flex flex-wrap justify-center items-center gap-4 opacity-70"
                                initial={{ opacity: 0 }}
                                animate={isCtaInView ? { opacity: 0.7 } : {}}
                                transition={{ delay: 0.9, duration: 0.8 }}
                            >
                                <span className="text-sm text-gray-400 mr-3">Joined by students from:</span>
                                {["Local High School", "Tech College", "Science School", "Arts Academy", "Vocational School"].map((school, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-gray-400/70 text-sm font-medium px-3 py-1.5 border border-gray-800 rounded-md"
                                        whileHover={{ 
                                            scale: 1.05, 
                                            borderColor: "rgba(239, 68, 68, 0.3)",
                                            backgroundColor: "rgba(239, 68, 68, 0.05)"
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {school}
                                    </motion.div>
                                ))}
                            </motion.div>
                            
                            <motion.div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                                initial={{ width: 0, opacity: 0 }}
                                animate={isCtaInView ? { width: 96, opacity: 1 } : {}}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            />
                        </div>
                    </div>
                    
                    <motion.div 
                        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <svg className="w-24 h-8 text-red-500/10" viewBox="0 0 100 30" fill="none">
                            <motion.path
                                d="M0,0 Q50,30 100,0"
                                stroke="currentColor"
                                strokeWidth="1"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isCtaInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1.5, delay: 1.4 }}
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}


