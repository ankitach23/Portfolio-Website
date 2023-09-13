import Link from "next/link"
import { Navbar } from "./Navbar"
import Footer from "./footer"
import Image from "next/image"
const projects = [
    {
        "id": 1,
        "name": "MyGurbani",
        "href":"https://www.mygurbani.ai/",
        "technologies":"Next JS,Python,FastAPI,AWS,AI",
        "description": "As a Full-Stack Developer, I contributed to the Gurbani AI Chatbot, handling both frontend and backend tasks. This innovative project facilitated easy access to Gurbani scriptures, uniting my technical expertise with my reverence for spiritual guidance.        ",
        "src":"/projects/mygurbani.jpeg"
    },
    {
        "id": 2,
        "name": "Promptopia",
        "href":"https://prompt-sharing-rust.vercel.app/",
        "technologies":"MongoDB,NextJS,Typescript,Vercel,AI",
        "description": "This AI-powered prompts platform designed for the modern era. With Promptopia, discover, create, and share imaginative prompts effortlessly. Dive into a world of inspiration and search for tags or usernames to fuel your creativity. Join the creative revolution",
        "src":"/projects/promptia.jpeg"
    }, {
        "id": 3,
        "name": "JoyMakers",
        "href":"https://github.com/ankitach23/joy-makers",
        "technologies":"Tailwind CSS,Node JS,Sanity,Javascript",
        "description": "During my time at Joymakers NGO, I not only developed their website but also made significant contributions to their mission. This experience allowed me to gain valuable web development skills while efficiently managing a large database, further enhancing my expertise.",
        "src":"/projects/joymakers.jpeg"
    },
    {
        "id": 4,
        "name": "Edorox Gaming Studio",
        "href":"https://streaming-seven-iota.vercel.app/",
        "technologies":"React JS,Bootstrap,HTML,CSS",
        "description": "Revolutionize your gaming experience with our cutting-edge game streaming website. Immerse yourself in the world of gaming like never before. Enjoy seamless live streams, interact with top gamers, and access an extensive library of gaming content. Elevate your gaming journey with us and be part of the gaming revolution.",
        "src":"/projects/gaming.jpeg"
    }
]
export default function Projects(){
    return(
        <div suppressHydrationWarning={true}>
            <Navbar/>
            <div className="font-montserrat  px-4  max-w-5xl mx-auto">
               <h1 className="text-2xl md:text-4xl my-8 md:my-16 font-bold">Projects</h1>  
               {projects.map((item) => (
                            <div key={item.id} className="flex flex-col  md:flex-row my-8 md:my-20 justify-between">
                                <div className="flex flex-col gap-4 my-4 md:my-0">
                                    <Link href={item.href}>
                                    <p className="text-2xl  font-bold">{item.name}</p>
                                    </Link>
                                    <p className="">{item.technologies}</p>
                                    <p className="text-base font-light max-w-sm">{item.description}</p>
                                </div>
                                <div className="">
                                <Image src={item.src} width={500} height={500} alt="project-photo" className="hover:scale-110" />
                                </div>
                            </div>
                        ))}
            </div>
            <Footer/>
        </div>
    )
}