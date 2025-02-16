export default function OurMission() {
    return (
        <div className="py-24 relative overflow-hidden">
            <div className="absolute -right-40 -top-40 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-10"></div>
            
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <h2 className="text-5xl font-bold mb-16 text-center text-white">
                    Our <span className="text-red-500">Mission</span>
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-3">
                        <p className="text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
                            We exist to ignite the creative potential in every young developer, 
                            fostering an environment where innovation thrives and technology 
                            becomes a powerful tool for positive change.
                        </p>
                    </div>
                    

                    <div className="group">
                        <div className="h-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm border border-red-900/30 p-8 rounded-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20 hover:shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-red-400">Community</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                We build an inclusive space where diverse perspectives thrive,
                                everyone belongs, and collaboration drives innovation forward.
                            </p>
                        </div>
                    </div>
                    
                    <div className="group">
                        <div className="h-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm border border-red-900/30 p-8 rounded-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20 hover:shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-red-400">Innovation</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                We encourage creative thinking, experimentation with emerging
                                technologies, and the courage to push boundaries.
                            </p>
                        </div>
                    </div>
                    
                    <div className="group">
                        <div className="h-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm border border-red-900/30 p-8 rounded-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20 hover:shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-red-400">Growth</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                We foster continuous learning and development of both technical
                                and interpersonal skills through mentorship and collaboration.
                            </p>
                        </div>
                    </div>
                </div>
                

                <div className="mt-20 text-center relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-48 bg-red-500 rounded-full filter blur-3xl opacity-5"></div>
                    <h3 className="text-3xl font-semibold mb-8 text-white">
                        Ready to shape the future with us?
                    </h3>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-900/30">
                        Join Our Community
                    </button>
                </div>
            </div>
        </div>
    )
}