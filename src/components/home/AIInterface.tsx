
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Code, MessageSquare, BarChart, Dna, AtomIcon, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const AIInterface = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setInput("");
    }, 2000);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
            <AtomIcon className="w-4 h-4 mr-2" />
            Powerful Interface
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Experience the Gene Genius AI Interface
          </h2>
          
          <p className="text-lg text-muted-foreground">
            An intuitive interface designed specifically for genetic researchers, with specialized tools for DNA analysis, statistical modeling, and literature research.
          </p>
        </div>
        
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border shadow-lg backdrop-blur-sm bg-background/80">
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center justify-between border-b px-4 py-2">
                  <TabsList className="grid grid-cols-3 h-9">
                    <TabsTrigger value="chat" className="text-xs sm:text-sm">
                      <MessageSquare className="w-4 h-4 mr-2" /> 
                      Chat
                    </TabsTrigger>
                    <TabsTrigger value="analysis" className="text-xs sm:text-sm">
                      <Dna className="w-4 h-4 mr-2" /> 
                      DNA Analysis
                    </TabsTrigger>
                    <TabsTrigger value="visualize" className="text-xs sm:text-sm">
                      <BarChart className="w-4 h-4 mr-2" /> 
                      Visualize
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="chat" className="p-0 m-0">
                  <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <AtomIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Hello! I'm Gene Genius, your AI assistant for genetic research. How can I help you today? You can ask about DNA sequence analysis, genetic mutations, or research assistance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start justify-end gap-3">
                      <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Can you help me analyze potential gene mutations in this DNA sequence? I'm looking for known correlations with cardiac conditions.
                        </p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-medium">
                        You
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <AtomIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          I'd be happy to help analyze the DNA sequence for potential mutations related to cardiac conditions. To get started, I'll need:
                        </p>
                        <ol className="text-sm mt-2 ml-4 list-decimal">
                          <li>The DNA sequence or identifier</li>
                          <li>Specific cardiac conditions of interest</li>
                          <li>Any family history information available</li>
                        </ol>
                        <p className="text-sm mt-2">
                          I can then identify potential mutations and cross-reference them with known cardiac-related genetic markers from research databases.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t p-4">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <Textarea 
                        placeholder="Ask about DNA sequences, mutations, or genetic research..."
                        className="min-h-[60px] resize-none flex-1"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                      <Button type="submit" className="sm:self-end" disabled={isLoading || !input.trim()}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing
                          </>
                        ) : (
                          <>
                            Send <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </TabsContent>
                
                <TabsContent value="analysis" className="p-4 m-0">
                  <div className="text-center py-12">
                    <Dna className="h-12 w-12 mx-auto text-primary/40 mb-4" />
                    <h3 className="text-lg font-medium mb-2">DNA Sequence Analysis</h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
                      Upload or paste a DNA sequence to analyze for mutations, patterns, and research correlations.
                    </p>
                    <Button>Upload Sequence</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="visualize" className="p-4 m-0">
                  <div className="text-center py-12">
                    <BarChart className="h-12 w-12 mx-auto text-primary/40 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Data Visualization</h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
                      Create interactive visualizations of genetic data, sequence comparisons, and statistical analyses.
                    </p>
                    <Button>Create Visualization</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Try Gene Genius with your own research data for full functionality
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIInterface;
