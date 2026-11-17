
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#F7F3EB] min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#3B261B] text-white py-24 px-6 text-center">
        <p className="text-[#C5A47E] uppercase tracking-[4px] text-sm mb-4">
          Get In Touch
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Let's Start A Conversation.
        </h1>

        <p className="text-[#EAE1D2] max-w-2xl mx-auto leading-7">
          Have a question or want to know more about our café?
          We'd love to hear from you.
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <p className="text-[#78866B] uppercase tracking-widest text-sm mb-3">
            Contact Information
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#3B261B]">
            We'd Love To Hear From You
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: <FaPhoneAlt />,
              title: "Phone",
              detail: "+91 98765 43210",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              detail: "hello@thecozycafe.com",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Address",
              detail: "UAE",
            },
            {
              icon: <FaClock />,
              title: "Opening Hours",
              detail: "9:00 AM - 10:00 PM",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl text-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#EAE1D2] text-[#78866B] flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#3B261B] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.detail}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div>
            <p className="text-[#78866B] uppercase tracking-widest text-sm mb-3">
              Send Us A Message
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#3B261B] mb-6">
              Let's Make Your Day A Little Better.
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Whether you have a question about our menu,
              want to share feedback, or simply want to say hello,
              feel free to send us a message.
            </p>

            <div className="bg-[#3B261B] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Visit The Cozy Café
              </h3>

              <p className="text-[#EAE1D2] leading-7">
                Good coffee, delicious food, and a cozy atmosphere
                are waiting for you.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-7 md:p-10 rounded-2xl shadow-sm">

            {submitted && (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-3">
                <FaCheckCircle />
                <p>
                  Thank you! Your message has been submitted successfully.
                  <span className="block text-xs mt-1">
                    Demo only — no message was actually sent.
                  </span>
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-[#3B261B] font-semibold mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-[#EAE1D2] rounded-lg px-4 py-3 outline-none focus:border-[#78866B]"
                />
              </div>

              <div>
                <label className="block text-[#3B261B] font-semibold mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-[#EAE1D2] rounded-lg px-4 py-3 outline-none focus:border-[#78866B]"
                />
              </div>

              <div>
                <label className="block text-[#3B261B] font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full border border-[#EAE1D2] rounded-lg px-4 py-3 outline-none focus:border-[#78866B]"
                />
              </div>

              <div>
                <label className="block text-[#3B261B] font-semibold mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full border border-[#EAE1D2] rounded-lg px-4 py-3 outline-none focus:border-[#78866B] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#78866B] hover:bg-[#657456] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-3 transition duration-300"
              >
                Send Message
                <FaArrowRight />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Social Media */}
      <section className="bg-[#EAE1D2] py-14 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3B261B] mb-4">
          Follow Us On Social Media
        </h2>

        <p className="text-gray-600 mb-7">
          Stay connected for our latest updates and special offers.
        </p>

        <div className="flex justify-center gap-5">

          <a
            href="#"
            aria-label="Instagram"
            className="w-12 h-12 bg-[#3B261B] text-white rounded-full flex items-center justify-center hover:bg-[#78866B] transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="w-12 h-12 bg-[#3B261B] text-white rounded-full flex items-center justify-center hover:bg-[#78866B] transition"
          >
            <FaFacebookF />
          </a>

        </div>
      </section>

    </div>
  );
}

export default Contact;
