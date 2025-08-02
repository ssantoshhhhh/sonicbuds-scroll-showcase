import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import noiseCancellationImage from "@/assets/noise-cancellation.jpg";
import microphoneImage from "@/assets/microphone-enc.jpg";
import batteryImage from "@/assets/battery-life.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  delay?: number;
}

const Feature = ({ title, description, image, reverse = false, delay = 0 }: FeatureProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 mb-32`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      </motion.div>
      
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: reverse ? -50 : 50, scale: 0.8 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: reverse ? -50 : 50, scale: 0.8 }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto rounded-2xl shadow-premium hover:shadow-electric transition-all duration-500"
        />
      </motion.div>
    </motion.div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Active Noise Cancellation",
      description: "Immerse yourself in pure sound with our advanced ANC technology. Block out up to 99% of background noise and focus on what matters most - your music.",
      image: noiseCancellationImage,
      reverse: false,
      delay: 0
    },
    {
      title: "Crystal Clear Calls",
      description: "Experience professional-grade call quality with ENC (Environmental Noise Cancellation) and quad-microphone array. Your voice comes through crystal clear, every time.",
      image: microphoneImage,
      reverse: true,
      delay: 0.2
    },
    {
      title: "24-Hour Battery Life",
      description: "Never run out of power with our intelligent battery management. 8 hours of continuous playback plus 16 hours with the charging case. Fast charge: 15 minutes = 3 hours.",
      image: batteryImage,
      reverse: false,
      delay: 0.4
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Revolutionary</span> Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the technology that sets SonicBuds Pro X apart from the competition
          </p>
        </motion.div>
        
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;