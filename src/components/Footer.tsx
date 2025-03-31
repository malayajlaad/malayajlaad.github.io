
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-portfolio-slate text-sm mb-2">
              Designed & Built by Malayaj Laad
            </p>
            
            <div className="flex items-center justify-center text-xs text-portfolio-slate">
              <span>Made with</span>
              <Heart size={12} className="mx-1 text-portfolio-teal" fill="currentColor" />
              <span>in {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
