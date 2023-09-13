import index from "@/pages"
import { Navbar } from "./Navbar"
import Footer from "./footer"
const resume = [
    {
        "id": 1,
        "date": "Mar 2022 - Present",
        "title": "Software Developer Intern",
        "company": "Future First",
        "description":"Developed FFI official website with technical precision and contributed to advanced AI-driven SOP functionality and an immigration chatbot at Tootler AI, emphasizing innovation and user experience."
    },
    {
        "id": 2,
        "date": "Jun 2022 - Aug 2022",
        "title": "Intern and Trainee",
        "company": "P.G. Tech Pvt. Ltd.",
        "description":"I mastered ReactJS, developed a game streaming website, and learned valuable teamwork and agile development skills. Ready for full-stack development."


    }, {
        "id": 3,
        "date": "Jun 2022 - Aug 2022",
        "title": "Contributor",
        "company": "Ved Vyas Foundation",
        "description":"Bhagavad Gita Website - At the Bhagavad Gita website, I played a key role in bug fixing, resolving broken elements, and working with GraphQL. My efforts ensured a smooth and improved user experience"

    }
]
const education = [
    {
        "id": 1,
        "date": "Sep 2020 - May 2024",
        "course": "Btech.Computer Science",
        "score": "9.0 CGPA",
        "institution": "Punjabi University Patiala",

    },
    {
        "id": 2,
        "date": "Mar 2019 - Mar 2020",
        "course": "+2 in Non Medical",
        "score": "90.6%",
        "institution": "Lt. B.K.S Sen. Sec. School",
    },
    {
        "id": 3,
        "date": "Mar 2017 - Mar 2018",
        "course": "10th High School",
        "score": "91.4%",
        "institution": "M.R. City Sen. Sec. School",
    }
]
const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Git",
    "Github",
    "Heroku",
    "Vercel",
    "Python",
    "C++",
    "C",
    "Java",
    "Django",
    "Postgres",
    "SQL",
    "GraphQL",
    "Apollo",
    "AWS",
    "AI",
    "Figma",
    "Prompt Engineering",
    "System Design"
 

]
export default function Resume() {

    function handleDownload() {
        // Replace 'Ankita_Chaudhary_Resume.pdf' with the actual path to your PDF file.
        var pdfFilePath = "/AnkitaResume.pdf";
        
        // Open the PDF file in a new tab/window.
        window.open(pdfFilePath, '_blank');
    }
    return (
        <div>
            <Navbar />
            <div className="px-4  max-w-5xl mx-auto font-montserrat">
                <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-4xl md:my-16 font-bold ">Resume</h1>
                <button onClick={handleDownload} className=" border border-black rounded-full text-sm h-fit my-auto px-3 py-1">Download Resume</button>
                </div>

                <div className="md:grid grid-cols-2 border-b border-slate-300 pb-4">
                    <h2 className="text-2xl font-bold w-2">Work Experience</h2>
                    <div className="flex flex-col ">
                        {resume.map((item) => (
                            <div key={item.id} className="grid grid-cols-3 gap-4 my-8">
                               <div> <p className="font-light mt-[3px] tracking-tight">{item.date}</p></div>
                                <div className=" col-span-2">
                                    <p className="text-lg font-medium">{item.title} , <span className="font-normal" >{item.company}</span></p>
                                    <p className="font-light leading-relaxed tracking-wide md:max-w-md">{item.description}</p>

                                </div>



                            </div>
                        ))}
                    </div>

                </div>
                <div className="md:grid grid-cols-2 border-b border-slate-300 pb-4 my-10 md:my-14">
                    <h2 className="text-2xl font-bold w-2">Education</h2>
                    <div  className="flex flex-col ">
                        {education.map((item) => (
                            <div  key={item.id} className="grid grid-cols-3 gap-4 my-8">
                               <div> <p className="font-light mt-[3px]">{item.date}</p></div>
                                <div className=" col-span-2">
                                    <p className="text-lg font-medium">{item.institution}<span className="font-light px-4" >{item.score}</span></p>
                                    <p className="font-light leading-relaxed tracking-wide md:max-w-md">{item.course}</p>

                                </div>



                            </div>
                        ))}
                    </div>

                    {/* <div class="flex justify-center mt-8 mb-4 text-sm text-gray-700 sm:justify-
                start">
                    
                </div> */}
                </div>
                <div className="md:grid grid-cols-2 my-10 md:my-14">
                    <h2 className="text-2xl font-bold w-2">Skills</h2>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap gap-4">
                            {skills.map((item,index) => (
                                <div  key={index} className="bg-gray-200 px-4 py-2 rounded-md">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>







            </div>
            <Footer />
        </div>
    )
}