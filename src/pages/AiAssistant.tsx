
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dna, SendIcon, Microscope, FileText, RotateCcw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AiAssistantPage = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour, je suis Gene Genius, votre assistant pour la recherche génétique. Comment puis-je vous aider aujourd'hui?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const { toast } = useToast();

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simuler une réponse de l'IA (dans une application réelle, ce serait un appel API)
    setTimeout(() => {
      const responses = [
        "D'après mon analyse, cette séquence ADN présente des caractéristiques intéressantes au niveau des régions codantes. Je suggère d'examiner les motifs de régulation entre les positions 156 et 289.",
        "Je détecte une homologie significative avec les gènes impliqués dans la voie métabolique que vous étudiez. Considérez les interactions potentielles avec les facteurs de transcription suivants...",
        "Les calculs indiquent une probabilité de 78% que cette mutation affecte la structure tertiaire de la protéine. Voici les implications potentielles sur sa fonction...",
        "Pour votre recherche sur ce patrimoine génétique, je recommande d'analyser les variations dans les régions non-codantes qui peuvent influencer l'expression des gènes cibles."
      ];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      setInput("");
    }, 1500);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const clearConversation = () => {
    setMessages([
      {
        id: 1,
        text: "Bonjour, je suis Gene Genius, votre assistant pour la recherche génétique. Comment puis-je vous aider aujourd'hui?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    toast({
      title: "Conversation réinitialisée",
      description: "Votre conversation a été effacée",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-3xl font-bold mb-2">Assistant IA Gene Genius</h1>
                <p className="text-muted-foreground">
                  Posez vos questions sur la génétique, soumettez des séquences ADN pour analyse ou demandez de l'aide pour vos calculs biologiques.
                </p>
              </motion.div>
              
              <Card className="h-[600px] flex flex-col">
                <CardContent className="flex flex-col h-full p-0">
                  <div className="flex-grow overflow-y-auto p-6">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 flex ${
                          message.isUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-lg ${
                            message.isUser
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p>{message.text}</p>
                          <p className="text-xs mt-2 opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start mb-4">
                        <div className="max-w-[80%] p-4 rounded-lg bg-muted">
                          <div className="flex space-x-2 items-center">
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 border-t">
                    <div className="flex items-end gap-2">
                      <Textarea
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        placeholder="Entrez votre question ou séquence ADN..."
                        className="resize-none"
                        rows={3}
                      />
                      <Button 
                        onClick={handleSend} 
                        size="icon" 
                        className="h-10 w-10 rounded-full flex-shrink-0"
                        disabled={isLoading || !input.trim()}
                      >
                        <SendIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearConversation} 
                        className="text-xs flex items-center gap-1"
                      >
                        <RotateCcw className="h-3 w-3" />
                        Nouvelle conversation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Outils disponibles</h2>
                  
                  <Tabs defaultValue="analyze">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="analyze">
                        <Dna className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger value="calculate">
                        <FileText className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger value="predict">
                        <Microscope className="h-4 w-4" />
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="analyze" className="space-y-4">
                      <h3 className="font-medium">Analyse ADN</h3>
                      <p className="text-sm text-muted-foreground">
                        Soumettez des séquences ADN pour identifier les caractéristiques, structures et motifs.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-xs font-mono">Exemple: Analyser ATGCTCGAATGCTAGCTAG</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="calculate" className="space-y-4">
                      <h3 className="font-medium">Calculs biologiques</h3>
                      <p className="text-sm text-muted-foreground">
                        Effectuez des calculs complexes liés à la biologie moléculaire.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-xs font-mono">Exemple: Calculer le poids moléculaire de cette protéine</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="predict" className="space-y-4">
                      <h3 className="font-medium">Prédiction</h3>
                      <p className="text-sm text-muted-foreground">
                        Prédisez les structures et fonctions basées sur des séquences génétiques.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-xs font-mono">Exemple: Prédire l'impact de cette mutation</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="font-medium">Exemples de requêtes</h3>
                    <ul className="space-y-2">
                      <li 
                        className="text-sm p-2 bg-muted rounded-md cursor-pointer hover:bg-muted/80"
                        onClick={() => setInput("Analyser cette séquence ADN: ATGCCTAGCTAGCTAGC")}
                      >
                        Analyser cette séquence ADN
                      </li>
                      <li 
                        className="text-sm p-2 bg-muted rounded-md cursor-pointer hover:bg-muted/80"
                        onClick={() => setInput("Prédire la structure secondaire de cette protéine")}
                      >
                        Prédire une structure protéique
                      </li>
                      <li 
                        className="text-sm p-2 bg-muted rounded-md cursor-pointer hover:bg-muted/80"
                        onClick={() => setInput("Calculer la stabilité thermodynamique")}
                      >
                        Calcul de stabilité thermodynamique
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiAssistantPage;
