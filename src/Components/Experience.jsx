import { motion } from "framer-motion"


const Experience = () => {
  return (
    <div className="pb-5 md:pb-10 lg:pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} 
        className="my-5 md:my-10 lg:my-20 text-center text-2xl md:text-4xl">Experience
        </motion.h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        
        {/* IT Fresher */}
        {/* <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
             className="bg-stone-900 p-2 md:p-6 rounded-xl shadow">
          <h3 className="text-lg md:text-2xl font-semibold mb-2">Full Stack Developer (Fresher)</h3>
          <p className="text-stone-400 mb-4">
            Currently pursuing a Full Stack Development course, with hands-on
            projects using React, Tailwind CSS, JavaScript, Node.js, and MongoDB.
            Building responsive and interactive web applications.
          </p>
          <ul className="list-disc list-inside text-stone-400">
            <li>Bistro Bliss - Restaurant website with responsive UI</li>
            <li>Business Website - Company landing page with modern design</li>
          </ul>
        </motion.div> */}


        <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1 }}
  className="bg-stone-900 p-2 md:p-6 rounded-xl shadow"
>
  <h3 className="text-lg md:text-2xl font-semibold mb-2">
    Full Stack Developer Intern
  </h3>
  <p className="text-stone-400 mb-2">Aryu Academy | june,2025 - Present</p>
  <p className="text-stone-400 mb-4">
    Pursuing Full Stack Development course and internship at Aryu Academy. 
    Gaining hands-on experience in building responsive and interactive 
    applications using React, Tailwind CSS, JavaScript, Node.js, and MongoDB.
  </p>
  <ul className="list-disc list-inside text-stone-400">
    <li>Bistro Bliss - Restaurant website with responsive UI</li>
    <li>Stanby Business - Company landing page with modern design</li>
  </ul>
</motion.div>

        {/* Other Experience */}
        <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }} className="bg-stone-900 p-2 md:p-6 rounded-xl shadow">
          <h3 className="text-lg md:text-2xl font-semibold mb-2">Process Advisor - Banking Backend</h3>
          <p className="text-stone-400 mb-4">Nov 2016 - Aug 2018</p>
          <p className="text-stone-400">
            Worked on backend banking operations ensuring data accuracy,
            compliance checks, and smooth process handling. Gained strong
            problem-solving, communication, and team collaboration skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
