import React from 'react'
import { RiGitRepositoryFill } from "react-icons/ri";
import Footer from '../../components/Footer/Footer';

const projects = [
  {
    title: "Automated Multitrack Data using Python GUI in an Flipkart ERP site",
    location: "Patna, Bihar",
    company: "Flipkart",
    description: [
      "Created a Python GUI application for an ERP system.",
      "Automated the tracking and downloading of shipment TIDs, bypassing the site's 3000-chunk limit.",
      "Improved supply chain efficiency and reduced man-hours through seamless tracking and enhanced data access.",
      "Facilitated comprehensive data analysis to enhance operational workflows.",
    ],
    tech: ["Pandas", "NumPy", "Tkinter"],
  },
  {
    title: "Automated Data Pipelines for Real-Time Reporting",
    location: "Patna, Bihar",
    company: "Flipkart",
    description: [
      "Built automated data pipelines integrated with Google Sheets using Google Apps Script.",
      "Processed large datasets to generate real-time and accurate reports for ground operations teams.",
      "Reduced operational breaches and escalations by enabling proactive monitoring.",
      "Improved data visibility, leading to faster and more informed decision-making across teams.",
    ],
    tech: ["Google Apps Script", "Google APIs"],
  },
  {
    title: "Smart Health Care Monitoring System Based on IoT",
    location: "Sambalpur, Odisha",
    company: "SUIIT",
    description: [
      "Built an IoT-based health monitoring system to track vital parameters like temperature, oxygen level, and ECG.",
      "Integrated sensors (LM35, MAX30100, ECG) and used NodeMCU to transmit real-time data to ThinkSpeak.",
      "Enabled continuous, cloud-based monitoring, improving remote healthcare tracking.",
      "Technologies Used: Arduino Mega, NodeMCU, ThinkSpeak, LM35, MAX30100, ECG Sensor.",
      "GitHub Link: https://github.com/subumohanty/HealthMonitoringSystem",
    ],
    tech: ["Arduino Mega", "Node MCU", "ThinkSpeak", "LM35", "MAX30100", "ECG"],
  },
];

const Projects = () => {
  return (
    <>
      <div className='px-10 my-10 flex flex-col' id="projects">
        <div className='border-b-[0.5px] border-[var(--color-light-gray)] pb-6 relative'>
          <h1 className={`title`} style={{ color: `var(--color-green)` }}>Projects</h1>
          <p className=' text-[var(--color-dark-gray)]'>I’ve built impactful projects across automation, data pipelines, and IoT, showcasing my ability to deliver real-world tech solutions</p>
          <div className='size-24 bg-[var(--color-creame)] absolute right-[100px] -bottom-[50px] rounded-full flex justify-center items-center' style={{ color: `var(--color-green)` }}>
            <RiGitRepositoryFill className='size-12' />
          </div>
        </div>

        <div className="relative pt-10 mb-10">
          {/* Vertical Line */}
          <div className="absolute left-5 top-11 h-full border-l border-gray-700"></div>

          {/* Project Items */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="relative pl-12">

                {/* Circle Marker */}
                <div
                  className={`absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-gray-800 bg-[var(--color-green)] shadow-[0_0_10px_rgba(34,197,94,0.7)]`}
                ></div>

                {/* Project Details */}
                <h3 className='text-[40px]/[48px]'>
                  {project.title}
                </h3>
                <p className="text-[30px]/[38px]">{project.location}</p>
                <p className="text-gray-400 mb-3 text-[30px]/[38px]">{project.company}</p>

                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pl-6">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Projects