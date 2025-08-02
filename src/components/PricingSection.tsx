import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Active Noise Cancellation",
    "24-Hour Battery Life",
    "Crystal Clear Calls",
    "IPX7 Water Resistance",
    "Bluetooth 5.3",
    "Wireless Charging Case",
    "Touch Controls",
    "Voice Assistant Support"
  ];

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Premium</span> Quality,
            <br />Fair Price
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience professional-grade audio technology without breaking the bank
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-12 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-electric">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.3 }}
                >
                  <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">
                    $299
                  </div>
                  <p className="text-2xl text-muted-foreground">
                    Free worldwide shipping
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                    What's Included
                  </h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-electric flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col justify-center items-center space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Button 
                    variant="electric" 
                    size="lg" 
                    className="w-full py-8 text-xl font-bold hover:scale-105 transition-transform duration-300"
                  >
                    Order Now
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    30-day money-back guarantee<br />
                    2-year international warranty
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;