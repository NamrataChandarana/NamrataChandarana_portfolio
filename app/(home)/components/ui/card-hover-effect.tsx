"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon:  React.ReactElement;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-10 mx-10 ",
        className
      )}
    >
      {items.map((item, idx) => {

        const Icon = item.icon

        return (
        <div
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 w-full h-50 bg-slate-800/[0.8] block  rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div  className="w-8 h-8 mx-auto text-4xl ">{Icon}</div>
            <CardTitle className="text-center font-bold sm:text-2xl text-gray-300 text-md ">{item.title}</CardTitle>
          </Card>
        </div>
        )}
        )}
    </div>
    )
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-md p-4 w-full h-48 space-y-5  overflow-hidden bg-black relative z-20  group-hover:ring-2  ring-indigo-500 transition-all duration-500 align-middle",
      )}
    >
      <div className="relative py-10  z-50 ">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
