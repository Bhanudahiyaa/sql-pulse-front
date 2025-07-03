
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface SqlDisplayProps {
  sql: string;
}

export const SqlDisplay = ({ sql }: SqlDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-600/50 shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Generated SQL Query</h3>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="sm"
          className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </>
          )}
        </Button>
      </div>
      
      <div className="bg-slate-900/90 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
          {sql}
        </pre>
      </div>
    </div>
  );
};
