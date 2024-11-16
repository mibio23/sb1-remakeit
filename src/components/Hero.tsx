import React from 'react';
import { ArrowRight, Terminal, Zap, Github } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Transform Your Code into
          <span className="text-indigo-600"> Production Ready</span> Apps
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Instantly convert your code snippets into fully functional, production-ready applications with our intelligent AI-powered platform.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            Try it now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
            View Documentation
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Terminal className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Code Analysis</h3>
            <p className="text-gray-600">Advanced AI analyzes your code and understands its purpose</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Zap className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant Transform</h3>
            <p className="text-gray-600">Convert snippets to full applications in seconds</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Github className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ready to Deploy</h3>
            <p className="text-gray-600">Get production-ready code with best practices</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white/0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80" 
              alt="Code editor preview" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}