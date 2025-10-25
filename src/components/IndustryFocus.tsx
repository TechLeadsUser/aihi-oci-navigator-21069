import { Factory, Car, Landmark, Heart, Radio, Microscope } from "lucide-react";
import { motion } from "framer-motion";
const industries = [{
  icon: Factory,
  title: "Manufacturing",
  description: "Digital twin & supply chain optimization"
}, {
  icon: Car,
  title: "Automotive",
  description: "Connected mobility and predictive analytics"
}, {
  icon: Landmark,
  title: "BFSI",
  description: "Secure transactions and fraud prevention"
}, {
  icon: Heart,
  title: "Healthcare",
  description: "Patient data compliance & interoperability"
}, {
  icon: Radio,
  title: "Telecom",
  description: "Network automation & 5G enablement"
}, {
  icon: Microscope,
  title: "Life Sciences",
  description: "Research acceleration with AI-powered OCI analytics"
}];
const IndustryFocus = () => {
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
            Delivering Industry-Specific{" "}
            <span className="text-gradient">OCI Excellence</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
          <motion.div 
            key={index} 
            className="relative group overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
                <div className="glass-effect p-8 space-y-4 transition-all duration-300 group-hover:scale-105 card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
        ))}
        </div>
      </div>
    </section>;
};
export default IndustryFocus;