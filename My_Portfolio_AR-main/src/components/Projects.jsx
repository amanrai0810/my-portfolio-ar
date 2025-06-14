
import React from "react";
import hotelMoon from '../assets/hotel_moon.png'
import tic_tac_toe_img from '../assets/tic_tac_toe_img.png'
import stockImage from '../assets/Stock.png'; 
import interviewPrepImage from '../assets/Interview.png';
import Footer from './Footer'

const ProjectCard = ({image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border rounded-lg shadow sm:max-w-sm md:max-w-sm border-neutral-100 dark:bg-gray-800 dark:border-gray-700">
            {title=='Stock Management System using Tkinter and MySQL' && <a href="#">
                <img className="object-cover w-full h-auto rounded-t-lg " src={image} alt="" />
            </a>}
            {title=='INTERVIEW-PREP' && <a href="#">
                <img className="object-cover w-full h-auto rounded-t-lg " src={image} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-transparent text-white sm:text-xl md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="text-sm font-normal text-gray-300 sm:text-base md:text-lg dark:text-gray-400">{description}</p>
            </div>
            <div className='flex justify-between m-2 sm:m-4 lg:m-6'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="p-1 text-red-300 duration-300 border border-gray-200 rounded-lg shadow sm:p-2 lg:p-3 hover:text-green-500">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap items-center justify-center p-12 m-12 gap-7">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Stock Management System using Tkinter and MySQL',
        description: 'The Stock Management System is a Python-based application designed to manage and track inventory efficiently. It uses Tkinter for the Graphical User Interface (GUI) and MySQL as the backend database for storing and managing stock records.',
        image: stockImage,
        git:'https://github.com/amanrai0810/Stock-management-system',
        technologies:['PYTHON' , 'SQL']
    },
    {
        title:'INTERVIEW-PREP',
        description:'INTERVIEW-PREP is a dynamic web-based platform designed to help students and job seekers prepare effectively for technical and HR interviews. The platform offers curated resources, including frequently asked coding problems, aptitude questions, behavioral interview tips, and commonly asked HR questions.',
        image: interviewPrepImage,
        git:'https://github.com/amanrai0810/Interview-Prep',
        technologies:[ 'HTML', 'CSS', 'JavaScript', 'React']
    }
]

export default Projects