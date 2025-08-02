import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import chargingCaseImage from "@/assets/charging-case.jpg";
import earbudsEmergingImage from "@/assets/earbuds-emerging.jpg";
import connectivityWavesImage from "@/assets/connectivity-waves.jpg";
import chargingEffectsImage from "@/assets/charging-effects.jpg";

const ScrollAnimatedSection = () => {
  const containerRef = useRef(null);
  const earbudsRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const earbudsY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const earbudsScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const earbudsRotate = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -15]);

  const caseY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const caseOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.5]);

  const connectivityScale = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const connectivityRotate = useTransform(scrollYProgress, [0.3, 1], [0, 360]);

  const chargingProgress = useTransform(scrollYProgress, [0.5, 1], [0, 100]);

  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [lastScrollY]);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen relative bg-background overflow-hidden py-32"
    >
      {/* Background charging case */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: caseY, opacity: caseOpacity }}
      >
        <motion.img
          src={chargingCaseImage}
          alt="Charging Case"
          className="w-96 h-96 object-contain opacity-30"
          animate={{
            scale: isInView ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Emerging earbuds */}
      <motion.div
        ref={earbudsRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ 
          y: earbudsY, 
          scale: earbudsScale,
          rotateX: earbudsRotate
        }}
      >
        <motion.img
          src={earbudsEmergingImage}
          alt="Earbuds Emerging"
          className={`w-80 h-80 object-contain premium-shadow ${
            scrollDirection === 'down' ? 'earbuds-emerge' : 'earbuds-retract'
          }`}
          animate={isInView ? {
            y: [0, -10, 0],
            rotateZ: [0, 2, -2, 0]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Connectivity waves */}
      <motion.div
        className="absolute top-1/4 left-1/4 z-20"
        style={{ 
          scale: connectivityScale,
          rotate: connectivityRotate
        }}
      >
        <motion.img
          src={connectivityWavesImage}
          alt="Connectivity Waves"
          className="w-64 h-64 object-contain opacity-60"
          animate={isInView ? {
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Charging effects */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 z-20"
        style={{ scale: connectivityScale }}
      >
        <motion.img
          src={chargingEffectsImage}
          alt="Charging Effects"
          className="w-48 h-48 object-contain charging-pulse"
          animate={isInView ? {
            opacity: [0.5, 1, 0.5],
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-8 text-foreground"
            animate={isInView ? {
              scale: [1, 1.02, 1],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-gradient">Revolutionary</span>
            <br />
            Experience
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Watch as technology comes alive. Earbuds emerge from their case, 
            connectivity flows like magic, and charging happens in perfect harmony.
          </motion.p>

          {/* Charging progress bar */}
          <motion.div
            className="w-80 h-4 bg-muted rounded-full mx-auto mb-8 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="h-full bg-foreground rounded-full"
              style={{ width: `${chargingProgress.get()}%` }}
              animate={isInView ? {
                width: ["0%", "100%", "0%"]
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div
            className="text-sm text-muted-foreground"
            animate={isInView ? {
              opacity: [0.5, 1, 0.5]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Scroll to experience the magic
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-foreground rounded-full opacity-20"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={isInView ? {
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8]
          } : {}}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}
    </section>
  );
};

export default ScrollAnimatedSection;