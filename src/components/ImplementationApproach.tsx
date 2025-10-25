import { Search, Layers, Rocket, TestTube, Activity } from "lucide-react";
import { motion } from "framer-motion";
const steps = [{
  icon: Search,
  title: "Assessment & Strategy",
  description: "Identify workloads and goals"
}, {
  icon: Layers,
  title: "Architecture & Design",
  description: "Define OCI resources and governance"
}, {
  icon: Rocket,
  title: "Migration & Automation",
  description: "Execute with minimal downtime"
}, {
  icon: TestTube,
  title: "Testing & Optimization",
  description: "Validate scalability and cost-efficiency"
}, {
  icon: Activity,
  title: "Monitoring & Support",
  description: "Ongoing performance management"
}];
const ImplementationApproach = () => {
  return <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 lg:text-4xl">
            Proven OCI{" "}
            <span className="text-gradient">Implementation Framework</span>
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
                  <div className="glass-effect rounded-2xl p-6 space-y-4 text-center card-hover">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{index + 1}</div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default ImplementationApproach;