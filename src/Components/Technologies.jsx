import { motion } from "framer-motion";
import { RiReactjsLine, RiJavascriptLine, RiTailwindCssLine, RiCss3Line, RiHtml5Line,RiNodejsLine, } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-10 md:pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-5 md:my-20 text-center text-2xl md:text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <RiReactjsLine className="text-7xl text-cyan-400" aria-label="React" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <RiJavascriptLine className="text-7xl text-yellow-400" aria-label="JavaScript" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)}>
          <RiTailwindCssLine className="text-7xl text-sky-400" aria-label="Tailwind CSS" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
          <RiCss3Line className="text-7xl text-blue-500" aria-label="CSS3" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <RiHtml5Line className="text-7xl text-orange-500" aria-label="HTML5" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <RiNodejsLine className="text-7xl text-green-500" aria-label="Node.js" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiMongodb className="text-7xl text-green-600" aria-label="MongoDB" />
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default Technologies;
