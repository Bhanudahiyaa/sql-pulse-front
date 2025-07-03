
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun, MessageSquare, HelpCircle, Database, History } from "lucide-react";

export const AppSidebar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const sampleQueries = [
    "Show all customers from New York",
    "Find top 5 products by sales",
    "Get monthly revenue for 2024",
    "List employees hired this year"
  ];

  return (
    <div className="w-80 bg-black/40 backdrop-blur-lg border-r border-white/10 p-6 min-h-screen">
      <div className="space-y-6">
        {/* Theme Toggle */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm">Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
            >
              {darkMode ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
              {darkMode ? "Dark Mode" : "Light Mode"}
            </Button>
          </CardContent>
        </Card>

        {/* Sample Queries */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Sample Queries
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {sampleQueries.map((query, index) => (
              <button
                key={index}
                className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 text-sm border border-white/10 hover:border-white/20"
              >
                {query}
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start border-white/20 text-white hover:bg-white/10"
            >
              <History className="w-4 h-4 mr-2" />
              Query History
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-white/20 text-white hover:bg-white/10"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Feedback
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-white/20 text-white hover:bg-white/10"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
