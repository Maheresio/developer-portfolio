"use client";

import { projectsData } from '@/utils/data/projects-data';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaPlay, FaTimes } from 'react-icons/fa';

// Number of project icons available
const PROJECT_ICONS_COUNT = 9;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid of projects */}
      <div className="pt-24 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => {

            return (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] rounded-lg shadow-xl border border-[#1a1443] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openProjectDetails(project)}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0f0b24] opacity-60"></div>

                {/* Background project icon */}
                <div className="absolute top-0 right-0 opacity-10 w-32 h-32 transform translate-x-8 -translate-y-4">
                  <Image
                    src={`/svg/projects/${(index % PROJECT_ICONS_COUNT) + 1}.svg`}
                    alt=""
                    width={128}
                    height={128}
                  />
                </div>

                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={`/svg/projects/${(index % PROJECT_ICONS_COUNT) + 1}.svg`}
                      alt={project.name}
                      width={200}
                      height={200}
                      className="object-contain opacity-70"
                    />
                  </div>
                </div>

                {/* Project info */}
                <div className="p-4 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#16f2b3] transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Tags section */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.slice(0, 2).map((tool, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-[#271e4f] text-gray-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 2 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#271e4f] text-gray-300">
                        +{project.tools.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View project button */}
                  <div className="mt-4 text-center">
                    <button className="text-sm font-medium px-3 py-1 bg-[#1a1443]/70 text-white rounded hover:bg-[#16f2b3]/20 hover:text-[#16f2b3] transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] p-4 bg-black/70">
          <div
            className="relative bg-[#0f0c21] border border-[#1a1443] rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeProjectDetails}
              className="absolute right-4 top-4 text-white/70 hover:text-white z-10"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Project icon */}
                <div className="w-full md:w-1/3 aspect-square bg-[#1a1443]/30 rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src={`/svg/projects/${(selectedProject.id % PROJECT_ICONS_COUNT) + 1}.svg`}
                    alt={selectedProject.name}
                    width={250}
                    height={250}
                    className="object-contain opacity-90"
                  />
                </div>

                {/* Project info */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.name}
                  </h2>

                  <p className="text-gray-300 mt-4">
                    {selectedProject.description}
                  </p>

                  {/* Tools used */}
                  <div className="mt-6">
                    <h3 className="text-lg text-white/90 mb-2">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-[#271e4f] text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mt-4">
                    <h3 className="text-lg text-white/90 mb-2">Role</h3>
                    <p className="text-[#16f2b3]">{selectedProject.role}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-6">
                    {selectedProject.code && (
                      <Link
                        href={selectedProject.code}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-[#1a1443] text-white rounded hover:bg-[#16f2b3]/20 hover:text-[#16f2b3] transition duration-300"
                      >
                        <FaGithub /> View Code
                      </Link>
                    )}

                    {selectedProject.demo && (
                      <Link
                        href={selectedProject.demo}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-[#1a1443] text-white rounded hover:bg-[#16f2b3]/20 hover:text-[#16f2b3] transition duration-300"
                      >
                        <FaPlay /> Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;