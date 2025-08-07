import React, { useState } from 'react';
import api from "../api/axios";
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 setIsSubmitting(true); // Start loading
  
  try {
    await axios.post(`${api}/send-email`, formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (err: any) {
    console.error('Axios Error:', err.message);
    alert('Failed to send email');
  }finally {
    setIsSubmitting(false); // Stop loading 
  }

    console.log('Form data:', formData);
    
  
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-purple-200 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack developer for your team or have a project in mind, 
                let's discuss how we can bring your ideas to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-3 rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-purple-200">pdeveloper133@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-3 rounded-xl">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-purple-200">+92 3240133166</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-purple-200">Karachi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            {/* <p className="text-purple-200 mb-6">
              <strong>Note:</strong> This form will be connected with Node.js + Nodemailer backend for email functionality.
            </p> */}

           {isSubmitting ? (
  // 🔄 Spinner UI
  <div className="text-center py-12">
    <svg className="animate-spin h-12 w-12 text-purple-400 mx-auto mb-4" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
    <p className="text-purple-200 text-lg">Sending your message...</p>
  </div>
) : isSubmitted ? (
  // ✅ Success UI
  <div className="text-center py-8">
    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
    <p className="text-purple-200">Thank you for your message. I'll get back to you soon.</p>
  </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:bg-white/10 focus:border-purple-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:bg-white/10 focus:border-purple-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:bg-white/10 focus:border-purple-400 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:bg-white/10 focus:border-purple-400 focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;