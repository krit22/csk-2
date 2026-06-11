"use client";

import { cn } from "../lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

// --- 3D Card Components Logic ---

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-10 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-auto w-auto [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// --- PlayerCard Component ---

interface PlayerCardProps {
  name?: string;
  role?: string;
  image?: string;
  number?: string | number;
  stats?: { label: string; value: string }[];
}

export const PlayerCard = ({
  name = "MS Dhoni",
  role = "Wicketkeeper",
  image = "/src/assets/cropped-lion.png",
  number = "7",
  stats = [
    { label: "Matches", value: "250" },
    { label: "Runs", value: "5000+" },
  ]
}: PlayerCardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-[#FAFF00]/[0.1] border-[#FAFF00]/[0.2] w-auto sm:w-[12.5rem] h-auto rounded-xl p-3 border">
        <CardItem translateZ="100" className="w-full">
          <img
            src={image}
            height="500"
            width="500"
            className="h-32 w-full object-cover rounded-lg group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
        <div className="flex justify-between items-center mt-4 gap-2">
          <div className="flex flex-col">
            <CardItem
              translateZ="80"
              className="text-2xl font-bold text-[#FAFF00] font-jersey"
            >
              {name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="95"
              className="text-[#FAFF00] text-[10px] max-w-sm"
            >
              {role}
            </CardItem>
          </div>
          <CardItem
            translateZ={60}
            as="button"
            className="h-8 px-2 flex items-center justify-center rounded-md bg-[#FAFF00] text-black text-base font-jersey shrink-0"
          >
            No. {number}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};