import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sonicbuds-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="text-gradient">SonicBuds</span>
            <br />
            <span className="text-foreground">Pro X</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the future of audio with cutting-edge technology, 
            premium design, and unmatched sound quality.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="electric" size="lg" className="px-8 py-6 text-lg">
              Order Now - $299
            </Button>
            <Button variant="premium" size="lg" className="px-8 py-6 text-lg">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Floating product image */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <div className="floating-animation">
            <img 
              src={heroImage} 
              alt="SonicBuds Pro X" 
              className="w-full h-auto rounded-2xl shadow-premium animate-glow-pulse"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;