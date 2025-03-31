
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono text-portfolio-teal mb-4"
      >
        Hi, my name is
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
      >
        Malayaj Laad.
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-slate mb-8"
      >
        I build AI solutions.
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-md md:max-w-xl text-lg md:text-xl mb-12"
      >
        I'm a Sr. AI/ML Engineer specializing in building and deploying machine learning solutions. 
        Currently focused on generative AI, MLOps, and cloud-based ML deployments at{" "}
        <a href="#" className="text-portfolio-teal hover:underline">
          Intive
        </a>.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-portfolio-teal text-portfolio-teal rounded px-6 py-3 hover:bg-portfolio-teal/10 transition-colors duration-300 font-mono text-sm"
        >
          Learn more about what I do
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <ArrowDown 
          className="text-portfolio-teal animate-bounce" 
          size={24} 
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
