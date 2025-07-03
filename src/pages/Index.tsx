
import { useState } from "react";
import { QueryInput } from "@/components/QueryInput";
import { SqlDisplay } from "@/components/SqlDisplay";
import { ResultsTable } from "@/components/ResultsTable";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import { mockDatabase } from "@/utils/mockDatabase";
import { generateMockSqlQuery } from "@/utils/mockSqlGenerator";

const Index = () => {
  const [query, setQuery] = useState("");
  const [generatedSql, setGeneratedSql] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleGenerateSQL = async () => {
    if (!query.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockSql = generateMockSqlQuery(query);
    setGeneratedSql(mockSql);
    setIsGenerating(false);
  };

  const handleRunQuery = async () => {
    if (!generatedSql.trim()) return;
    
    setIsExecuting(true);
    // Simulate query execution delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const queryResults = mockDatabase.executeQuery(generatedSql);
    setResults(queryResults);
    setIsExecuting(false);
  };

  const handleDownloadCSV = () => {
    if (results.length === 0) return;
    
    const headers = Object.keys(results[0]);
    const csvContent = [
      headers.join(','),
      ...results.map(row => headers.map(header => row[header]).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'query_results.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="flex">
        <AppSidebar />
        
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 animate-fade-in">
              🔮 SQL Whisperer
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in">
              Transform natural language into powerful SQL queries with Python & Streamlit
            </p>
          </div>

          {/* Query Input Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <QueryInput 
              value={query}
              onChange={setQuery}
              onGenerate={handleGenerateSQL}
              isGenerating={isGenerating}
            />

            {/* SQL Display */}
            {generatedSql && (
              <div className="animate-fade-in">
                <SqlDisplay sql={generatedSql} />
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    onClick={handleRunQuery}
                    disabled={isExecuting}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isExecuting ? "Executing..." : "Run Query"}
                  </Button>
                </div>
              </div>
            )}

            {/* Results Section */}
            {results.length > 0 && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-100">Query Results</h3>
                  <Button
                    onClick={handleDownloadCSV}
                    variant="outline"
                    className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 hover:text-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CSV
                  </Button>
                </div>
                <ResultsTable data={results} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
