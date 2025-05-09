// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BiBuilding } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] pt-12">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      {/* Section heading */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center relative">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"></span>
          <div className="bg-gradient-to-r from-[#1a1443]/90 to-[#1a1443] w-fit text-white px-8 py-3 text-2xl font-medium rounded-md relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Professional Experience</span>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
          </div>
          <span className="w-24 h-[2px] bg-gradient-to-r from-[#1a1443] to-transparent"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Animation side */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-indigo-600/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <AnimationLottie animationPath={experience} />
              </div>
              
              <div className="absolute -bottom-10 right-0 lg:-right-10 bg-gradient-to-br from-[#1a1443]/90 to-[#161232] p-4 rounded-lg shadow-lg border border-indigo-900/30 backdrop-blur-sm">
                <div className="text-sm font-medium text-white flex items-center gap-2">
                  <SlBadge className="text-[#16f2b3]" />
                  <span>Career Growth</span>
                </div>
              </div>
              
              <div className="absolute -top-5 -left-5 lg:-left-10 bg-gradient-to-br from-[#1a1443]/90 to-[#161232] p-4 rounded-lg shadow-lg border border-indigo-900/30 backdrop-blur-sm">
                <div className="text-sm font-medium text-white flex items-center gap-2">
                  <BiBuilding className="text-[#16f2b3]" />
                  <span>Professional Skill Development</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience timeline side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-600/40 via-indigo-600/40 to-transparent"></div>
              
              <div className="space-y-10">
                {experiences.map((experience, index) => (
                  <div key={experience.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-[24px] h-[16px] w-[16px] rounded-full border-2 border-violet-500 bg-[#161331] z-10"></div>
                    
                    {/* Experience card */}
                    <div className="ml-16 bg-gradient-to-br from-[#1d1d42]/80 to-[#161331] border border-[#25213b]/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-500/30 group">
                      {/* Top decoration bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500"></div>
                      
                      <div className="p-6 backdrop-blur-sm relative">
                        {/* Glass overlay */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Duration badge */}
                        <div className="inline-block bg-[#1a1443]/60 rounded-full px-3 py-1 text-sm font-medium text-[#16f2b3] mb-4 border border-indigo-900/20">
                          {experience.duration}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white mb-2 tracking-wide group-hover:text-[#16f2b3] transition-colors">
                          {experience.title}
                        </h3>
                        
                        {/* Company */}
                        <div className="flex items-center gap-2 mb-4">
                          <BiBuilding className="text-violet-400" />
                          <span className="text-gray-300 font-medium">
                            {experience.company}
                          </span>
                        </div>
                        
                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <HiOutlineLocationMarker className="text-violet-400" />
                          <span>Remote{index === 0 ? ' (Full-time)' : ' (Part-time)'}</span>
                        </div>
                        
                        {/* Experience details (wrapped in a div that shows on hover) */}
                        <div className="mt-4 text-sm text-gray-400 opacity-0 max-h-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                          <p>{index === 0 ? 
                            'Worked on multiple Flutter projects, developing responsive UIs and implementing RESTful API integrations. Collaborated in an Agile environment with daily stand-ups and sprint planning.' : 
                            'Completed an intensive training program in Android development using Java and Kotlin. Created multiple small applications focusing on UI design and basic functionality.'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;