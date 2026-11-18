
import { useState } from "react";
import {
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const clientEmail = "emmanuelkalagbada0@gmail.com";

  const handleChange = (e) => {
    setSubmitted(false);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open the visitor's email app with pre-filled details
    const mailSubject = encodeURIComponent(formData.subject);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${clientEmail}?subject=${mailSubject}&body=${mailBody}`;

    setSubmitted(true);
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
          Have a question or want to know more about us?
          We'd love to hear from you.
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-[#78866B] uppercase tracking-widest text-sm mb-3">
            Contact Information
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#3B261B]">
            We'd Love To Hear From You
          </h2>
        </div>

        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition duration-300">

          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#EAE1D2] text-[#78866B] flex items-center justify-center text-2xl">
            <FaEnvelope />
          </div>

          <h3 className="text-xl font-bold text-[#3B261B] mb-3">
            Email Us
          </h3>

          <a
            href={`mailto:${clientEmail}`}
            className="text-gray-600 hover:text-[#78866B] transition break-all"
          >
            {clientEmail}
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Feel free to reach out to us anytime.
          </p>

          <a
            href={`mailto:${clientEmail}`}
            className="inline-flex items-center gap-2 mt-6 bg-[#78866B] hover:bg-[#657456] text-white px-6 py-3 rounded-full transition"
          >
            Send an Email
            <FaArrowRight />
          </a>

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
              Have a question, suggestion, or feedback?
              Fill out the form and send us your message
              directly through your email application.
            </p>

            <div className="bg-[#3B261B] text-white p-8 rounded-2xl">
              <div className="text-[#C5A47E] text-3xl mb-4">
                <FaPaperPlane />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                We'd Love To Connect
              </h3>

              <p className="text-[#EAE1D2] leading-7">
                Your thoughts and feedback are always welcome.
                Get in touch with us through email.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-7 md:p-10 rounded-2xl shadow-sm">

            {submitted && (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-3">
                <FaCheckCircle />
                <p className="text-sm">
                  Your email application should open with your message.
                  Please send it from there.
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

    </div>
  );
}

export default Contact;
