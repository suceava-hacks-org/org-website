"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurMission() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef(null);
    const ctaRef = useRef(null);
    
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isDescriptionInView = useInView(descriptionRef, { once: true, amount: 0.5 });
    const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
    
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i : number) => ({
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.6,
                delay: i * 0.2
            }
        }),
        hover: {
            y: -5,
            transition: { duration: 0.3 }
        }
    };
    
    return (
        <div className="relative overflow-hidden pb-20 pt-20">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.h2 
                    ref={titleRef}
                    className="text-5xl font-bold mb-16 text-center text-white"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isTitleInView ? 
                        { y: 0, opacity: 1, transition: { duration: 0.8 }} : 
                        { y: 30, opacity: 0 }
                    }
                >
                    Our <span className="text-red-500">Mission</span>
                </motion.h2>
                
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
                        <p className="text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
                            We exist to ignite the creative potential in every young developer, 
                            fostering an environment where innovation thrives and technology 
                            becomes a powerful tool for positive change.
                        </p>
                    </motion.div>
                    
                    <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full col-span-1 lg:col-span-3">
                        {[
                            {
                                title: "Community",
                                content: "We build an inclusive space where diverse perspectives thrive, everyone belongs, and collaboration drives innovation forward.",
                                icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            },
                            {
                                title: "Innovation",
                                content: "We encourage creative thinking, experimentation with emerging technologies, and the courage to push boundaries.",
                                icon: <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            },
                            {
                                title: "Growth",
                                content: "We foster continuous learning and development of both technical and interpersonal skills through mentorship and collaboration.",
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
                            >
                                <motion.div 
                                    className="h-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm border border-red-900/30 p-8 rounded-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20 hover:shadow-lg hover:scale-105 transform"
                                    whileHover="hover"
                                >
                                    <div className="flex items-center mb-6">
                                        <motion.div 
                                            className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-4"
                                            whileHover={{ 
                                                scale: 1.1,
                                                backgroundColor: "rgba(239, 68, 68, 0.3)"
                                            }}
                                        >
                                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                {card.icon}
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-2xl font-semibold text-red-400">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {card.content}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <motion.div 
                    ref={ctaRef}
                    className="mt-20 text-center relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={isCtaInView ? 
                        { y: 0, opacity: 1, transition: { duration: 0.8 }} : 
                        { y: 50, opacity: 0 }
                    }
                >
                    <motion.div 
                        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-48 bg-red-500 rounded-full filter blur-3xl opacity-5"
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
                    <h3 className="text-3xl font-semibold mb-8 text-white">
                        Ready to shape the future with us?
                    </h3>
                    <motion.button 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-900/30"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 15px -3px rgba(185, 28, 28, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join Our Community
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}