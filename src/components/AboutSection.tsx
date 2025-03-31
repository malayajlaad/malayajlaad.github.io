
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="number">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="mb-4">
              I'm a seasoned AI/ML Engineer with over 5 years of experience delivering end-to-end AI solutions. I specialize in generative AI, MLOps, and deploying machine learning models in cloud environments.
            </p>
            <p className="mb-4">
              My expertise includes working with large language models (LLMs), implementing Retrieval Augmented Generation (RAG) techniques, and developing AI systems that solve complex business problems.
            </p>
            <p className="mb-6">
              Currently based in Ahmedabad, India, I'm passionate about creating AI-powered applications that are not just technically robust but also responsible and ethical. I have a proven track record of driving AI innovation, enabling technical solutions, and implementing scalable AI technologies across diverse industries.
            </p>
            <p>
              When I'm not training models or debugging code, you can find me exploring new developments in the ML community and staying updated with cutting-edge AI research.
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative border-2 border-portfolio-teal rounded overflow-hidden">
              <div className="absolute inset-0 bg-portfolio-teal opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80" 
                alt="Malayaj Laad" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
