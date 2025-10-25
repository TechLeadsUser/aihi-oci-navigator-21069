import { Cloud, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
const features = [{
  icon: Cloud,
  title: "Multi-Cloud Interoperability",
  description: "Cloud platforms integrated seamlessly"
}, {
  icon: Lock,
  title: "Security & Governance Automation",
  description: "Security of an enterprise-grade are embedded"
}, {
  icon: Zap,
  title: "DevOps-Driven Deployment",
  description: "Accelerated continuous Integration and Continuous Deployment pipelines."
}];
const IntroOverview = () => {
  return <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold lg:text-4xl">
            Make Oracle Cloud Infrastructure Work for{" "}
            <span className="text-gradient">Your Enterprise</span>
          </h2>
          <p className="text-muted-foreground text-base">
            AIHI Cloud Solutions helps businesses update their IT environments with Oracle's innovative Cloud Infrastructure. We create reliable, budget-friendly, and fast OCI setups specifically designed for operations that require utmost capacity, thereby guaranteeing flexibility, stability, and creative capability.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="glass-effect rounded-2xl p-8 text-center space-y-4 hover-scale"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
        ))}
        </div>
      </div>
    </section>;
};
export default IntroOverview;