'use client';

import { useState } from 'react';
import { Sparkles, Calendar, Mail, MapPin, User } from 'lucide-react';
import Image from "next/image";
import Bg from "../../../public/assets/Hero/bg.svg";
interface FormData {
  idea: string;
  email: string;
  name: string;
  company: string;
  needIn30Days: boolean;
}

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    idea: '',
    email: '',
    name: '',
    company: '',
    needIn30Days: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);

    // Reset form or show success message
    alert('Thank you! We\'ll be in touch soon.');
  };

  const handleDoMagic = () => {
    // Handle "Do the magic" button click
    console.log('Do the magic clicked!');
  };

  return (
  <section
  className="relative min-h-screen overflow-hidden"
 
>
   <Image
        src={Bg}
        alt="Background"
        fill
        priority
        className="object-cover"
      />


      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
         <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sora leading-tight"
   style={{
     background: 'linear-gradient(180deg, #FFF 30%, #A5C7D4 100%)',
     backgroundClip: 'text',
     WebkitBackgroundClip: 'text',
     WebkitTextFillColor: 'transparent'
   }}>
 From Idea to Impact
 <br />
 in 30 Days
</h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-satoshi">
            Tell Us Your Idea In Your Own Words. We'll Design, Build, And Launch Your
            MVP—Fixed Price. AI-First. Hand-In-Hand.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 mb-8">
            {/* Idea Input */}
            <div className="relative">
              <div className="absolute left-4 top-4 text-gray-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <textarea
                name="idea"
                value={formData.idea}
                onChange={handleInputChange}
                placeholder="I want an AI app that books salon appointments via voice..."
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 transition-all duration-300"
                required
              />
              <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                {formData.idea.length}/500
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Name */}
              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Company and Toggle */}
            <div className="grid md:grid-cols-2 gap-4 items-end">
              {/* Company */}
              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Need in 30 Days Toggle */}
              <div className="flex items-center justify-between bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-6 py-4">
                <span className="text-white font-medium">Need in 30 Days?</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="needIn30Days"
                    checked={formData.needIn30Days}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              {/* Do the magic button */}
              <button
                type="button"
                onClick={handleDoMagic}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-1 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Do the magic
              </button>

              {/* Book consultation button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                {isSubmitting ? 'Booking...' : 'Book a 15-min consult'}
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center ml-2">
                  <span className="text-sm">→</span>
                </div>
              </button>
            </div>
          </form>

          {/* Bottom Text */}
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Architected in the U.S. Engineered By A Handpicked Global Team.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;