import { Cloud, Code, Server, Database, Shield, Settings } from "lucide-react";
import { motion } from "framer-motion";
const services = [{
  icon: Cloud,
  title: "Cloud Migration Services",
  description: "Seamlessly migrate on-prem workloads to OCI with minimal downtime and optimized performance."
}, {
  icon: Code,
  title: "Application Development & Deployment",
  description: "Build and deploy applications faster using OCI DevOps, CI/CD pipelines, and Kubernetes orchestration."
}, {
  icon: Server,
  title: "Infrastructure as a Service (IaaS)",
  description: "High-performance compute, storage, and networking to meet scalable enterprise demands."
}, {
  icon: Database,
  title: "Database as a Service (DBaaS)",
  description: "Leverage Oracle Autonomous DB for automation, scalability, and data resilience."
}, {
  icon: Shield,
  title: "Security & Compliance",
  description: "Advanced identity, encryption, and policy frameworks ensuring robust governance."
}, {
  icon: Settings,
  title: "Managed Cloud Services",
  description: "24×7 OCI monitoring, patching, optimization, and cost management by certified experts."
}];
const OCIServices = () => {
  return <section id="oci-services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 lg:text-4xl">
            Comprehensive Oracle Cloud Infrastructure{" "}
            <span className="text-gradient">Service Offerings</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="glass-effect rounded-2xl p-6 space-y-4 card-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
        ))}
        </div>
      </div>
    </section>;
};
export default OCIServices;