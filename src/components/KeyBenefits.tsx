import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
const benefits = [{
  title: "Scalability",
  description: "Scale workloads dynamically to match enterprise demand."
}, {
  title: "Cost Efficiency",
  description: "Achieve predictable pricing and higher ROI vs traditional infra."
}, {
  title: "Performance",
  description: "Achieve <2ms latency with Oracle's global data centers."
}, {
  title: "Security",
  description: "Multi-layer defense, identity control, and zero-trust model."
}, {
  title: "Innovation",
  description: "Enable AI, ML, and automation across all workloads."
}];
const KeyBenefits = () => {
  return <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-4xl font-bold mb-6 lg:text-4xl">
            Why Oracle Cloud Infrastructure Delivers{" "}
            <span className="text-gradient">Competitive Advantage</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-6 flex flex-col items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
};
export default KeyBenefits;