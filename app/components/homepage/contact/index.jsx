// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] pt-12">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl"></div>

      {/* Section heading */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center relative">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"></span>
          <div className="bg-gradient-to-r from-[#1a1443]/90 to-[#1a1443] w-fit text-white px-8 py-3 text-2xl font-medium rounded-md relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
          </div>
          <span className="w-24 h-[2px] bg-gradient-to-r from-[#1a1443] to-transparent"></span>
        </div>
      </div>

      {/* Contact content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact form side */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#1d1d42]/80 to-[#161331] border border-[#25213b]/50 rounded-xl overflow-hidden shadow-lg p-1">
            {/* Top decoration bar */}
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500"></div>

            <div className="p-6 md:p-8 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Contact info side */}
        <div className="flex flex-col gap-10">
          {/* Contact details card */}
          <div className="bg-gradient-to-br from-[#1d1d42]/80 to-[#161331] border border-[#25213b]/50 rounded-xl overflow-hidden shadow-lg">
            {/* Top decoration bar */}
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500"></div>

            <div className="p-6 md:p-8 relative backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="bg-[#1a1443]/70 p-3 rounded-lg text-violet-400 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <MdAlternateEmail size={24} className="group-hover:text-[#16f2b3]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-white font-medium">{personalData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="bg-[#1a1443]/70 p-3 rounded-lg text-violet-400 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <IoMdCall size={24} className="group-hover:text-[#16f2b3]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white font-medium">{personalData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="bg-[#1a1443]/70 p-3 rounded-lg text-violet-400 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <CiLocationOn size={24} className="group-hover:text-[#16f2b3]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white font-medium">{personalData.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social links card */}
          <div className="bg-gradient-to-br from-[#1d1d42]/80 to-[#161331] border border-[#25213b]/50 rounded-xl overflow-hidden shadow-lg">
            {/* Top decoration bar */}
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500"></div>

            <div className="p-6 md:p-8 relative backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>

              <div className="flex flex-wrap gap-4 md:gap-6">
                <Link target="_blank" href={personalData.github} className="group">
                  <div className="bg-[#1a1443]/70 p-4 rounded-lg text-violet-300 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <IoLogoGithub size={28} className="group-hover:text-[#16f2b3]" />
                  </div>
                </Link>

                <Link target="_blank" href={personalData.linkedIn} className="group">
                  <div className="bg-[#1a1443]/70 p-4 rounded-lg text-violet-300 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <BiLogoLinkedin size={28} className="group-hover:text-[#16f2b3]" />
                  </div>
                </Link>

                <Link target="_blank" href={personalData.twitter} className="group">
                  <div className="bg-[#1a1443]/70 p-4 rounded-lg text-violet-300 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <FaXTwitter size={28} className="group-hover:text-[#16f2b3]" />
                  </div>
                </Link>

                <Link target="_blank" href={personalData.stackOverflow} className="group">
                  <div className="bg-[#1a1443]/70 p-4 rounded-lg text-violet-300 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <FaStackOverflow size={28} className="group-hover:text-[#16f2b3]" />
                  </div>
                </Link>

                <Link target="_blank" href={personalData.facebook} className="group">
                  <div className="bg-[#1a1443]/70 p-4 rounded-lg text-violet-300 shadow-md border border-indigo-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/20">
                    <FaFacebook size={28} className="group-hover:text-[#16f2b3]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;