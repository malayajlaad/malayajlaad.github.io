
import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "IntiveGPT",
      description: "AI agent platform for employee task automation. This intelligent assistant helps streamline internal processes and improves productivity.",
      technologies: ["OpenAI API", "LangChain", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "ConnectingYouNow (CYN)",
      description: "Semantic search widget using RAG techniques to improve search relevance and user experience in knowledge management applications.",
      technologies: ["RAG", "Weaviate", "NextJS", "Embeddings"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "FireBreak",
      description: "AI project management assistant that helps teams prioritize tasks, identify bottlenecks, and optimize workflows through intelligent analysis.",
      technologies: ["Python", "CrewAI", "Azure", "Neo4j"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "Omni Channel",
      description: "Retail chatbot with personalized marketing capabilities, integrating multiple messaging platforms for seamless customer communication.",
      technologies: ["WhatsApp API", "NLP", "TensorFlow", "FastAPI"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      links: {
        github: "#",
        external: "#"
      }
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-portfolio-navy/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="number">04.</span> Key Projects
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-80 relative group">
                <div className="absolute inset-0 bg-portfolio-teal/20 rounded overflow-hidden group-hover:bg-transparent transition-colors duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <p className="font-mono text-portfolio-teal mb-1">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {project.title}
                </h3>
                <div className="bg-portfolio-light-navy p-6 rounded shadow-lg mb-4">
                  <p>{project.description}</p>
                </div>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-lightest-slate hover:text-portfolio-teal transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-lightest-slate hover:text-portfolio-teal transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center mb-6">
            <BookOpen size={20} className="mr-2 text-portfolio-teal" />
            <h3 className="text-xl font-semibold text-portfolio-lightest-slate">
              More Projects
            </h3>
          </div>
          <p className="text-portfolio-slate mb-6 max-w-lg mx-auto">
            I've worked on many more projects. View my GitHub profile to see my complete portfolio of work.
          </p>
          <a
            href="#"
            className="inline-block border border-portfolio-teal text-portfolio-teal rounded px-6 py-3 hover:bg-portfolio-teal/10 transition-colors duration-300 font-mono text-sm"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/malayajlaad", "_blank");
            }}
          >
            View GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
