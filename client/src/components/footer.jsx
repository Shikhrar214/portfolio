import { motion } from 'framer-motion';
import React from 'react'

function Footer() {
    return (
        <motion.footer
          className="bg-gray-900 text-white py-6 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm mb-2">Made with 💻 by Shikhar</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Shikhrar214" target="_blank" className="hover:text-cyan-400">GitHub</a>
              <a href="https://www.linkedin.com/in/shikhar-srivastav-48620a231/" target="_blank" className="hover:text-cyan-400">LinkedIn</a>
              <a href="mailto:shikharsrivastav9450@gmail.com" className="hover:text-cyan-400">Email</a>
            </div>
           
            <p className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} Shikhar. All rights reserved.</p>
          </div>
        </motion.footer>
      );
}

export default Footer
