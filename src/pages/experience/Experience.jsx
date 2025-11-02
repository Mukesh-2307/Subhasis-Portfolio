import React from 'react'
import { HiBriefcase } from "react-icons/hi2";
import Footer from '../../components/Footer/Footer';

const experiences = [
  {
    title: "Supply Chain Ops Analyst Trainee",
    location: "Patna, Bihar",
    company: "Flipkart",
    duration: "Aug 2025 - Present",
    points: [
      "Automated the tracking of Multitrack shipment data within Flipkart’s ERP system, reducing manual processing time by 90% and enabling seamless analysis of 100000+ TIDs daily.",
      "Used serviceability mapping to correct mapping and clustering for the hubs, reducing misroutes in the supply chain.",
      "Automated large-scale data pipelines involving ingestion, curation, wrangling, cleaning, and lineage, enabling real-time dashboards using App Script, Google Sheets API, Python, SQL, Selenium, and GIT.",
      "Leveraged Generative AI tools such as ChatGPT and GitHub Copilot to accelerate development, automate documentation, and enhance code efficiency in automation projects.",
    ],
  },
  {
    title: "Product Design and Management",
    location: "Patna, Bihar",
    company: "Flipkart",
    duration: "Nov 2024 - Aug 2025",
    points: [
      "Conceptualized and deployed Density-Based Cluster (DBC), In-House Time (IHT), and One-Touch Runsheet (OTRS) Models Auto-Sortation systems at last-mile hubs, leading to a reduction of 54 minutes in In-Hub Time (IHT) and a 2.88% increase in EMD performance across 300+ hubs.",
      "Designed and rolled out a Serviceability Manager tool, enhancing shipment landing precision and bringing down misroute rates from 8% to 0.4%.",
    ],
  },
  {
    title: "Networking Intern",
    location: "Cuttack, Odisha",
    company: "BSNL",
    duration: "Jul 2022 - Dec 2022",
    points: [
      "Gained hands-on experience in Advanced IP and Networking models, including in-depth training on IPv4, IPv6 addressing, and router configuration.",
      "Worked on network design using Cisco Packet Tracer.",
      "Enhanced Python programming skills through practical applications, enriching technical proficiency in scripting and network automation fundamentals.",
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className='px-10 my-10 flex flex-col' id="projects">
        <div className='border-b-[0.5px] border-[var(--color-light-gray)] pb-6 relative'>
          <h1 className={`title`} style={{ color: `var(--color-pink)` }}>Experience</h1>
          <p className=' text-[var(--color-dark-gray)]'>I have practical experience driving operational efficiency through automation, data pipelines, and product solutions in fast-paced, real-world environments</p>
          <div className='size-24 bg-[var(--color-creame)] absolute right-[100px] -bottom-[50px] rounded-full flex justify-center items-center' style={{ color: `var(--color-pink)` }}>
            <HiBriefcase className='size-12' />
          </div>
        </div>

        <div className="relative pt-10 mb-10">
          {/* Vertical Line */}
          <div className="absolute left-5 top-11 h-full border-l border-gray-700"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((experiences, index) => (
              <div key={index} className="relative pl-12">

                {/* Circle Marker */}
                <div
                  className={`absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-gray-800 bg-[var(--color-pink)] shadow-[0_0_10px_rgba(244,114,182,0.7)]`}
                ></div>

                {/* Project Details */}
                <h3 className='text-[40px]/[48px]'>
                  {experiences.title}
                </h3>
                <p className="text-[30px]/[38px]">{experiences.location}</p>
                <p className="text-gray-400 mb-3 text-[30px]/[38px]">{experiences.company}</p>

                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {experiences.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <p className="mt-3 text-[24px]/[32px]">{experiences.duration}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Experience