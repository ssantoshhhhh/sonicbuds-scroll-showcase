import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Bluetooth, Wifi, Smartphone, Headphones } from "lucide-react";

const ConnectivitySection = () => {
  const containerRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStep, setConnectionStep] = useState(0);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const deviceY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const connectionProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setConnectionStep(prev => (prev >= 4 ? 0 : prev + 1));
        setIsConnected(prev => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const connectionSteps = [
    { icon: Bluetooth, label: "Bluetooth Pairing", color: "text-foreground" },
    { icon: Wifi, label: "Signal Optimization", color: "text-foreground" },
    { icon: Smartphone, label: "Device Sync", color: "text-foreground" },
    { icon: Headphones, label: "Audio Connected", color: "text-foreground" }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-background py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-8 text-foreground"
            animate={isInView ? {
              letterSpacing: ["0px", "2px", "0px"]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Seamless
            <br />
            <span className="text-gradient">Connection</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience instant connectivity with advanced Bluetooth 5.3 technology
          </motion.p>
        </motion.div>

        {/* Connection visualization */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Central connection hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            animate={isInView ? {
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-32 h-32 bg-foreground rounded-full flex items-center justify-center relative">
              <Bluetooth className="w-16 h-16 text-background" />
              
              {/* Pulsing rings */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 border-foreground rounded-full opacity-30"
                  style={{
                    width: `${150 + i * 50}%`,
                    height: `${150 + i * 50}%`,
                  }}
                  animate={isInView ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Connected devices */}
          {[
            { icon: Smartphone, position: "top-0 left-1/4", delay: 0 },
            { icon: Headphones, position: "top-1/4 right-0", delay: 0.5 },
            { icon: Wifi, position: "bottom-0 right-1/4", delay: 1 },
            { icon: Bluetooth, position: "bottom-1/4 left-0", delay: 1.5 }
          ].map((device, index) => (
            <motion.div
              key={index}
              className={`absolute ${device.position} w-20 h-20 bg-muted rounded-2xl flex items-center justify-center`}
              style={{ y: deviceY }}
              animate={isInView ? {
                scale: connectionStep === index ? [1, 1.3, 1] : 1,
                boxShadow: connectionStep === index 
                  ? ["0 0 0px rgba(0,0,0,0.1)", "0 0 30px rgba(0,0,0,0.3)", "0 0 0px rgba(0,0,0,0.1)"]
                  : "0 0 0px rgba(0,0,0,0.1)"
              } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <device.icon className="w-10 h-10 text-foreground" />
              
              {/* Connection line */}
              <motion.div
                className="absolute w-1 bg-foreground origin-center"
                style={{
                  height: index % 2 === 0 ? "120px" : "100px",
                  left: "50%",
                  top: index < 2 ? "100%" : "-120px",
                  transform: `translateX(-50%) rotate(${
                    index === 0 ? "45deg" : 
                    index === 1 ? "-45deg" : 
                    index === 2 ? "45deg" : "-45deg"
                  })`
                }}
                animate={isInView ? {
                  opacity: connectionStep === index ? [0, 1, 0.5] : 0.2,
                  scaleY: connectionStep === index ? [0, 1, 1] : 0.5
                } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Connection steps */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {connectionSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              animate={isInView ? {
                scale: connectionStep === index ? [1, 1.1, 1] : 1,
                opacity: connectionStep === index ? [1, 0.8, 1] : 0.6
              } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.div
                className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4"
                animate={connectionStep === index ? {
                  boxShadow: [
                    "0 0 0px rgba(0,0,0,0.1)",
                    "0 0 20px rgba(0,0,0,0.3)",
                    "0 0 0px rgba(0,0,0,0.1)"
                  ]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </motion.div>
              <h3 className="font-bold text-foreground mb-2">{step.label}</h3>
              <motion.div
                className="w-full h-1 bg-accent rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-foreground rounded-full"
                  animate={connectionStep >= index ? {
                    width: ["0%", "100%"]
                  } : {
                    width: "0%"
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live connection status */}
        <motion.div
          className="max-w-md mx-auto bg-muted rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          animate={isInView ? {
            boxShadow: isConnected 
              ? ["0 0 0px rgba(0,0,0,0.1)", "0 0 30px rgba(0,0,0,0.2)", "0 0 0px rgba(0,0,0,0.1)"]
              : "0 0 0px rgba(0,0,0,0.1)"
          } : {}}
        >
          <motion.div
            className={`w-4 h-4 rounded-full mx-auto mb-4 ${
              isConnected ? 'bg-green-500' : 'bg-muted-foreground'
            }`}
            animate={isConnected ? {
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 0px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.8)",
                "0 0 0px rgba(34, 197, 94, 0.5)"
              ]
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.h3
            className="text-2xl font-bold text-foreground mb-2"
            animate={isConnected ? {
              color: ["hsl(0 0% 0%)", "hsl(142 76% 36%)", "hsl(0 0% 0%)"]
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {isConnected ? 'Connected' : 'Connecting...'}
          </motion.h3>
          <p className="text-muted-foreground">
            {isConnected ? 'Audio streaming at 24-bit/96kHz' : 'Establishing secure connection'}
          </p>
        </motion.div>
      </div>

      {/* Background signal waves */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-foreground rounded-full opacity-10"
          style={{
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 4) * 20}%`,
          }}
          animate={isInView ? {
            scale: [0.5, 1.5, 0.5],
            opacity: [0.1, 0.5, 0.1],
            y: [-20, 20, -20]
          } : {}}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}
    </section>
  );
};

export default ConnectivitySection;