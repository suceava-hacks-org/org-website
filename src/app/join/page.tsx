"use client"
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  grade: string;
  age: string;
  phone: string;
  githubUsername: string;
};

export default function Registration() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
    const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
    
    const headingControls = useAnimation();
    const formControls = useAnimation();
    
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        school: "",
        grade: "",
        age: "",
        phone: "",
        githubUsername: ""
    });
    
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    
    useEffect(() => {
        if (isHeadingInView) {
            headingControls.start("visible");
        }
        if (isFormInView) {
            formControls.start("visible");
        }
    }, [isHeadingInView, isFormInView, headingControls, formControls]);
    
    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    const childVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };
    
    const iconReveal = {
        hidden: { scale: 0, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 200, 
                damping: 10,
                delay: 0.2
            }
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };
    
    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};
        
        if (!formData.firstName.trim()) newErrors.firstName = "Required";
        if (!formData.lastName.trim()) newErrors.lastName = "Required";
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        
        if (!formData.school.trim()) newErrors.school = "Required";
        if (!formData.grade.trim()) newErrors.grade = "Required";
        
        if (!formData.age.trim()) {
            newErrors.age = "Required";
        } else if (isNaN(Number(formData.age)) || Number(formData.age) < 8 || Number(formData.age) > 25) {
            newErrors.age = "Age must be between 8-25";
        }
        
        if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Must be 10 digits";
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
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                school: "",
                grade: "",
                age: "",
                phone: "",
                githubUsername: ""
            });
            
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20 overflow-hidden">
            <motion.div 
                ref={sectionRef}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-4"
            >
                <motion.div 
                    ref={headingRef}
                    initial="hidden"
                    animate={headingControls}
                    variants={staggerChildren}
                    className="relative mb-16"
                >
                    <motion.div 
                        className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
                    />
                    
                    <motion.div 
                        className="flex items-center gap-6 mb-8"
                        variants={childVariant}
                    >
                        <motion.div 
                            className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-full"
                        >
                            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold">Join <span className="text-red-500">Suceava Hacks</span></h1>
                    </motion.div>
                    
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl leading-relaxed"
                        variants={childVariant}
                    >
                        Ready to start your coding journey? Fill out the form below to become a member of our 
                        <span className="text-red-500 font-semibold"> Hack Club </span> 
                        and join a community of passionate student developers in Suceava.
                    </motion.p>
                </motion.div>
                <motion.form 
                    ref={formRef}
                    initial="hidden"
                    animate={formControls}
                    variants={staggerChildren}
                    onSubmit={handleSubmit}
                    className="relative z-10 p-8 md:p-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-red-500/10 mb-16"
                >
                    <motion.div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
                    
                    <motion.h2 
                        className="text-3xl font-bold mb-10 flex items-center gap-3"
                        variants={childVariant}
                    >
                        <motion.div 
                            className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center"
                            variants={iconReveal}
                        >
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                        </motion.div>
                        Personal Information
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <motion.div variants={childVariant}>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                First Name*
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full bg-[#121212] border ${errors.firstName ? 'border-red-600' : 'border-red-500/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300`}
                                placeholder="Your first name"
                            />
                            {errors.firstName && (
                                <p className="mt-1 text-red-500 text-xs">{errors.firstName}</p>
                            )}
                        </motion.div>
                        
                        <motion.div variants={childVariant}>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Last Name*
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full bg-[#121212] border ${errors.lastName ? 'border-red-600' : 'border-red-500/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300`}
                                placeholder="Your last name"
                            />
                            {errors.lastName && (
                                <p className="mt-1 text-red-500 text-xs">{errors.lastName}</p>
                            )}
                        </motion.div>
                        
                        <motion.div variants={childVariant}>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Email Address*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full bg-[#121212] border ${errors.email ? 'border-red-600' : 'border-red-500/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                            )}
                        </motion.div>
                        
                        <motion.div variants={childVariant}>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full bg-[#121212] border ${errors.phone ? 'border-red-600' : 'border-red-500/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300`}
                                placeholder="Your phone number"
                            />
                            {errors.phone && (
                                <p className="mt-1 text-red-500 text-xs">{errors.phone}</p>
                            )}
                        </motion.div>
                    </div>
                    
                    <motion.h2 
                        className="text-3xl font-bold mb-10 flex items-center gap-3"
                        variants={childVariant}
                    >
                        <motion.div 
                            className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center"
                            variants={iconReveal}
                        >
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                        </motion.div>
                        Academic Information
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <motion.div variants={childVariant}>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                School*
                            </label>
                            <input
                                type="text"
                                name="school"
                                value={formData.school}
                                onChange={handleChange}
                                className={`w-full bg-[#121212] border ${errors.school ? 'border-red-600' : 'border-red-500/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300`}
                                placeholder="Your school name"
                            />
                            {errors.school && (
                                <p className="mt-1 text-red-500 text-xs">{errors.school}</p>
                            )}
                        </motion.div>
                        
                        <motion.div variants={childVariant}>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Grade/Year*
                            </label>
                            <select
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                className={`w-full h-12 bg-[#121212] border ${errors.grade ? 'border-red-600' : 'border-red-500/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300`}
                            >
                                <option value="">Select grade</option>
                                <option value="5">5th Grade</option>
                                <option value="6">6th Grade</option>
                                <option value="7">7th Grade</option>
                                <option value="8">8th Grade</option>
                                <option value="9">9th Grade</option>
                                <option value="10">10th Grade</option>
                                <option value="11">11th Grade</option>
                                <option value="12">12th Grade</option>
                                <option value="college">College/University</option>
                            </select>
                            {errors.grade && (
                                <p className="mt-1 text-red-500 text-xs">{errors.grade}</p>
                            )}
                        </motion.div>
                        
                        <motion.div variants={childVariant}>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Age*
                            </label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                min="8"
                                max="25"
                                className={`w-full bg-[#121212] border ${errors.age ? 'border-red-600' : 'border-red-500/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300`}
                                placeholder="Your age"
                            />
                            {errors.age && (
                                <p className="mt-1 text-red-500 text-xs">{errors.age}</p>
                            )}
                        </motion.div>
                    </div>
                    
                    <motion.h2 
                        className="text-3xl font-bold mb-10 flex items-center gap-3"
                        variants={childVariant}
                    >
                        <motion.div 
                            className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center"
                            variants={iconReveal}
                        >
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </motion.div>
                        Coding Experience
                    </motion.h2>
                    
                    <motion.div variants={childVariant} className="mb-10">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            GitHub Username (if you have one)
                        </label>
                        <div className="flex items-center">
                            <span className="bg-[#0d0d0d] border border-red-500/20 rounded-l-lg px-4 py-3 text-gray-400">github.com/</span>
                            <input
                                type="text"
                                name="githubUsername"
                                value={formData.githubUsername}
                                onChange={handleChange}
                                className="flex-grow bg-[#121212] border border-red-500/20 rounded-r-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
                                placeholder="username"
                            />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        variants={childVariant}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                    >
                        <motion.button 
                            type="submit"
                            disabled={isSubmitting}
                            className="relative w-full sm:w-auto bg-red-500 disabled:bg-red-500/50 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 group"
                            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Join Suceava Hacks</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </>
                                )}
                            </span>
                            <motion.div 
                                className="absolute inset-0 rounded-xl bg-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        </motion.button>
                    </motion.div>
                    
                    {isSuccess && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Registration successful! We will contact you soon.</span>
                            </div>
                        </motion.div>
                    )}
                    
                    <motion.p 
                        variants={childVariant}
                        className="mt-6 text-center text-sm text-gray-400"
                    >
                        By registering, you agree to the <span className="text-red-500 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-red-500 cursor-pointer hover:underline">Privacy Policy</span>
                    </motion.p>
                </motion.form>
                
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                    <p className="text-gray-300 mb-6">
                        If you have any questions about joining Suceava Hacks or need assistance with the registration process, 
                        do not hesitate to contact us.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:suceava.hackclub@protonmail.com" className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>suceava.hackclub@protonmail.com</span>
                        </a>
                        <span className="hidden sm:inline text-gray-600">|</span>
                        <a href="https://discord.gg/suceavahacks" className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .03-.057c.42-4.477-.853-8.994-3.61-13.69a.07.07 0 0 0-.032-.027zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                            </svg>
                            <span>discord.gg/suceavahacks</span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
