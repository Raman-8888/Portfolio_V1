"use client";

import { useState, useRef } from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.sendForm(
        serviceId, 
        templateId, 
        formRef.current!,
        {
          publicKey: publicKey,
        }
      );
      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS Error details:", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-5 md:px-20 z-[20] relative max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center mb-10 w-full text-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4 uppercase">
          Let&apos;s Connect
        </h1>
        <p className="text-gray-300 max-w-2xl mt-4 text-lg">
          Open for opportunities, collaborations, and conversations about software development and design.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-10 mt-10">
        {/* Left Side: Info */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 rounded-xl p-8 bg-[#030014]/50 backdrop-blur-md border border-[#2A0E61] shadow-[0_0_20px_#2a0e6150]">
          <h2 className="text-2xl font-semibold text-white mb-4">Find Me Online</h2>
          
          <a href="mailto:ramannegi1487@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-[#0F0826] border border-[#2A0E61] hover:border-purple-500 transition-colors cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500/10 text-red-500 text-xl font-bold">
              @
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">Email</span>
              <span className="text-gray-400 text-sm">ramannegi1487@gmail.com</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/raman888/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-[#0F0826] border border-[#2A0E61] hover:border-purple-500 transition-colors cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 text-2xl">
              <RxLinkedinLogo />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">LinkedIn</span>
              <span className="text-gray-400 text-sm">linkedin.com/in/raman888/</span>
            </div>
          </a>

          <a href="https://github.com/Raman-8888" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-[#0F0826] border border-[#2A0E61] hover:border-purple-500 transition-colors cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/10 text-gray-300 text-2xl">
              <RxGithubLogo />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">GitHub</span>
              <span className="text-gray-400 text-sm">github.com/Raman-8888</span>
            </div>
          </a>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 rounded-xl p-8 bg-[#030014]/50 backdrop-blur-md border border-[#2A0E61] shadow-[0_0_20px_#2a0e6150]">
          <h2 className="text-2xl font-semibold text-white mb-4">Send a Message</h2>
          
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="from_name" className="text-gray-300 text-sm">Name</label>
              <input 
                type="text" 
                id="from_name" 
                name="from_name"
                required
                placeholder="Your name" 
                className="p-4 rounded-lg bg-[#0F0826] text-white border border-[#2A0E61] focus:outline-none focus:border-purple-500 transition-colors w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="from_email" className="text-gray-300 text-sm">Email</label>
              <input 
                type="email" 
                id="from_email" 
                name="from_email"
                required
                placeholder="your@email.com" 
                className="p-4 rounded-lg bg-[#0F0826] text-white border border-[#2A0E61] focus:outline-none focus:border-purple-500 transition-colors w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-300 text-sm">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                placeholder="Tell me what's on your mind..." 
                rows={4}
                className="p-4 rounded-lg bg-[#0F0826] text-white border border-[#2A0E61] focus:outline-none focus:border-purple-500 transition-colors w-full resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className={`mt-2 py-4 px-6 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-colors shadow-[0_0_15px_#dc262680] flex items-center justify-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
