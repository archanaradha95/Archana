import { motion } from "framer-motion"
import ShinyText from '../animations/ShinyText';



const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }

}
const Hero = () => {
    return (
        <div className='pb-4  lg:mb-10'>
            <div className='flex flex-wrap md:flex-row-reverse'>
                <div className='w-full md:w-1/2'>
                    <div className='flex justify-center p-2 md:p-8'>
                        <motion.img src="/profilepic1.jpeg"
                            alt="Archana"
                            className='border border-stone-900 rounded-3xl h-[250px] md:h-[400px] '
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }} />
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <motion.div initial="hidden"
                        animate="visible"
                        variants={containerVariants} className='flex flex-col items-center mt-5 md:items-start md:mt-10'>
                        <motion.h2
                            variants={childVariants}
                            className='pb-2 text-4xl tracking-tighter md:text-6xl lg:text-8xl  '>
                            Archana</motion.h2>
                        {/* <motion.span
                            variants={childVariants}
                            className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-xl md:text-3xl tracking-tight text-transparent '>
                            Full Stack Developer</motion.span> */}

                        <ShinyText
                            text="Full Stack Developer"
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />
                        <motion.p
                            variants={childVariants}
                            className='my-5 max-w-lg md:py-6 text-base md:text-xl leading-relaxed tracking-tighter'>
                            I'm an aspiring Full Stack Developer currently interning at Aryu Academy, where I’m gaining hands-on experience with React, Node.js, and Tailwind CSS. I enjoy building responsive, user-friendly applications and continuously exploring new technologies to grow as a developer.
                        </motion.p>
                        <motion.a
                            variants={childVariants}
                            href="/ArchanaR_FullStackDeveloper_Resume.pdf" target='_blank'
                            download
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mb-5 md:mb-10'>
                            Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
