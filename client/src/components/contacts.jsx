import React from "react";
import { useState } from "react";
function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 👉 Replace with EmailJS, Formspree or your backend POST call
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

    // show toast or success msg (you can add a library like react-toastify)
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
        <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-200 mb-10">
            I'd love to hear from you! Whether it's a collaboration, a project,
            or just to say hi — feel free to drop a message.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                Contact Info
              </h3>
              <p className="mb-2">
                📧 Email:{" "}
                <a
                  href="mailto:shikharsrivastav9450@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  shikharsrivastav9450@gmail.com
                </a>
              </p>
              <p className="mb-2">
                💼 LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/shikhar-srivastav-48620a231/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://www.linkedin.com/in/shikhar-srivastav-48620a231/
                </a>
              </p>
              <p className="mb-2">
                🐱 GitHub:{" "}
                <a
                  href="https://github.com/Shikhrar214"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/Shikhrar214  
                </a>
              </p>
            </div>

            {/* Right - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-green-600 mt-4">
                  Thanks! I'll get back to you soon 👋
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contacts;
