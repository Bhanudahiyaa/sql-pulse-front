
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database } from "lucide-react";

export const AppSidebar = () => {
  const sampleQueries = [
    "Show all customers from New York",
    "Find top 5 products by sales",
    "Get monthly revenue for 2024",
    "List employees hired this year",
    "Count orders by status",
    "Get average product price by category"
  ];

  return (
    <div className="w-80 bg-gradient-to-b from-gray-900 via-slate-900 to-black border-r border-gray-700/50 p-6 min-h-screen">
      <div className="space-y-6">
        {/* Stack Info */}
        <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-600/30 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-100 text-sm">Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Python Backend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Streamlit Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>AI SQL Generation</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Queries */}
        <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-600/30 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-100 text-sm flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Sample Queries
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {sampleQueries.map((query, index) => (
              <button
                key={index}
                className="w-full text-left p-3 rounded-lg bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-600/40 hover:to-gray-700/40 text-gray-300 hover:text-gray-100 transition-all duration-300 text-sm border border-gray-600/20 hover:border-gray-500/30 hover:shadow-lg hover:shadow-purple-500/10"
              >
                {query}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
