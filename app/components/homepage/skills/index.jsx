"use client";
// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const skillCategories = {
  "Languages": ["Dart", "Java", "C++"],
  "Frameworks": ["Flutter"],
  "State Management": ["BLoC", "Provider", "Riverpod"],
  "Architecture": ["MVVM Architecture", "MVC Architecture", "Clean Architecture", "OOP", "SOLID Principles", "Design Patterns", "Clean Code", "Material Design"],
  "Backend & Data": ["SQL", "Firebase", "RESTful APIs", "Local Storage", "Data Structures"],
  "Tools": ["Git", "GitHub", "Testing", "Postman", "Figma"]
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter skills based on selected category
  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter(skill => skillCategories[activeCategory]?.includes(skill));

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] pt-12">
      {/* Background decoration elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>

      {/* Section heading */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center relative">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"></span>
          <div className="bg-gradient-to-r from-[#1a1443]/90 to-[#1a1443] w-fit text-white px-8 py-3 text-2xl font-medium rounded-md relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Technical Skills</span>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
          </div>
          <span className="w-24 h-[2px] bg-gradient-to-r from-[#1a1443] to-transparent"></span>
        </div>
      </div>

      {/* Category filter tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#1a1443]/30 backdrop-blur-sm p-1.5 rounded-xl flex flex-wrap justify-center gap-2 border border-indigo-900/20 shadow-lg shadow-indigo-500/5">
          {["All", ...Object.keys(skillCategories)].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                  : "text-gray-300 hover:bg-[#1a1443]/50 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills display */}
      <div className="w-full my-12 overflow-hidden">
        {filteredSkills.length > 0 ? (
          <Marquee
            gradient={true}
            gradientColor={[13, 18, 36]}
            gradientWidth={50}
            speed={50}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {filteredSkills.map((skill, id) => (
              <div
                className="mx-4 my-4 perspective-1000"
                key={id}
              >
                <div className="w-36 min-w-fit h-[140px] flex items-center justify-center rounded-xl group cursor-pointer transition-all duration-500 transform hover:scale-110 hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Card front */}
                  <div className="w-full h-full rounded-xl absolute backface-hidden bg-gradient-to-br from-[#1d1d42]/80 to-[#161331] border border-[#25213b]/50 shadow-lg transition-all duration-500 group-hover:opacity-0">
                    {/* Top decoration bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 rounded-t-xl"></div>

                    <div className="p-5 flex flex-col items-center justify-center h-full">
                      <div className="h-12 mb-4 flex items-center justify-center">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={45}
                          height={45}
                          className="h-auto w-auto object-contain max-h-full transition-all duration-500 drop-shadow-lg"
                        />
                      </div>
                      <p className="text-white text-center font-medium text-sm truncate w-full">
                        {skill}
                      </p>
                    </div>
                  </div>

                  {/* Card back */}
                  <div className="w-full h-full rounded-xl absolute backface-hidden bg-gradient-to-br from-[#1a1443]/90 to-[#161331] border border-[#25213b] shadow-lg transform rotate-y-180 flex items-center justify-center p-4">
                    <p className="text-[#16f2b3] text-sm text-center font-medium">
                      {getSkillDescription(skill)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-400 text-lg">No skills found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to get skill descriptions
function getSkillDescription(skill) {
  const descriptions = {
    "Dart": "Primary language for Flutter development",
    "Java": "OOP language for Android development",
    "C++": "System programming language",
    "Flutter": "Google's UI toolkit for cross-platform apps",
    "OOP": "Object Oriented Programming paradigm",
    "SOLID Principles": "Design principles for maintainable code",
    "Data Structures": "Organizing and storing data efficiently",
    "Design Patterns": "Solutions to common software design problems",
    "BLoC": "Business Logic Component pattern for Flutter",
    "Provider": "State management solution for Flutter",
    "Riverpod": "Advanced state management for Flutter",
    "Clean Code": "Writing maintainable and readable code",
    "MVVM Architecture": "Model-View-ViewModel architecture pattern",
    "MVC Architecture": "Model-View-Controller architecture pattern",
    "Material Design": "Google's design system for beautiful UIs",
    "Clean Architecture": "Software architecture for separation of concerns",
    "SQL": "Structured Query Language for databases",
    "Firebase": "Google's app development platform",
    "RESTful APIs": "API design following REST principles",
    "Local Storage": "Data persistence on devices",
    "Git": "Version control system",
    "GitHub": "Web-based Git repository hosting",
    "Testing": "Ensuring software quality and reliability",
    "Postman": "API testing and development tool",
    "Figma": "UI/UX design and prototyping tool"
  };

  return descriptions[skill] || `${skill} expertise`;
}

export default Skills;