/** @format */

import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 text-center">

          {/* <div>
            <div><img src={Logo} alt="image" /></div>
            <div><img src={Logo0} alt="image" /></div>
            <div><img src={Logo1} alt="image" /></div>
          </div> */}
          <h1 className="text-5xl font-bold mb-4">
            Hey, I'm <span className="text-blue-500">Shikhar</span> 👋
          </h1>

          <p className="text-xl text-gray-200 mb-6">
            A Full-Stack Web Developer crafting clean and functional web
            experiences. I build fast, responsive, and scalable web apps using
            the MERN stack.
          </p>
          <div className="flex gap-4 mb-6">
            <Link
              to="/projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
