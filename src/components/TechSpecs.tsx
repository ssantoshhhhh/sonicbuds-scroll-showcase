import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

interface SpecProps {
  label: string;
  value: string;
  unit?: string;
  delay?: number;
}

const SpecCard = ({ label, value, unit, delay = 0 }: SpecProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group-hover:shadow-electric">
        <div className="text-center">
          <motion.div 
            className="text-4xl md:text-5xl font-bold text-gradient mb-2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.2, type: "spring", bounce: 0.4 }}
          >
            {value}
            {unit && <span className="text-2xl text-accent">{unit}</span>}
          </motion.div>
          <motion.p 
            className="text-muted-foreground font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
          >
            {label}
          </motion.p>
        </div>
      </Card>
    </motion.div>
  );
};

const TechSpecs = () => {
  const specs = [
    { label: "Driver Size", value: "13", unit: "mm", delay: 0 },
    { label: "Bluetooth Version", value: "5.3", delay: 0.1 },
    { label: "Latency", value: "60", unit: "ms", delay: 0.2 },
    { label: "Weight (each)", value: "4.2", unit: "g", delay: 0.3 },
    { label: "Water Resistance", value: "IPX7", delay: 0.4 },
    { label: "Frequency Range", value: "20Hz-40kHz", delay: 0.5 }
  ];

  return (
    <section className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Technical</span> Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Precision-engineered specifications that deliver exceptional performance
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <SpecCard key={index} {...spec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;