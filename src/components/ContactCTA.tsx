import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
interface ContactCTAProps {
  onOpenForm: () => void;
}
const ContactCTA = ({
  onOpenForm
}: ContactCTAProps) => {
  return <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white lg:text-3xl">
            Ready to Accelerate Your Oracle Cloud Journey?
          </h2>
          <p className="text-white/90 text-base">
            Schedule a consultation with our certified OCI experts and see how AIHI can 
            optimize your cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onOpenForm} className="bg-white text-primary hover:bg-white/90 font-semibold group">
              <Calendar className="mr-2" />
              Book Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" onClick={onOpenForm} variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
              Talk to Our Cloud Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ContactCTA;