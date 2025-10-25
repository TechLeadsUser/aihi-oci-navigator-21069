import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import heroImage from "@/assets/hero-cloud.jpg";
import { motion } from "framer-motion";
interface HeroSectionProps {
  onOpenForm: () => void;
}
const HeroSection = ({
  onOpenForm
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" initial={{
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
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Oracle Certified Cloud Partner</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight lg:text-4xl">
              Power Your Enterprise with{" "}
              <span className="text-gradient">Oracle Cloud Infrastructure</span>
            </h1>
            
            <p className="text-muted-foreground text-base">AIHI's Oracle Cloud Infrastructure solutions can help you achieve your digital transformation goals fast by providing performance, scalability, and innovation for your enterprise workloads.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0 glow-on-hover group" onClick={() => {
              document.getElementById('oci-services')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}>
                Explore OCI Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:border-primary" onClick={onOpenForm}>
                Talk to Our Experts
              </Button>
            </div>
          </motion.div>
          
          <motion.div className="relative" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <img src={heroImage} alt="Oracle Cloud Infrastructure visualization showing modern data center and network architecture" className="relative rounded-2xl shadow-2xl w-full h-auto" loading="eager" width={1920} height={1080} />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;