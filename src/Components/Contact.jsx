import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20 flex flex-col justify-center items-center'>
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: -100 }}
            transition={{ duration: 0.5 }} 
            className='my-5 md:my-10 text-center text-4xl '>
                Get In Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }} >
                <p className=''>21/3,east mada street,</p>
               <p > Villivakkam,</p>
               <p>Chennai-600049</p>
            </motion.div>
            <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}  className='my-4'>
                9884510929</motion.p>
            <a href="mailto:archanaradha95@gmail.com" className='border-b'>archanaradha95@gmail.com</a>
                    {/* tel: */}
        </div>
      
    </div>
  )
}

export default Contact
