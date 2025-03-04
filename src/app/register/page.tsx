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
    category: string;
};

export default function Register() {
    const [selectedEvent, setSelectedEvent] = useState<string>("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        grade: "",
        interests: "",
        parentName: "",
        parentEmail: "",
        dietaryRestrictions: "",
        accommodations: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const successRef = useRef(null);
    
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
    const isFormInView = useInView(formRef, { once: true, amount: 0.1 });
    
    const headerControls = useAnimation();
    const formControls = useAnimation();

    const [events, setEvents] = useState<Event[]>([
        {
            id: "1",
            title: "Intro to Github and web development",
            date: "April 12, 2025",
            time: "14:00 - 17:00",
            location: "CNPRSV - CDI",
            category: "workshop"
        },
    ]);
    
    useEffect(() => {
        if (isHeaderInView) {
            headerControls.start("visible");
        }
        if (isFormInView) {
            formControls.start("visible");
        }
        setEvents(events);
    }, [isHeaderInView, isFormInView, headerControls, formControls]);

    const fadeInUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    const staggerForm = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const formFieldVariant = {
        hidden: { y: 20, opacity: 0 },
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = {...prev};
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        
        if (!selectedEvent) newErrors.event = "Please select an event";
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSuccess(true);
            setSelectedEvent("");
            setFormData({
                name: "",
                email: "",
                phone: "",
                school: "",
                grade: "",
                interests: "",
                parentName: "",
                parentEmail: "",
                dietaryRestrictions: "",
                accommodations: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrors({ submit: "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                className="max-w-4xl mx-auto px-4 relative z-10"
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
                    className="mb-12 text-center"
                >
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-6"
                        variants={fadeInUp}
                    >
                        <motion.span 
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
                            Register
                        </motion.span> for an Event
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Fill out the form below to secure your spot at one of our upcoming events. We cannot wait to see you there!
                    </motion.p>
                </motion.div>
                
                {!isSuccess ? (
                    <motion.div
                        ref={formRef}
                        initial="hidden"
                        animate={formControls}
                        variants={staggerForm}
                        className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/10 p-8 md:p-10 relative overflow-hidden"
                    >
                        <motion.div 
                            className="absolute -left-20 -bottom-20 w-64 h-64 bg-red-500 rounded-full opacity-5"
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
                        
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <motion.div variants={formFieldVariant}>
                                <label htmlFor="event" className="block text-gray-300 font-medium mb-2">
                                    Select Event <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="event"
                                        value={selectedEvent}
                                        onChange={(e) => setSelectedEvent(e.target.value)}
                                        className={`w-full py-3 px-4 bg-[#252525] border ${errors.event ? 'border-red-500' : 'border-red-500/20'} focus:border-red-500/50 outline-none rounded-xl text-gray-200 appearance-none`}
                                    >
                                        <option value="">Choose an event</option>
                                        {events.map((event) => (
                                            <option key={event.id} value={event.id}>
                                                {event.title} - {event.date}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.event && <p className="mt-1 text-sm text-red-500">{errors.event}</p>}
                            </motion.div>
                            
                            <motion.div variants={formFieldVariant} className="pt-4">
                                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-red-500/20">Personal Information</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full py-3 px-4 bg-[#252525] border ${errors.name ? 'border-red-500' : 'border-red-500/20'} focus:border-red-500/50 outline-none rounded-xl text-gray-200`}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full py-3 px-4 bg-[#252525] border ${errors.email ? 'border-red-500' : 'border-red-500/20'} focus:border-red-500/50 outline-none rounded-xl text-gray-200`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="school" className="block text-gray-300 font-medium mb-2">
                                            School Name
                                        </label>
                                        <input
                                            type="text"
                                            id="school"
                                            name="school"
                                            value={formData.school}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200"
                                            placeholder="Your School's Name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="grade" className="block text-gray-300 font-medium mb-2">
                                            Grade Level
                                        </label>
                                        <select
                                            id="grade"
                                            name="grade"
                                            value={formData.grade}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200 appearance-none"
                                        >
                                            <option value="">Select Grade</option>
                                            <option value="6">6th Grade</option>
                                            <option value="7">7th Grade</option>
                                            <option value="8">8th Grade</option>
                                            <option value="9">9th Grade (Freshman)</option>
                                            <option value="10">10th Grade (Sophomore)</option>
                                            <option value="11">11th Grade (Junior)</option>
                                            <option value="12">12th Grade (Senior)</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="interests" className="block text-gray-300 font-medium mb-2">
                                            Tech Interests
                                        </label>
                                        <input
                                            type="text"
                                            id="interests"
                                            name="interests"
                                            value={formData.interests}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200"
                                            placeholder="Coding, Game Dev, Robotics, etc."
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={formFieldVariant} className="pt-4">
                                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-red-500/20">Parent/Guardian Information</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="parentName" className="block text-gray-300 font-medium mb-2">
                                            Parent/Guardian Name
                                        </label>
                                        <input
                                            type="text"
                                            id="parentName"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200"
                                            placeholder="Parent/Guardian Name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="parentEmail" className="block text-gray-300 font-medium mb-2">
                                            Parent/Guardian Email
                                        </label>
                                        <input
                                            type="email"
                                            id="parentEmail"
                                            name="parentEmail"
                                            value={formData.parentEmail}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200"
                                            placeholder="parent.email@example.com"
                                        />
                                        <p className="mt-1 text-xs text-gray-400">We may send permission forms or event details to this email</p>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={formFieldVariant} className="pt-4">
                                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-red-500/20">Additional Information</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="dietaryRestrictions" className="block text-gray-300 font-medium mb-2">
                                            Dietary Restrictions
                                        </label>
                                        <input
                                            type="text"
                                            id="dietaryRestrictions"
                                            name="dietaryRestrictions"
                                            value={formData.dietaryRestrictions}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200"
                                            placeholder="Vegetarian, Vegan, Allergies, etc."
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="accommodations" className="block text-gray-300 font-medium mb-2">
                                            Accommodations or Special Requirements
                                        </label>
                                        <textarea
                                            id="accommodations"
                                            name="accommodations"
                                            value={formData.accommodations}
                                            onChange={handleChange}
                                            className="w-full py-3 px-4 bg-[#252525] border border-red-500/20 focus:border-red-500/50 outline-none rounded-xl text-gray-200 min-h-[100px]"
                                            placeholder="Let us know if you need any accommodations or have special requirements"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                            
                            {errors.submit && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-lg"
                                >
                                    {errors.submit}
                                </motion.div>
                            )}
                            
                            <motion.div 
                                variants={formFieldVariant}
                                className="pt-4"
                            >
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 ${isSubmitting 
                                        ? 'bg-gray-600 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'} 
                                        text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : 'Register Now'}
                                </button>
                                
                                <p className="mt-4 text-sm text-gray-400 text-center">
                                    By registering, you agree to our <Link href="#" className="text-red-400 hover:text-red-300">Terms of Service</Link> and <Link href="#" className="text-red-400 hover:text-red-300">Privacy Policy</Link>
                                </p>
                            </motion.div>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        ref={successRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/10 p-10 text-center relative overflow-hidden"
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
                        
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="w-20 h-20 bg-red-500/10 rounded-full mx-auto flex items-center justify-center mb-6"
                        >
                            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                        
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Registration Successful!</h2>
                        <p className="text-gray-300 mb-8 max-w-lg mx-auto relative z-10">
                            Thank you for registering! We have sent a confirmation email with all the details. We look forward to seeing you at the event.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/events" 
                                className="inline-block bg-[#252525] hover:bg-[#333] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 relative z-10"
                            >
                                View All Events
                            </Link>
                            <button 
                                onClick={() => setIsSuccess(false)}
                                className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 relative z-10"
                            >
                                Register for Another Event
                            </button>
                        </div>
                    </motion.div>
                )}
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center"
                >
                    <Link 
                        href="/events" 
                        className="inline-flex items-center text-gray-400 hover:text-red-400 transition-colors duration-300"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Events
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}