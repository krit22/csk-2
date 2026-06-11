
export const StatsTicker = () => {
    const stats = [
        "5 TIME CHAMPIONS",
        "ESTABLISHED 2008",
        "WHISTLE PODU",
        "YELLOVE",
        "ANBUDEN",
        "SUPER KINGS",
    ];

    return (
        <div className="w-full bg-[#FAFF00] overflow-hidden py-1.5 border-y border-black/10">
            <div className="flex whitespace-nowrap animate-marquee">
                <div className="flex gap-12 items-center">
                    {stats.map((stat, i) => (
                        <span key={i} className="text-black font-jersey text-lg md:text-xl font-bold tracking-widest">
                            {stat}
                        </span>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-12 items-center ml-12">
                    {stats.map((stat, i) => (
                        <span key={`dup-${i}`} className="text-black font-jersey text-lg md:text-xl font-bold tracking-widest">
                            {stat}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
