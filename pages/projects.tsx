import Layout from "@/components/Layout";
import Projects from "@/components/Projects";

export default function MyProjects(){
    return(
        <Layout>
        <div suppressHydrationWarning className=' bg-gradient-to-l from-gray-100 to-gray-100'>
           <Projects/>
        </div>
        </Layout>
    )
}