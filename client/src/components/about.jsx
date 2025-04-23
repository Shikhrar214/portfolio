import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center'>
            <section id="about" className="max-w-5xl mx-auto px-6 py-20 ">
      <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>

      <p className="text-lg text-gray-200 mb-6 leading-relaxed">
        I'm <span className="font-semibold text-blue-600">Shikhar</span>, a passionate full-stack web developer with a strong focus on the
        <span className="font-semibold"> MERN stack</span> (MongoDB, Express.js, React, Node.js). I love turning ideas into real-world applications
        that are clean, scalable, and user-friendly. Currently pursuing <span className="font-medium">MCA from Maharishi University</span>, I spend my time building projects,
        solving DSA problems in C++, and mastering backend technologies.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">🎓 Education</h3>
          <ul className="list-disc list-inside text-gray-200">
            <li>MCA @ Maharishi University</li>
            <li>BCA @ Dr. Ram Manohar Lohia Avadh University (70%)</li>
            <li>Intermediate @ H L V I C, Haluwa Basti (80.4%)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">🛠️ Tech Stack</h3>
          <p className="text-gray-200">
            React, Node.js, Express, MongoDB, Tailwind CSS, JavaScript, Python, C++
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">🚀 Currently Working On</h3>
          <p className="text-gray-200">
            A full-stack project using <span className="font-medium">Vite + React + Express + MongoDB</span> hosted on Vercel.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">🧩 Other Interests</h3>
          <p className="text-gray-200">UI/UX, open-source, blogging, personal development</p>
        </div>
      </div>

      <p className="text-gray-200 mb-8">
        When I'm not coding, you’ll find me <span className="italic">working out</span>, <span className="italic">meditating</span>, or <span className="italic">reading technical docs</span>.
        I believe in <span className="font-semibold">consistent growth</span> and love connecting with like-minded developers.
      </p>

      <Link to="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-200">
        Let’s connect →
      </Link>
    </section>
        </div>
    )
}

export default About
