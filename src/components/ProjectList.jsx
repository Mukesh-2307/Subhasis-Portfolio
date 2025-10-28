import React from 'react'

const projList = [
    {
        name: "Automated Multitrack data using Python GUI in an Flipkart ERP site",
        type: "Development",
        year: '2024',
        tech: ["Pandas", "NumPy", "Tkinter"]
    },
    {
        name: "Automated Data Pipelines for Real-Time Reporting",
        type: "Development",
        year: '2024',
        tech: ["Google Apps Script", "Google APIs"]
    },
    {
        name: "Smart Health Care Monitoring System Based on IoT",
        type: "Development",
        year: '2024',
        tech: ["Arduino Mega", "LM35", "MAX30100", "ThinkSpeak", "ECG", "Node MCU",]
    },
]

const ProjectList = () => {
    return (
        <>
            {projList?.map((proj, index) => {
                return (
                    <div className='flex flex-col text-[50px]/[56px] my-16 pb-10 border-b-[0.5px] border-[var(--color-light-gray)] gap-10' key={index}>
                        <div className='flex justify-between items-center'>
                            <p className='max-w-[1000px]'>{proj.name}</p>
                            <p>{proj.type}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>{proj.year}</p>
                            <div className='flex gap-4 w-[700px] justify-end flex-wrap'>
                                {
                                    proj.tech?.map((tech, index) => {
                                        return (
                                            <p key={index}>{tech},</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectList