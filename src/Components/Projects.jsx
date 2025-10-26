import { motion } from "framer-motion"


const projects = [
    {
        id: 1,
        title: "Bistro Bliss",
        description:
            "A modern restaurant website built with React and Tailwind CSS. It features a responsive design, clean layout, and interactive sections for showcasing menu, services, and contact details.",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/archanaradha95/bistrobliss",
        live: "https://bistro-blissweb.netlify.app/",
        image: "/assets/bistrobliss.png",
    },
    {
        id: 2,
        title: "Business Website",
        description:
            "A responsive business landing page created using React and Tailwind CSS. Focused on modern UI, reusable components, and mobile-friendly layout to showcase services and company info.",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/archanaradha95/stanup",
        live: "https://stanup.netlify.app/",
        image: "/assets/stanup.png",
    },
];

const Projects = () => {
    return (
        <div className="pb-2 md:pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-5 md:my-10 lg:my-20 text-center text-2xl md:text-4xl">
                Projects</motion.h2>
            <div>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="mb-5 md:mb-12 flex flex-wrap md:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                width={250}
                                height={250}
                                className="mb-3 md:mb-6 rounded" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 lg:pl-6">
                            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                            <p className="mb-5 text-stone-400">{project.description}</p>
                            {/* <div className="flex flex-wrap gap-2 mb-4"> */}
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-slate-300 mb-2">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                        <div className="flex gap-4 my-3 md:my-5 justify-center items-center">
                            <a
                                href={project.github}
                                target="_blank"
                                className="text-blue-400 hover:underline">
                                GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                className="text-green-400 hover:underline">
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
