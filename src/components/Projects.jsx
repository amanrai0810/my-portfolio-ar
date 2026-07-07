
import React from "react";
//import hotelMoon from '../assets/hotel_moon.png'
import ticTacImage from '../assets/tic_tac_toe.png'
//import stockImage from '../assets/Stock.png'; 
import interviewPrepImage from '../assets/Interview.png';
import Footer from './Footer'

const ProjectCard = ({image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border rounded-lg shadow sm:max-w-sm md:max-w-sm border-neutral-100 dark:bg-gray-800 dark:border-gray-700">
           {title==='Tic Tac Toe With Ai' && (
    <a href={git} target="_blank" rel="noopener noreferrer">
        <img className="object-cover w-full h-auto rounded-t-lg" src={image} alt="" />
    </a>
)}

{title==='Tic Tac Toe With Ai' && (
    <a href={git} target="_blank" rel="noopener noreferrer">
        <img className="object-cover w-full h-auto rounded-t-lg" src={image} alt="" />
    </a>
)}

{title==='INTERVIEW-PREP' && (
    <a href={git} target="_blank" rel="noopener noreferrer">
        <img className="object-cover w-full h-auto rounded-t-lg" src={image} alt="" />
    </a>
)}
            <div className="p-4 sm:p-6">
                <a href={git} target="_blank" rel="noopener noreferrer">
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
        title:'Tic Tac Toe With Ai',
        description: 'Developed an interactive Tic Tac Toe game with AI integration using HTML, CSS, and JavaScript, featuring an intelligent opponent powered by the Minimax algorithm for unbeatable gameplay. Designed a visually appealing and responsive user interface with smooth animations and engaging sound effects to enhance the player experience. The project includes both single-player (against AI) and two-player modes, real-time game state tracking, and dynamic win detection, delivering a fun and challenging experience across devices.',
        image: ticTacImage,
        git:'https://github.com/amanrai0810/Tic-tac-toe-game-with-AI',
        technologies:['HTML' , 'CSS', 'JavaScript']
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