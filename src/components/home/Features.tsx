
import { cn } from "@/lib/utils";
import { CheckCircle, Dna, FileSearch, Calculator, Brain, ChevronRight, Database, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Powerful Features for Genetic Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gene Genius combines advanced AI capabilities with specialized genetic research tools to accelerate your discoveries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Dna />}
            title="DNA Sequence Prediction"
            description="Use machine learning to predict and analyze DNA sequences with high accuracy. Compare results against known databases and identify patterns."
            benefits={[
              "99.8% accuracy in prediction models",
              "Support for all major sequence types",
              "Comparative analysis with global databases"
            ]}
          />
          
          <FeatureCard
            icon={<Brain />}
            title="Biological Knowledge Base"
            description="Access a comprehensive knowledge base of biological research, papers, and established genetic patterns to support your work."
            benefits={[
              "Updated daily with latest research",
              "Cross-referenced from multiple sources",
              "Specialized genetic research focus"
            ]}
          />
          
          <FeatureCard
            icon={<Calculator />}
            title="Advanced Calculations"
            description="Perform complex genetic calculations, statistical analysis, and modeling with our specialized mathematical engine."
            benefits={[
              "Protein folding simulations",
              "Statistical significance testing",
              "Genetic drift modeling"
            ]}
          />
          
          <FeatureCard
            icon={<FileSearch />}
            title="Research Assistant"
            description="Get AI-powered assistance with literature reviews, experiment design, and hypothesis generation based on existing research."
            benefits={[
              "Automated literature summaries",
              "Experimental design suggestions",
              "Hypothesis validation support"
            ]}
          />
          
          <FeatureCard
            icon={<Database />}
            title="Secure Data Storage"
            description="Store and analyze large genomic datasets with enterprise-grade security and compliance with research standards."
            benefits={[
              "End-to-end encryption",
              "Compliant with research regulations",
              "Unlimited storage capacity"
            ]}
          />
          
          <FeatureCard
            icon={<Shield />}
            title="Ethical Research Controls"
            description="Built-in ethical guidelines and compliance tools to ensure responsible use of genetic information and research."
            benefits={[
              "Privacy-preserving analysis methods",
              "Ethical use monitoring",
              "Compliance documentation"
            ]}
          />
        </div>
        
        <div className="text-center mt-16">
          <a href="/features" className="inline-flex items-center text-primary font-medium hover:underline">
            Explore all features
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  className?: string;
}

const FeatureCard = ({ icon, title, description, benefits, className }: FeatureCardProps) => {
  return (
    <motion.div 
      className={cn(
        "bg-background rounded-xl border p-6 hover:shadow-md transition-all",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <div className="text-primary h-6 w-6">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Features;
