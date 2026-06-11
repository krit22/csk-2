
export const TopBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-5 pb-6 flex justify-center">
            <div className="flex items-center gap-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-10 py-3 shadow-lg text-white font-bold tracking-widest text-sm">
                <a href="#" className="hover:text-[#FAFF00] transition-colors">HOME</a>
                <a href="#" className="hover:text-[#FAFF00] transition-colors">SQUAD</a>
                <a href="#" className="hover:text-[#FAFF00] transition-colors">SCHEDULE</a>
                <a href="#" className="hover:text-[#FAFF00] transition-colors">SHOP</a>
            </div>
        </nav>
    );
};
