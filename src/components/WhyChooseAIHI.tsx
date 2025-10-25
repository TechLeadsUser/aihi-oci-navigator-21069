import { Award, Clock, TrendingUp, Shield, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import teamImage from "@/assets/aihi-team.jpg";
const features = [{
  icon: Award,
  title: "Oracle Certified Consultants",
  description: "with 12+ years of experience"
}, {
  icon: Clock,
  title: "24×7 Global Support",
  description: "and Monitoring"
}, {
  icon: TrendingUp,
  title: "Proven 99.9% Uptime",
  description: "in OCI Deployments"
}, {
  icon: Shield,
  title: "Cloud Security & Compliance",
  description: "Experts"
}, {
  icon: Users,
  title: "Multi-Industry OCI",
  description: "Success Stories"
}];
const metrics = [{
  value: 300,
  label: "Cloud Projects Delivered",
  suffix: "+"
}, {
  value: 98,
  label: "Client Retention Rate",
  suffix: "%"
}, {
  value: 12,
  label: "Years Industry Experience",
  suffix: "+"
}];
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = ""
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);
  return <div ref={ref} className="text-5xl font-bold text-gradient">
      {count}{suffix}
    </div>;
};
const WhyChooseAIHI = () => {
  return <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 lg:text-4xl">
            Your Strategic Partner for{" "}
            <span className="text-gradient">Oracle Cloud Transformation</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={teamImage} alt="AIHI Cloud Solutions team of Oracle certified consultants" className="rounded-2xl shadow-2xl w-full h-auto hover-scale" loading="lazy" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="glass-effect rounded-2xl p-6 space-y-3 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
          ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => <div key={index} className="glass-effect rounded-2xl p-8 text-center space-y-2">
              <AnimatedCounter end={metric.value} suffix={metric.suffix} />
              <p className="text-muted-foreground">{metric.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseAIHI;