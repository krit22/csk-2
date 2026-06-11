import { useEffect, useState } from "react";
import hero1 from "../assets/cropped-lion.png";
import background1 from "../assets/background1.png";
import { StatsTicker } from "./StatsTicker";
import GlassTimer from "./GlassTimer";

export const HeroSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return <>
        <div 
            style={{ backgroundImage: `url(${background1})` }}
            className="h-screen w-screen flex flex-col md:flex-row bg-cover bg-center overflow-hidden relative"
        >
            <div className="w-full h-full md:w-[50%] flex items-center justify-center px-4">
                <div className="w-full max-w-2xl flex flex-col items-center md:items-start justify-center">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="overflow-hidden">
                            <div className={`text-8xl md:text-9xl font-bold font-jersey text-[#FAFF00] tracking-widest transition-transform duration-1000 ease-out ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>
                                CHENNAI
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <div className={`text-8xl md:text-9xl font-bold text-white font-jersey tracking-widest transition-transform duration-1000 delay-150 ease-out ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>
                                SUPER
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <div className={`text-8xl md:text-9xl font-bold text-white font-jersey tracking-widest transition-transform duration-1000 delay-300 ease-out ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>
                                KINGS
                            </div>
                        </div>
                    </div>
                    <div className={`border border-white text-white px-6 py-1 text-xl md:text-2xl font-bold font-jua tracking-widest w-fit mt-7 md:mt-7 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        EST. 2008
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-[50%] relative">
                <img src={hero1} alt="Lion" className={`absolute bottom-[-30%] right-[5%] h-[160%] max-w-none object-contain object-right-bottom transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} />
            </div>

            <GlassTimer />

            {/* Full width bottom ticker */}
            <div className={`absolute bottom-0 left-0 w-full z-10 transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <StatsTicker />
            </div>
        </div>
    </>
};
