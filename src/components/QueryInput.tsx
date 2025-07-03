
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2 } from "lucide-react";

interface QueryInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export const QueryInput = ({ value, onChange, onGenerate, isGenerating }: QueryInputProps) => {
  const [placeholder, setPlaceholder] = useState("");
  const fullPlaceholder = "e.g., show top 10 orders by revenue this month";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullPlaceholder.length) {
        setPlaceholder(fullPlaceholder.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl animate-fade-in">
      <h2 className="text-2xl font-semibold text-white mb-6">What would you like to query?</h2>
      
      <div className="space-y-4">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-lg resize-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
        />
        
        <Button
          onClick={onGenerate}
          disabled={!value.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating SQL...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Generate SQL Query
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
