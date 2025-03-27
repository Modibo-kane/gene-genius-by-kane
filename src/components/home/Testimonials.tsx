
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trusted by Leading Researchers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Gene Genius is transforming genetic research across institutions worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            name="Dr. Sarah Chen"
            role="Genomics Research Lead, Stanford University"
            quote="Gene Genius has accelerated our research by at least 6 months. The DNA sequence prediction capabilities are remarkably accurate and have helped us identify previously overlooked patterns."
            avatarSrc=""
            avatarFallback="SC"
          />
          
          <TestimonialCard
            name="Prof. James Miller"
            role="Department of Molecular Biology, MIT"
            quote="The computational power behind Gene Genius is impressive. We've been able to run complex genetic analyses that would have taken weeks in just hours. A game-changer for our lab."
            avatarSrc=""
            avatarFallback="JM"
          />
          
          <TestimonialCard
            name="Dr. Elena Rodriguez"
            role="Bioinformatics Specialist, Mayo Clinic"
            quote="What sets Gene Genius apart is how it combines advanced AI with specialized genetic knowledge. The insights it provides have directly contributed to two breakthrough discoveries in our cancer research."
            avatarSrc=""
            avatarFallback="ER"
          />
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
  avatarFallback: string;
}

const TestimonialCard = ({ name, role, quote, avatarSrc, avatarFallback }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <QuoteIcon className="h-10 w-10 text-primary/20 mb-4" />
          
          <p className="text-foreground mb-6 leading-relaxed">{quote}</p>
          
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={avatarSrc} alt={name} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <p className="font-medium text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Testimonials;
