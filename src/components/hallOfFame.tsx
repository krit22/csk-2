import hallOfFameBg from '../assets/hall of fame bg.jpg';
import { PlayerCard } from './PlayerCard';
import dhoniImg from '../assets/player images/dhoni.png';

const players = [
    { name: "MS Dhoni", role: "Wicketkeeper", number: "7", image: dhoniImg },
    { name: "Ruturaj", role: "Batsman", number: "31", image: dhoniImg },
    { name: "Ravindra", role: "All-rounder", number: "8", image: dhoniImg },
    { name: "Shivam", role: "All-rounder", number: "25", image: dhoniImg },
    { name: "Ajinkya", role: "Batsman", number: "21", image: dhoniImg },
    { name: "Moeen", role: "All-rounder", number: "18", image: dhoniImg },
    { name: "Deepak", role: "Bowler", number: "9", image: dhoniImg },
    { name: "Maheesh", role: "Bowler", number: "61", image: dhoniImg },
    { name: "Matheesha", role: "Bowler", number: "99", image: dhoniImg },
    { name: "Tushar", role: "Bowler", number: "24", image: dhoniImg },
];

export const HallOfFame = () => {
    return <>
        <div
            className="h-screen w-screen flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${hallOfFameBg})` }}
        >
            <div className="mt-10 mb-5 flex-shrink-0 w-full flex flex-col items-center justify-center text-2xl font-bold">
                <div className="font-jersey text-sm tracking-[8px] text-[#FAFF00]">Chennai Super Kings</div>
                <div className="font-jersey text-6xl text-white"><span>HALL OF </span><span className="text-[#FAFF00]">FAME</span></div>
                <div className="font-julee text-sm text-white tracking-[5px]">the legends who roar</div>
            </div>

            <div className="flex-1 w-full overflow-y-auto px-2 pb-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-0 gap-x-2 justify-items-center">
                    {players.map((player, i) => (
                        <PlayerCard
                            key={i}
                            name={player.name}
                            role={player.role}
                            number={player.number}
                            image={player.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
}