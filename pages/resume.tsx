import Layout from "@/components/Layout"
import MyResume from "@/components/MyResume"

export default function Resume(){
    return(
        <Layout>
        <div suppressHydrationWarning className='  bg-gradient-to-l from-gray-100 to-gray-100'>
           <MyResume/>
        </div>
        </Layout>
    )
}