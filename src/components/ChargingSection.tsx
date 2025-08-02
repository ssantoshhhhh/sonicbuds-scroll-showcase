import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Battery, Zap, Power } from "lucide-react";

const ChargingSection = () => {
  const containerRef = useRef(null);
  const [chargingLevel, setChargingLevel] = useState(0);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const batteryFill = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setChargingLevel(prev => (prev >= 100 ? 0 : prev + 2));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="min-h-screen bg-background py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main content */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-8 text-foreground"
            animate={isInView ? {
              textShadow: [
                "0 0 0px rgba(0,0,0,0.3)",
                "0 0 20px rgba(0,0,0,0.5)",
                "0 0 0px rgba(0,0,0,0.3)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Intelligent
            <br />
            <span className="text-gradient">Charging</span>
          </motion.h2>
        </motion.div>

        {/* Charging visualization grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Fast Charging */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-32 h-32 mx-auto mb-6 bg-muted rounded-2xl flex items-center justify-center"
              animate={isInView ? {
                boxShadow: [
                  "0 0 0px rgba(0,0,0,0.1)",
                  "0 0 30px rgba(0,0,0,0.3)",
                  "0 0 0px rgba(0,0,0,0.1)"
                ]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                animate={isInView ? { rotate: 360 } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-16 h-16 text-foreground" />
              </motion.div>
              
              {/* Lightning effects */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-8 bg-foreground rounded-full opacity-60"
                  style={{
                    left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 60}%`,
                    top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 60}%`,
                    transform: `rotate(${i * 60}deg)`
                  }}
                  animate={isInView ? {
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  } : {}}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">15-Min Quick Charge</h3>
            <p className="text-muted-foreground">3 hours of playback in just 15 minutes</p>
          </motion.div>

          {/* Wireless Charging */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative w-32 h-32 mx-auto mb-6 bg-muted rounded-2xl flex items-center justify-center"
              animate={isInView ? {
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Power className="w-16 h-16 text-foreground" />
              
              {/* Wireless charging waves */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 border-foreground rounded-full opacity-30"
                  style={{
                    width: `${100 + i * 30}%`,
                    height: `${100 + i * 30}%`,
                  }}
                  animate={isInView ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Wireless Charging</h3>
            <p className="text-muted-foreground">Simply place and charge wirelessly</p>
          </motion.div>

          {/* Battery Life */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="relative w-32 h-32 mx-auto mb-6 bg-muted rounded-2xl flex items-center justify-center"
              animate={isInView ? {
                boxShadow: [
                  "inset 0 0 0px rgba(0,0,0,0.1)",
                  "inset 0 0 20px rgba(0,0,0,0.2)",
                  "inset 0 0 0px rgba(0,0,0,0.1)"
                ]
              } : {}}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <div className="relative">
                <Battery className="w-16 h-16 text-foreground" />
                <motion.div
                  className="absolute inset-0 bg-foreground rounded"
                  style={{
                    clipPath: `inset(${100 - chargingLevel}% 0 0 0)`
                  }}
                  animate={isInView ? {
                    opacity: [0.3, 0.8, 0.3]
                  } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">24H Battery Life</h3>
            <p className="text-muted-foreground">8h + 16h with charging case</p>
          </motion.div>
        </div>

        {/* Interactive charging bar */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Live Charging Demo</h3>
            
            <div className="relative w-full h-8 bg-accent rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-foreground rounded-full relative"
                style={{ width: `${chargingLevel}%` }}
                animate={isInView ? {
                  boxShadow: [
                    "0 0 0px rgba(0,0,0,0.3)",
                    "0 0 15px rgba(0,0,0,0.5)",
                    "0 0 0px rgba(0,0,0,0.3)"
                  ]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <motion.div
                  className="absolute right-0 top-0 h-full w-2 bg-white rounded-full"
                  animate={isInView ? {
                    opacity: [0.5, 1, 0.5]
                  } : {}}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0%</span>
              <motion.span
                className="font-bold text-foreground"
                animate={isInView ? {
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {chargingLevel}%
              </motion.span>
              <span>100%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute top-10 left-10 w-4 h-4 bg-foreground rounded-full opacity-20"
        animate={isInView ? {
          scale: [1, 2, 1],
          opacity: [0.2, 0.6, 0.2]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-foreground rounded-full opacity-20"
        animate={isInView ? {
          y: [-10, 10, -10],
          opacity: [0.2, 0.4, 0.2]
        } : {}}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default ChargingSection;