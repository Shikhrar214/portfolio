/** @format */

import React from "react";
import { useState } from "react";
import { Mail, Lock, ShieldUser } from 'lucide-react';
import { ToastContainer, toast} from "react-toastify"



function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add your backend logic here
        notify()
      };    


        const notify = () => toast("Wow so easy !");

  return (
    <div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="bg-gray-400 p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <ShieldUser className="text-blue-500" />
            <h2 className="text-2xl font-bold">Login</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Lock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        
    </div>
  );
}

export default Login;
