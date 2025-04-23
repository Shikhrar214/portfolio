/** @format */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // or use heroicons if preferred
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["home", "about", "projects", "contact"];
  const MotionLink = motion(NavLink);

  return (
    <motion.header
      className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
         to={"/"}
        >
        <h1 className="text-xl font-bold tracking-wide">SS | Full Stack Dev</h1>
        </Link>
        {/* Desktop Nav */}
        <nav className="space-x-14 hidden md:flex">
          {links.map((item) => (
            <MotionLink
              key={item}
              whileHover={{ scale: 1.1 }}
              to={`${item.toLowerCase()}`}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "hover:text-cyan-400"
                } transition`
              }
            >
              {item}
            </MotionLink>
          ))}

          <button className="hidden md:block border px-4 py-1 rounded-full hover:bg-gray-700 transition">
            change mode
          </button>
        </nav>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `${isActive ? "text-cyan-400" : ""} hidden md:block`
          }
        >
          <button className="ml-6 border border-cyan-400 px-4 py-1 rounded-full hover:bg-cyan-600 transition">
            Signup
          </button>
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 md:hidden px-4 pt-4 pb-6"
          >
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item}>
                  <Link
                    to={`${item.toLowerCase()}`}
                    className="block text-white text-lg hover:text-cyan-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `${isActive ? "text-cyan-400" : ""} hidden md:block`
                  }
                >
                  <button className="ml-6 border border-cyan-400 px-4 py-1 rounded-full hover:bg-cyan-600 transition">
                    login
                  </button>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `${isActive ? "text-cyan-400" : ""} hidden md:block`
                  }
                >
                  <button className="ml-6 border border-cyan-400 px-4 py-1 rounded-full hover:bg-cyan-600 transition">
                    Signup
                  </button>
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
