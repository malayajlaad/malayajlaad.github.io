
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Intive",
      location: "Ahmedabad",
      period: "Oct 2023 – Present",
      description: [
        "Designed and deployed semantic search solutions using generative AI techniques",
        "Built RESTful APIs integrating vector databases (Weaviate) and graph databases (Neo4j)",
        "Implemented MLOps practices for model accuracy and scalability",
        "Delivered AI Proof of Concepts (PoCs) leveraging OpenAI, LangChain, and CrewAI"
      ]
    },
    {
      title: "Data Science Engineer",
      company: "Solution Analysts (Tridhya Group)",
      location: "Ahmedabad",
      period: "May 2022 – Oct 2023",
      description: [
        "Developed AI-powered chatbots integrating WhatsApp Cloud API for personalized marketing",
        "Created analytics dashboards reducing manual reporting by 200+ hours monthly",
        "Designed ML models for audio fingerprinting and document parsing",
        "Implemented predictive analytics driving key business decisions"
      ]
    },
    {
      title: "Associate Data Scientist",
      company: "Sophos Knowledge Services Pvt. Ltd",
      location: "Ahmedabad",
      period: "Feb 2021 – May 2022",
      description: [
        "Led data preprocessing and model training workflows for security applications",
        "Collaborated with cross-functional teams to deploy ML solutions",
        "Optimized model performance and improved prediction accuracy"
      ]
    },
    {
      title: "Programmer Analyst",
      company: "Cognizant",
      location: "Pune",
      period: "Feb 2017 – Nov 2019",
      description: [
        "Developed data processing pipelines and implemented ETL workflows",
        "Created dashboards and visualizations for business intelligence",
        "Collaborated in agile development teams to deliver software solutions"
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="number">03.</span> Experience
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="experience-card"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-portfolio-lightest-slate">
                {exp.title}{" "}
                <span className="text-portfolio-teal">@ {exp.company}</span>
              </h3>
              
              <div className="flex items-center mt-1 mb-4 text-sm text-portfolio-slate">
                <Calendar size={16} className="mr-2" />
                <span>{exp.period}</span>
                <span className="mx-2">•</span>
                <Briefcase size={16} className="mr-2" />
                <span>{exp.location}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-portfolio-teal mr-2">▹</span>
                    <span>{point}</span>
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
          className="mt-14 text-center"
        >
          <p className="text-portfolio-slate mb-6">
            See my complete work history and recommendations on LinkedIn
          </p>
          <a
            href="#"
            className="inline-block border border-portfolio-teal text-portfolio-teal rounded px-6 py-3 hover:bg-portfolio-teal/10 transition-colors duration-300 font-mono text-sm"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://linkedin.com/in/malayajlaad", "_blank");
            }}
          >
            View Full Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
