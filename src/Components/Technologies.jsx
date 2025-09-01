import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
    return (
        <div className='pb-2 md:pb-10'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-5 md:my-20 text-center text-4xl'>
                Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(3)}>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(3)}>
                    <RiJavascriptLine className='text-7xl text-[#F0DB4F]' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(5)}>
                    <RiTailwindCssLine className='text-7xl text-[#06B6D4]' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(2)}>
                    <RiCss3Line className='text-7xl text-[#1a73e8]' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate='animate'
                    variants={iconVariants(4)}>
                    <RiHtml5Line className='text-7xl text-[#0000FF]' />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies
