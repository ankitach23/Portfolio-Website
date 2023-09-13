import Image from "next/image"
import { useEffect } from "react";
import Link from "next/link"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function Hero() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const Variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };
    const leftcardVariants = {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
    };
    const rightcardVariants = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div

            variants={Variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1.0, delay: 0.4 }} ref={ref} id="experience">
            <div suppressHydrationWarning={true} className="px-4 my-10 md:my-28 h-full">
                <div ref={ref} className="md:flex md:flex-row-reverse md:justify-center md:mx-auto md:max-w-6xl md:gap-10">
                    <div>
                        <div className="md:mt-8 space-y-2">
                            <h1 className="text-5xl md:text-8xl pb-4 font-bold">Hello</h1>
                            <h2 className="text-xl font-semibold">A Bit About Me</h2>
                            <p className="font-light leading-relaxed tracking-wide md:max-w-md">
                                I'm a full stack developer with a passion for crafting exceptional user experiences. With expertise in both front-end and back-end development, I'm a final-year CS student equipped with a keen eye for detail and a drive for innovation aiming to build innovative AI solutions that push the boundaries of web development.</p>                    </div>

                        <div className="flex justify-center md:justify-start gap-8 my-10">

                            <Link href="/resume"><div className="bg-my-yellow rounded-full px-2 py-7 md:px-8 md:py-14 font-medium text-xl border border-black tracking-wide hover:bg-white">Resume</div></Link>
                            <Link href="/projects"><div className="bg-my-red rounded-full px-2 py-7  md:px-8 md:py-14 font-medium text-xl border border-black tracking-wide hover:bg-white">Projects</div></Link>
                            <Link href="/contact"><div className="bg-my-blue rounded-full px-2 py-7   md:px-8 md:py-14 font-medium text-xl border border-black tracking-wide hover:bg-white">Contact</div></Link>

                        </div>
                    </div>
                    <div className=" h-[300px] w-[300px] mx-auto md:mx-0 md:w-[480px] md:h-[480px] rounded-full overflow-hidden">
                        <Image src="/profile-pic.png" width={800} height={800} alt="my_pic" className="rounded-full grayscale" />
                    </div>
                </div>



            </div>
        </motion.div>
    )
}