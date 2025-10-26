import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 flex flex-col justify-center items-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-5 md:my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>

      <div className="text-center tracking-tighter flex flex-col">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <p>21/3, East Mada Street,</p>
          <p>Villivakkam,</p>
          <p>Chennai - 600049</p>
        </motion.div>

        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg hover:underline"
          href="tel:9884510929"
        >
          +91 98845 10929
        </motion.a>

        <a
          href="mailto:archanaradha95@gmail.com"
          className="border-b hover:text-stone-300"
        >
          archanaradha95@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
