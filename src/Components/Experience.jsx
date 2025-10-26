import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-5 md:pb-10 lg:pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-5 md:my-10 lg:my-20 text-center text-2xl md:text-4xl"
      >
        Experience
      </motion.h2>

      <div className="space-y-8 max-w-3xl mx-auto">
        {/* Full Stack Developer Intern */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="bg-stone-900 p-4 md:p-6 rounded-xl shadow"
        >
          <h3 className="text-lg md:text-2xl font-semibold mb-2">
            Full Stack Developer Intern
          </h3>
          <p className="text-stone-400 mb-2">
            Aryu Academy | June 2025 - Present
          </p>
          <p className="text-stone-400 mb-4">
            Gaining hands-on experience in developing responsive and interactive
            web applications using React, Tailwind CSS, JavaScript, Node.js, and
            MongoDB. Collaborating in real-world projects as part of the
            internship program.
          </p>
          <ul className="list-disc list-inside text-stone-400">
            <li>Bistro Bliss - Responsive restaurant website</li>
            <li>Stanby Business - Modern landing page design</li>
          </ul>
        </motion.div>

        {/* Self Learning */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="bg-stone-900 p-4 md:p-6 rounded-xl shadow"
        >
          <h3 className="text-lg md:text-2xl font-semibold mb-2">
            Self-Learning (Full Stack Development)
          </h3>
          <p className="text-stone-400 mb-2">Jan 2025 - May 2025</p>
          <p className="text-stone-400">
            Practiced and strengthened my skills in HTML, CSS, JavaScript, React,
            and Tailwind CSS through personal projects and online tutorials.
            Focused on building responsive UIs and understanding API integration.
          </p>
        </motion.div>

        {/* Previous Non-IT Experience */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="bg-stone-900 p-4 md:p-6 rounded-xl shadow"
        >
          <h3 className="text-lg md:text-2xl font-semibold mb-2">
            Process Advisor – Banking Backend
          </h3>
          <p className="text-stone-400 mb-2">Barclays Global Services | Nov 2016 - Aug 2018</p>
          <p className="text-stone-400">
            Worked in backend operations for UK retail banking, ensuring data
            accuracy, compliance checks, and fraud prevention. Recognized for
            strong analytical, communication, and teamwork skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
