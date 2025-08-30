'use client';

import { useState } from 'react';
import star from "../../../public/assets/3pillor//star.svg";
import Image from "next/image";
import Icon from "../../../public/assets/navbar/navbuttonicon.svg";
import Bg from "../../../public/assets/Hero/bg.svg";
import mic from "../../../public/assets/Hero/mic.svg";
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


    <section className="relative min-h-screen overflow-hidden  font-sora">




      <Image
        src={Bg}
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-[68px] font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(180deg, #FFF 30%, #A5C7D4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            From Idea to Impact
            <br />
            in 60 Days
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-lg text-gray-300 mb-4 max-w-3xl mx-auto font-normal leading-relaxed font-satoshi">
            Tell Us Your Idea In Your Own Words. We'll Design, Build, And Launch Your<br/>
            MVP—Fixed Price. AI-First. Hand-In-Hand.
          </p>

{/* Search-style Input */}
<div className="max-w-2xl mx-auto mb-4 p-3 rounded-full relative">
  {/* Always-visible Glow */}
  <div className="absolute inset-0 rounded-[25.875px] bg-[#01ACFF66] blur-2xl animate-pulse"></div>

  <div className="relative rounded-[25.875px] p-[1px] bg-gradient-to-b from-white/80 to-white/20">
    {/* Input */}
    <input
      type="text"
      name="idea"
      value={formData.idea}
      onChange={handleInputChange}
      placeholder="ask anything..."
      className="w-full 
                 rounded-[23px]
                 border-none
                 bg-black/90 
                 pl-12 pr-16 py-4 
                 text-lg 
                 focus:outline-none
                 input-gradient-placeholder
                 relative z-10"
    />

    {/* Left Star Icon */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
      <Image
        src={star}
        alt="Star icon"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </div>

    {/* Right Mic Button */}
    <button
      onClick={handleDoMagic}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 
                 text-white rounded-full p-3 transition-colors duration-300 group z-10"
    >
      <Image
        src={mic}
        alt="Microphone icon"
        width={20}
        height={20}
        className="w-4 h-4 transform scale-150 group-hover:scale-175 transition-transform duration-300"
      />
    </button>
  </div>
</div>

          {/* Book consultation button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={() => console.log('Book consult clicked')}
              className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 font-sora w-fit mx-auto"
            >
              <span className="text-[14px] font-semibold tracking-[-0.28px] bg-gradient-to-r from-white to-[#01ACFF] bg-clip-text text-transparent">
                Book a 15-min consult
              </span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center ml-1 group-hover:translate-x-0.5 transition-transform duration-300">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <Image src={Icon} alt="icon" width={12} height={12} />
                </div>
              </div>
            </button>
          </div>

          <p className="text-white text-sm md:text-lg max-w-6xl mx-auto">
            Architected in the U.S. Engineered By A Handpicked Global Team.
          </p>

        </div>
      </div>


      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
    </section>

  );
};

export default HeroSection;