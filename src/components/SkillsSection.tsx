
import { motion } from "framer-motion";
import { Cpu, Terminal, Database, Cloud, Network, Code } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu size={24} />,
      skills: [
        "PyTorch, TensorFlow, Scikit-learn, Keras",
        "OpenAI API, GPT, LangChain, RAG",
        "Large Language Models (LLMs)",
        "spaCy, Hugging Face"
      ]
    },
    {
      title: "Programming & Development",
      icon: <Terminal size={24} />,
      skills: [
        "Python (Primary)",
        "FastAPI",
        "GitHub Actions, Prefect, MLflow",
        "Docker, Kubernetes"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud size={24} />,
      skills: [
        "AWS (Lambda, EventBridge, S3, EC2)",
        "Azure (OpenAI, AI Studio, Container Apps)",
        "Basic Terraform",
        "Serverless Deployments"
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database size={24} />,
      skills: [
        "MySQL, Postgres, Firestore",
        "Weaviate, Neo4j",
        "Pandas, NumPy, Apache Spark",
        "Zoho Analytics"
      ]
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
    <section id="skills" className="py-20 px-4 md:px-6 bg-portfolio-navy/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="number">02.</span> Skills
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-portfolio-light-navy p-6 rounded-md border border-portfolio-navy hover:border-portfolio-teal/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-portfolio-teal">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-portfolio-teal mr-2">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <h3 className="text-xl font-semibold mb-4 text-portfolio-lightest-slate flex items-center">
            <Code size={20} className="mr-2 text-portfolio-teal" />
            Certifications
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="tech-tag">Vector Databases: From Embeddings to Applications</li>
            <li className="tech-tag">Building Systems with the ChatGPT API</li>
            <li className="tech-tag">Multi AI Agent Systems with CrewAI</li>
            <li className="tech-tag">Knowledge Graphs for RAG</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
