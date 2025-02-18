"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20">
            <motion.div 
                ref={sectionRef}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-4"
            >
                <div className="relative mb-24">
                    <h1 className="text-7xl font-bold mb-8">About <span className="text-red-500">Hack Club</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Hack Club is a global network of student-led coding clubs and makers building the future with technology. We believe that coding is a superpower, and every student deserves the opportunity to harness it.
                    </p>
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    <motion.div 
                        className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        <h3 className="text-2xl font-bold text-white mb-4">Student-Led</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Our clubs are entirely led by students, for students. We believe in learning through doing and teaching others.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        <h3 className="text-2xl font-bold text-white mb-4">Real Projects</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Members build real projects, from games to websites to hardware hacks. We emphasize hands-on learning and creative exploration.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        <h3 className="text-2xl font-bold text-white mb-4">Global Community</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Join a worldwide network of young makers, with clubs across 30+ countries and countless opportunities for collaboration.
                        </p>
                    </motion.div>
                </div>

                <div className="mb-24">
                    <h2 className="text-5xl font-bold mb-12">What We <span className="text-red-500">Do</span></h2>
                    <div className="space-y-6">
                        <motion.div 
                            className="group p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Weekly Meetings</h3>
                            <p className="text-gray-400 leading-relaxed max-w-4xl">
                                Our clubs meet weekly to work on coding projects, learn new technologies, and collaborate with fellow members. From web development to IoT, cybersecurity to Linux, we explore diverse areas of technology.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="group p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Workshops & Events</h3>
                            <p className="text-gray-400 leading-relaxed max-w-4xl">
                                We organize regular workshops, hackathons, and special events where members can dive deep into specific technologies, collaborate on projects, and connect with the broader tech community.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="group p-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Community Projects</h3>
                            <p className="text-gray-400 leading-relaxed max-w-4xl">
                                Our members work on both individual and group projects, building everything from websites and apps to hardware solutions and CTF challenges. We believe in learning by creating and sharing knowledge.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div 
                    className="text-center py-16 relative"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
                    <h2 className="text-5xl font-bold mb-6">Ready to <span className="text-red-500">Join Us</span>?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Whether you are a beginner or an experienced coder, there is a place for you in our community.
                    </p>
                    <button className="relative bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
                        Join Hack Club
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}