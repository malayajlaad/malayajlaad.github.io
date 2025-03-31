import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-20 px-4 md:px-6">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5
    }}>
        <h2 className="section-heading">
          <span className="number">05.</span> Contact
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-portfolio-lightest-slate mb-4">
            Get In Touch
          </h3>
          <p className="text-portfolio-slate mb-8">
            I'm currently looking for new opportunities to apply my AI/ML expertise. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 400
          }} href="mailto:malayaj.laad12@gmail.com" className="flex items-center bg-portfolio-light-navy p-4 rounded-md hover:bg-portfolio-navy transition-colors duration-300">
              <Mail size={24} className="text-portfolio-teal mr-3" />
              <span className="text-portfolio-lightest-slate">malayaj.laad12@gmail.com</span>
            </motion.a>
            
            <motion.a whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 400
          }} href="tel:+918962812199" className="flex items-center bg-portfolio-light-navy p-4 rounded-md hover:bg-portfolio-navy transition-colors duration-300">
              <Phone size={24} className="text-portfolio-teal mr-3" />
              <span className="text-portfolio-lightest-slate">+91 8962-812199</span>
            </motion.a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 400
          }} href="#" onClick={e => {
            e.preventDefault();
            window.open("https://github.com/malayajlaad", "_blank");
          }} className="bg-portfolio-light-navy p-3 rounded-full hover:bg-portfolio-navy transition-colors duration-300 text-portfolio-lightest-slate hover:text-portfolio-teal" aria-label="GitHub">
              <Github size={24} />
            </motion.a>
            
            <motion.a whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 400
          }} href="#" onClick={e => {
            e.preventDefault();
            window.open("https://linkedin.com/in/malayajlaad", "_blank");
          }} className="bg-portfolio-light-navy p-3 rounded-full hover:bg-portfolio-navy transition-colors duration-300 text-portfolio-lightest-slate hover:text-portfolio-teal" aria-label="LinkedIn">
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 400
          }} href="#" onClick={e => {
            e.preventDefault();
            window.open("https://twitter.com/malayajlaad", "_blank");
          }} className="bg-portfolio-light-navy p-3 rounded-full hover:bg-portfolio-navy transition-colors duration-300 text-portfolio-lightest-slate hover:text-portfolio-teal" aria-label="Twitter">
              <Twitter size={24} />
            </motion.a>
          </div>
          
          <motion.div whileHover={{
          scale: 1.05
        }} transition={{
          type: "spring",
          stiffness: 400
        }} className="inline-flex items-center bg-portfolio-light-navy p-4 rounded-md">
            <MapPin size={24} className="text-portfolio-teal mr-3" />
            <span className="text-portfolio-lightest-slate">Pune, India</span>
          </motion.div>
        </div>
      </motion.div>
    </section>;
};
export default ContactSection;