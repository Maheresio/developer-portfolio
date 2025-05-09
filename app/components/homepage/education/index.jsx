// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Top border with gradient effect */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center relative">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"></span>
          <div className="bg-gradient-to-r from-[#1a1443]/90 to-[#1a1443] w-fit text-white px-8 py-3 text-2xl font-medium rounded-md relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Education</span>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
          </div>
          <span className="w-24 h-[2px] bg-gradient-to-r from-[#1a1443] to-transparent"></span>
        </div>
      </div>

      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Animation side */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm relative">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
              <div className="absolute top-20 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border border-violet-500/20 rounded-full"></div>
              <div className="absolute bottom-10 left-5 w-12 h-12 border border-pink-500/20 rounded-full"></div>
              
              {/* Main animation */}
              <div className="w-full h-full mx-auto relative z-10 pt-5">
                <div className="bg-gradient-to-b from-[#1a1443]/20 to-transparent p-8 rounded-full backdrop-blur-sm border border-indigo-900/10">
                  <AnimationLottie animationPath={lottieFile} />
                </div>
              </div>
            </div>
          </div>

          {/* Education details side */}
          <div>
            <div className="flex flex-col gap-10 relative">
              {/* Decorative Timeline Line */}
              <div className="absolute left-[29px] md:left-8 top-[60px] bottom-12 w-[2px] bg-gradient-to-b from-violet-600 to-transparent"></div>
              
              {
                educations.map(education => (
                  <div 
                    key={education.id} 
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[24px] md:left-[26px] top-[60px] w-[12px] h-[12px] rounded-full bg-violet-500 border-2 border-indigo-800 z-10"></div>
                  
                    <div 
                      className="ml-16 md:ml-20 bg-gradient-to-br from-[#1d1d42]/90 to-[#12102a] border border-[#25213b]/50 rounded-xl overflow-hidden shadow-lg hover:shadow-violet-500/10 transition-all duration-500 transform hover:-translate-y-1"
                    >
                      {/* Top decoration bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500"></div>
                      
                      <div className="p-6 relative backdrop-blur-sm">
                        {/* Glass effect overlays */}
                        <div className="absolute top-5 left-5 w-20 h-20 bg-violet-600/5 rounded-full blur-xl"></div>
                        <div className="absolute bottom-5 right-5 w-32 h-32 bg-pink-600/5 rounded-full blur-xl"></div>
                        
                        {/* Duration badge */}
                        <div className="flex justify-end mb-6">
                          <div className="bg-[#1a1443]/80 border border-violet-500/20 px-4 py-1.5 rounded-lg shadow-inner">
                            <span className="text-[#16f2b3] text-sm font-medium tracking-wide">
                              {education.duration}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Icon */}
                          <div className="flex justify-center md:block">
                            <div className="bg-gradient-to-br from-[#251e69] to-[#1a1443] p-4 rounded-xl shadow-lg border border-indigo-800/30 text-violet-300 transition-all duration-300 hover:scale-110 hover:shadow-violet-500/20 group">
                              <BsPersonWorkspace size={36} className="group-hover:text-[#16f2b3]" />
                            </div>
                          </div>
                          
                          {/* Details */}
                          <div className="flex-1 space-y-4">
                            {/* Title and Institution */}
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">
                                {education.title}
                              </h3>
                              <h4 className="text-lg text-violet-300 font-medium">
                                {education.institution}
                              </h4>
                            </div>
                            
                            {/* Education Details Card */}
                            <div className="bg-[#161331]/70 backdrop-blur-sm border border-indigo-900/30 rounded-lg p-4 shadow-inner">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                {education.faculty && (
                                  <div className="space-y-1">
                                    <h5 className="text-xs uppercase tracking-wider text-gray-400 font-medium">Faculty</h5>
                                    <p className="text-gray-200">{education.faculty}</p>
                                  </div>
                                )}
                                
                                {education.major && (
                                  <div className="space-y-1">
                                    <h5 className="text-xs uppercase tracking-wider text-gray-400 font-medium">Major</h5>
                                    <p className="text-gray-200">{education.major}</p>
                                  </div>
                                )}
                                
                                {education.grade && (
                                  <div className="space-y-1">
                                    <h5 className="text-xs uppercase tracking-wider text-gray-400 font-medium">Grade</h5>
                                    <p className="text-[#16f2b3] font-medium">{education.grade}</p>
                                  </div>
                                )}
                                
                                {education.gpa && (
                                  <div className="space-y-1">
                                    <h5 className="text-xs uppercase tracking-wider text-gray-400 font-medium">GPA</h5>
                                    <p className="text-[#16f2b3] font-medium">{education.gpa}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;