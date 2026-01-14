import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    // Validation
    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please fill in all the fields.",
      });
      setIsSubmitting(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    Swal.fire({
      title: "Opening WhatsApp...",
      html: "Preparing your message",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    // WhatsApp message
    const whatsappText = encodeURIComponent(
`Hello Anirudh,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from your portfolio website.`
    );

    const phone = "919963532405"; // your number (without +)

    // Analytics (optional)
    if (window.gtag) {
      window.gtag("event", "contact_whatsapp_send", {
        event_category: "contact",
        event_label: "WhatsApp Message Sent",
        value: 1,
      });
    }

    // Redirect to WhatsApp
    window.open(`https://wa.me/${phone}?text=${whatsappText}`, "_blank");

    Swal.close();
    setIsSubmitting(false);

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="Contact" className="px-[5%] lg:px-[10%]">
      {/* Heading */}
      <div className="text-center lg:mt-[5%] mt-10 mb-2 px-[5%]">
        <h2
          data-aos="fade-down"
          className="inline-block text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Contact Me
        </h2>

        <p
          data-aos="fade-up"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Have a question? Send me a message — I’ll reply immediately on WhatsApp.
        </p>
      </div>

      {/* Center Wrapper */}
      <div className="py-10 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  Contact
                </h2>
                <p className="text-gray-400">
                  Feel free to reach out to me anytime.
                </p>
              </div>

              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 border border-white/20 rounded-xl text-white"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 border border-white/20 rounded-xl text-white"
                />
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full h-32 p-4 pl-12 bg-white/10 border border-white/20 rounded-xl text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Preparing WhatsApp..." : "Send Message"}
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
