import React, { useState, useEffect } from 'react';
import { Code2, Zap } from 'lucide-react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            Loading Portfolio
          </h2>
          <p className="text-purple-200">Crafting digital experiences...</p>
        </div>

        <div className="w-64 bg-slate-700 rounded-full h-2 mx-auto">
          <div 
            className="bg-gradient-to-r from-purple-500 to-teal-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-purple-300 mt-2 text-sm">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;