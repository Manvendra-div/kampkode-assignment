import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils"; // Utility for conditional classNames
import { ChevronDown } from "lucide-react";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Start with navbar visible

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "sticky top-[20px] inset-x-0 flex max-w-full min-h-[80px] md:mx-[35px] md:rounded-[20px] bg-[#D9D9D903] md:shadow-lg shadow-[#7D6EEB80] z-50 px-8 py-2 items-center justify-between space-x-4 text-black backdrop-blur-lg ",
          className
        )}
      >
        <a href="/" className="font-poppins text-[40px] flex">
          <span className="text-[#7F6EFC]">N</span>
          AV
          <span className="hidden md:block">
            <span className="text-[#7F6EFC]">B</span>AR
          </span>
        </a>
        <div className="hidden md:flex font-semibold justify-between items-center min-w-[380px] font-inter text-sm">
          <a href="#" className="hover:opacity-80">
            Home
          </a>
          <a
            href="#"
            className="flex justify-center items-center space-x-2 hover:opacity-80"
          >
            <span>Products</span>
            <ChevronDown />
          </a>
          <a
            href="#"
            className="flex justify-center items-center space-x-2 hover:opacity-80"
          >
            <span>Resources</span>
            <ChevronDown />
          </a>
          <a href="#" className="hover:opacity-80">
            Pricing
          </a>
        </div>
        <div className="hidden font-semibold font-inter md:flex items-center space-x-2">
          <button className="bg-[#F9F5FF] border-[1px] border-[#E9D7FE] rounded-lg nav-btn text-[#6941C6]">
            Log in
          </button>
          <button className="bg-[#7F56D9] border-[1px] border-[#7F56D9] rounded-lg nav-btn text-white">
            Sign up
          </button>
        </div>
        <button className="md:hidden p-[8px]">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H19M1 1H19M1 13H19"
              stroke="#344054"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
