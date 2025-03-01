"use client"
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function OurMission() {
    const [activeCard, setActiveCard] = useState(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef(null);
    const ctaRef = useRef(null);
    const statsRef = useRef(null);
    
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isSubtitleInView = useInView(subtitleRef, { once: true, amount: 0.5 });
    const isDescriptionInView = useInView(descriptionRef, { once: true, amount: 0.5 });
    const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
    const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
    
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i: number) => ({
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.6,
                delay: i * 0.2
            }
        }),
        hover: {
            y: -10,
            scale: 1.03,
            transition: { duration: 0.3 }
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

    const countUp = (num: string) => {
        return { 
            initial: 0,
            animate: parseInt(num),
            transition: { duration: 2, ease: "easeOut" }
        };
    };
    
    return (
        <div className="relative overflow-hidden pb-32 pt-24">
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
                <motion.div 
                    className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-red-600 rounded-full filter blur-3xl opacity-5"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.h2 
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold mb-6 text-center text-white"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isTitleInView ? 
                        { y: 0, opacity: 1, transition: { duration: 0.8 }} : 
                        { y: 30, opacity: 0 }
                    }
                >
                    Our <motion.span 
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
                        Mission
                    </motion.span>
                </motion.h2>
                
                <motion.h3
                    ref={subtitleRef}
                    className="text-xl md:text-2xl font-medium mb-16 text-center text-gray-300"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isSubtitleInView ? 
                        { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 }} : 
                        { y: 30, opacity: 0 }
                    }
                >
                    <motion.span
                        className="relative inline-block"
                        initial={{ opacity: 1 }}
                        animate={{ 
                            opacity: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        Empowering
                    </motion.span>{" "}
                    the next generation of tech innovators
                </motion.h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div 
                        ref={descriptionRef}
                        className="lg:col-span-3"
                        initial={{ y: 30, opacity: 0 }}
                        animate={isDescriptionInView ? 
                            { y: 0, opacity: 1, transition: { duration: 0.8 }} : 
                            { y: 30, opacity: 0 }
                        }
                    >
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                            We exist to{" "}
                            <motion.span 
                                className="font-semibold text-red-400"
                                animate={{
                                    textShadow: ["0px 0px 0px rgba(248, 113, 113, 0)", "0px 0px 8px rgba(248, 113, 113, 0.5)", "0px 0px 0px rgba(248, 113, 113, 0)"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                ignite the creative potential
                            </motion.span>{" "}
                            in every young developer, 
                            fostering an environment where innovation thrives and technology 
                            becomes a powerful tool for positive change.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
                            Whether you're just starting your coding journey or looking to level up your skills,
                            our community provides the resources, mentorship, and collaborative opportunities
                            to help you build the future you envision.
                        </p>
                    </motion.div>
                    
                    <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full col-span-1 lg:col-span-3">
                        {[
                            {
                                title: "Community",
                                content: "We build an inclusive space where diverse perspectives thrive, everyone belongs, and collaboration drives innovation forward. Our peer-to-peer learning environment encourages students to share knowledge and solve problems together.",
                                icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            },
                            {
                                title: "Innovation",
                                content: "We encourage creative thinking, experimentation with emerging technologies, and the courage to push boundaries. Through hackathons, challenges, and project-based learning, students develop the skills to transform ideas into impactful solutions.",
                                icon: <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            },
                            {
                                title: "Growth",
                                content: "We foster continuous learning and development of both technical and interpersonal skills through mentorship and collaboration. Our curriculum adapts to industry trends, ensuring students gain relevant experience with technologies that matter.",
                                icon: <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            }
                        ].map((card, index) => (
                            <motion.div
                                className="group"
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isCardsInView ? "visible" : "hidden"}
                                onHoverStart={() => setActiveCard(index)}
                                onHoverEnd={() => setActiveCard(null)}
                            >
                                <motion.div 
                                    className="h-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm border border-red-900/30 p-8 rounded-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20 hover:shadow-lg relative overflow-hidden"
                                    whileHover="hover"
                                >
                                    <motion.div 
                                        className="absolute -right-20 -bottom-20 w-40 h-40 bg-red-500 rounded-full opacity-10 z-0"
                                        animate={activeCard === index ? {
                                            scale: [1, 1.5],
                                            opacity: [0.1, 0.15],
                                            rotate: [0, 45],
                                        } : {}}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    />

                                    <div className="flex items-center mb-6 relative z-10">
                                        <motion.div 
                                            className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mr-4 relative"
                                            whileHover={{ 
                                                scale: 1.1,
                                                rotate: [0, 5, -5, 0],
                                                transition: { duration: 0.5 }
                                            }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 w-full h-full rounded-full bg-red-500/30"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.3, 0, 0.3]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }}
                                            />
                                            <svg className="w-6 h-6 text-red-500 relative z-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                {card.icon}
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-2xl font-semibold text-red-400">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed relative z-10">
                                        {card.content}
                                    </p>
                                    
                                    <motion.div 
                                        className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-400 font-medium text-sm"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                    >
                                        Learn more →
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <motion.div 
                    ref={statsRef}
                    className="mt-20 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? 
                        { opacity: 1, transition: { duration: 0.8 }} : 
                        { opacity: 0 }
                    }
                >
                    {[
                        { number: "1000+", label: "Active Student Members", delay: 0 },
                        { number: "50+", label: "Campus Chapters", delay: 1 },
                        { number: "200+", label: "Projects Completed", delay: 2 }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="text-center p-6 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm border border-red-900/20 rounded-xl relative overflow-hidden"
                            variants={statsVariants}
                            custom={index}
                            initial="hidden"
                            animate={isStatsInView ? "visible" : "hidden"}
                            whileHover={{
                                y: -5,
                                border: "1px solid rgba(239, 68, 68, 0.3)",
                                boxShadow: "0px 10px 30px -5px rgba(239, 68, 68, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="absolute -right-10 -top-10 w-40 h-40 bg-red-500 rounded-full opacity-10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            
                            <AnimatePresence>
                                {isStatsInView && (
                                    <motion.h3 
                                        className="text-4xl md:text-5xl font-bold text-red-500 mb-2 relative z-10"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ 
                                            scale: 1,
                                            opacity: 1,
                                            transition: { 
                                                duration: 0.6,
                                                delay: index * 0.2
                                            }
                                        }}
                                        whileHover={{
                                            textShadow: "0px 0px 8px rgba(239, 68, 68, 0.3)",
                                        }}
                                    >
                                        <motion.span
                                            {...countUp(stat.number.replace("+", ""))}
                                        >
                                            {stat.number.replace("+", "")}
                                        </motion.span>
                                        {stat.number.includes("+") && "+"}
                                    </motion.h3>
                                )}
                            </AnimatePresence>
                            
                            <p className="text-gray-300 text-lg relative z-10">{stat.label}</p>
                            
                            <motion.div
                                className="absolute inset-0 w-full h-full bg-red-500/5 opacity-0"
                                initial={{ opacity: 0 }}
                                whileHover={{ 
                                    opacity: 0.5,
                                    transition: { duration: 0.3 }
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div 
                    ref={ctaRef}
                    className="mt-16 text-center relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={isCtaInView ? 
                        { y: 0, opacity: 1, transition: { duration: 0.8 }} : 
                        { y: 50, opacity: 0 }
                    }
                >
                    <motion.div 
                        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-500 rounded-full filter blur-3xl opacity-5"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                    <h3 className="text-3xl font-semibold mb-6 text-white">
                        Ready to <motion.span 
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
                            shape the future
                        </motion.span> with us?
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Join our vibrant community of student developers, gain access to exclusive workshops, 
                        connect with industry mentors, and collaborate on projects that make a difference.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <motion.button 
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-900/30 relative overflow-hidden"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 10px 15px -3px rgba(185, 28, 28, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span 
                                className="absolute inset-0 bg-white opacity-0"
                                initial={{ opacity: 0, x: "-100%" }}
                                whileHover={{ 
                                    opacity: 0.2, 
                                    x: "100%",
                                    transition: { duration: 0.5 }
                                }}
                            />
                            <span className="relative z-10">Join Our Community</span>
                        </motion.button>
                        <motion.button 
                            className="border border-red-600 hover:border-red-500 text-red-500 font-bold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                            whileHover={{ 
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span 
                                className="absolute inset-0 border border-red-500 rounded-lg opacity-0"
                                animate={{
                                    opacity: [0, 0.5, 0],
                                    scale: [0.8, 1.1, 0.8],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                            />
                            <span className="relative z-10">Explore Resources</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}