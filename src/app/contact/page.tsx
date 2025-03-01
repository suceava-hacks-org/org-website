"use client"
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const contactInfoRef = useRef<HTMLDivElement>(null);

    const [formState, setFormState] = useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const isHeadingInView = useInView(headingRef, { amount: 0.3, once: true });
    const isFormInView = useInView(formRef, { amount: 0.15, once: true });
    const isMapInView = useInView(mapRef, { amount: 0.15, once: true });
    const isContactInfoInView = useInView(contactInfoRef, { amount: 0.15, once: true });
    
    const headingControls = useAnimation();
    const formControls = useAnimation();
    const mapControls = useAnimation();
    const contactInfoControls = useAnimation();
    
    useEffect(() => {
        if (isHeadingInView) headingControls.start("visible");
        if (isFormInView) formControls.start("visible");
        if (isMapInView) mapControls.start("visible");
        if (isContactInfoInView) contactInfoControls.start("visible");
    }, [
        isHeadingInView, isFormInView, isMapInView, isContactInfoInView, 
        headingControls, formControls, mapControls, contactInfoControls
    ]);
    
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
    
    const formItemVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formState.name.trim()) {
            newErrors.name = "Name is required";
        }
        
        if (!formState.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
            newErrors.email = "Please enter a valid email";
        }
        
        if (!formState.message.trim()) {
            newErrors.message = "Message is required";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            
            // Reset submission status after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
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
                    className="relative mb-20"
                >
                    <motion.div 
                        className="absolute -top-20 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
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
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold">Contact <span className="text-red-500">Us</span></h1>
                    </motion.div>
                    
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl leading-relaxed"
                        variants={childVariant}
                    >
                        Have a question or want to join Suceava Hacks? We would love to hear from you!
                        Reach out to us using the form below or connect through any of our social channels.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <motion.div 
                        ref={formRef}
                        initial="hidden"
                        animate={formControls}
                        variants={staggerChildren}
                        className="relative"
                    >
                        <motion.div 
                            className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        />
                        
                        <motion.h2 
                            className="text-3xl font-bold mb-8 flex items-center gap-3"
                            variants={childVariant}
                        >
                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span>Send Us a Message</span>
                        </motion.h2>

                        {isSubmitted ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-6 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/20 rounded-xl mb-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 text-green-400 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
                                        <p className="text-gray-300">
                                            Thank you for reaching out. We will get back to you as soon as possible.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form 
                                onSubmit={handleSubmit}
                                className="space-y-6 relative z-10"
                            >
                                <motion.div variants={formItemVariant}>
                                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.name ? 'border-red-500' : 'border-red-500/20'} rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                                    )}
                                </motion.div>
                                
                                <motion.div variants={formItemVariant}>
                                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.email ? 'border-red-500' : 'border-red-500/20'} rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </motion.div>
                                
                                <motion.div variants={formItemVariant}>
                                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">Subject (Optional)</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-red-500/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300"
                                        placeholder="How can we help?"
                                    />
                                </motion.div>
                                
                                <motion.div variants={formItemVariant}>
                                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-[#1a1a1a] border ${errors.message ? 'border-red-500' : 'border-red-500/20'} rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-300 resize-none`}
                                        placeholder="Tell us what you need..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                                    )}
                                </motion.div>
                                
                                <motion.div 
                                    variants={formItemVariant}
                                    className="pt-4"
                                >
                                    <motion.button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="relative bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto group disabled:opacity-70 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                                        whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </>
                                            )}
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
                                </motion.div>
                            </motion.form>
                        )}
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            ref={mapRef}
                            initial="hidden"
                            animate={mapControls}
                            variants={staggerChildren}
                            className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-red-500/10"
                        >
                            <motion.h2 
                                className="text-3xl font-bold mb-6 flex items-center gap-3"
                                variants={childVariant}
                            >
                                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Find Us</span>
                            </motion.h2>
                            
                            <motion.div 
                                variants={childVariant}
                                className="h-full w-full bg-[#1a1a1a] border border-red-500/10 rounded-2xl flex items-center justify-center"
                            >
                                <div className="text-center p-4">
                                    <svg className="w-12 h-12 text-red-500 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-gray-400 max-w-sm mx-auto">
                                        Interactive map would be implemented here using Google Maps, Mapbox, or another mapping service.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            ref={contactInfoRef}
                            initial="hidden"
                            animate={contactInfoControls}
                            variants={staggerChildren}
                            className="space-y-6"
                        >
                            <motion.h2 
                                className="text-3xl font-bold mb-6 flex items-center gap-3"
                                variants={childVariant}
                            >
                                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>Contact Information</span>
                            </motion.h2>
                            
                            <motion.div
                                variants={childVariant}
                                className="p-6 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-red-500 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-300 font-semibold">Email</h3>
                                            <a href="mailto:contact@suceavahacks.org" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                                                contact@suceavahacks.org
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-red-500 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-300 font-semibold">Phone</h3>
                                            <a href="tel:+40123456789" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                                                +40 123 456 789
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-red-500 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-300 font-semibold">Address</h3>
                                            <p className="text-gray-400">
                                                asdad<br />
                                                1sdasd<br />
                                                Suceava, 720229, Romania
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                variants={childVariant}
                                className="p-6 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
                            >
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                    Connect With Us
                                </h3>
                                <div className="flex items-center space-x-4">
                                    <motion.a 
                                        href="#" 
                                        className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                                        whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.615 11.615 0 006.29 1.84" />
                                        </svg>
                                    </motion.a>
                                    <motion.a 
                                        href="#" 
                                        className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                                        whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2v4.26H8.014v-8.6h2.558v1.18h.037c.355-.67 1.227-1.38 2.52-1.38 2.7 0 3.208 1.78 3.208 4.1v4.7zM5.258 6.558c-.86 0-1.56-.7-1.56-1.56s.7-1. 1.56-1.56c.86 0 1.56.7 1.56 1.56s-.7 1.56-1.56 1.56z" clipRule="evenodd" />
                                        </svg>
                                    </motion.a>
                                    <motion.a 
                                        href="#" 
                                        className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                                        whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.14 12.86l.01-.01a1.5 1.5 0 002.12 0l.01-.01 2.83-2.83a1.5 1.5 0 10-2.12-2.12l-.01.01-2.83 2.83a1.5 1.5 0 000 2.12zm9.71-7.28a1.5 1.5 0 00-2.12 0l-.01.01-2.83 2.83a1.5 1.5 0 102.12 2.12l.01-.01 2.83-2.83a1.5 1.5 0 000-2.12z" clipRule="evenodd" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
