import React, { useState } from 'react';
import { Database, Terminal, BarChart3, Cloud, Cpu, Sparkles, Sliders } from 'lucide-react';
import { skillCategories, skillHeatmap } from '../data';

export default function Skills() {
  const [hoveredCell, setHoveredCell] = useState<{ rowIdx: number; colIdx: number } | null>(null);

  // Helper to retrieve Lucide icons dynamically for skill categories
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'BI & Visualization':
        return <BarChart3 className="w-5 h-5 text-indigo-600" />;
      case 'Data & Databases':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'Programming':
        return <Terminal className="w-5 h-5 text-pink-600" />;
      case 'AI / ML':
        return <Cpu className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  // Explanatory tooltips for specific cells
  const getHeatmapDetails = (rowIdx: number, colIdx: number) => {
    const categories = skillHeatmap.categories;
    const dimensions = skillHeatmap.dimensions;
    const value = skillHeatmap.matrix[rowIdx][colIdx];
    
    let levelText = '';
    if (value === 1) levelText = 'Novice (Academic Theory)';
    else if (value === 2) levelText = 'Intermediate (Hands-on Practice)';
    else if (value === 3) levelText = 'Advanced (Project Scale)';
    else if (value === 4) levelText = 'Expert (Production Ready)';
    else levelText = 'Basic exposure';

    return {
      category: categories[rowIdx],
      dimension: dimensions[colIdx],
      level: levelText,
      value: value
    };
  };

  return (
    <section id="skills" className="py-20 bg-[#FAF9FC] text-left border-b border-indigo-100">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-indigo-100 pb-8">
          <span className="font-mono text-[10px] font-bold text-indigo-600 tracking-widest uppercase mb-3 block">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-none">
            Proficiency Metrics
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-3 max-w-2xl leading-relaxed">
            Bridging the gap between structured database warehousing, diagnostic business analytics, and applied AI workflows.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Skill Bars Column */}
          <div className="lg:col-span-6 space-y-6 bg-white p-6 rounded-none border border-indigo-100 shadow-[6px_6px_0px_rgba(79,70,229,0.1)]">
            <h3 className="font-serif text-xl font-bold italic text-indigo-950 mb-6 flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-indigo-600" />
              <span>Core Competency Metrology</span>
            </h3>
            
            <div className="space-y-6">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2.5">
                      {getCategoryIcon(cat.name)}
                      <span className="font-sans text-sm font-bold text-indigo-950 uppercase tracking-wider">
                        {cat.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-indigo-700 border border-indigo-200 px-1.5 py-0.5 bg-indigo-50/50">
                      {cat.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar Track */}
                  <div className="h-3 w-full bg-indigo-50/30 border border-indigo-100 rounded-none overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 transition-all duration-1000"
                      style={{ width: `${cat.level}%` }}
                    />
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[9px] bg-white text-indigo-950 border border-indigo-100 px-2 py-0.5 font-bold uppercase tracking-wider rounded-sm shadow-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Skill Heatmap Column */}
          <div className="lg:col-span-6 flex flex-col h-full justify-between bg-white border border-indigo-100 p-6 rounded-none shadow-[6px_6px_0px_rgba(79,70,229,0.1)]">
            <div>
              <div className="flex justify-between items-center mb-1 pb-2 border-b border-indigo-100">
                <h3 className="font-mono text-[10px] font-bold text-indigo-950 uppercase tracking-widest">
                  SKILL DEPTH HEATMAP (L1 - L4)
                </h3>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wide">
                  Hover cells to view
                </span>
              </div>
              
              <div className="flex justify-between font-mono text-[9px] text-indigo-500 my-4 uppercase tracking-wider font-bold">
                <span>L1 &bull; NOVICE</span>
                <span>L4 &bull; EXPERT</span>
              </div>

              {/* Heatmap Grid */}
              <div className="space-y-3">
                {skillHeatmap.categories.map((categoryName, rowIdx) => (
                  <div key={categoryName} className="grid grid-cols-5 gap-2 items-center">
                    {/* Category Label */}
                    <div className="col-span-1 font-mono text-[11px] font-bold text-neutral-700 uppercase tracking-wider leading-none">
                      {categoryName}
                    </div>

                    {/* Heatmap block cells */}
                    {[0, 1, 2, 3].map((colIdx) => {
                      const strength = skillHeatmap.matrix[rowIdx][colIdx];
                      
                      // Opacity mappings based on strength metrics - Colorful Heatmap!
                      let bgStyle = 'bg-neutral-50 text-neutral-400 border border-dashed border-neutral-200'; // empty/0
                      if (strength === 1) bgStyle = 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-150';
                      else if (strength === 2) bgStyle = 'bg-indigo-200 hover:bg-indigo-300 text-indigo-900 border border-indigo-300';
                      else if (strength === 3) bgStyle = 'bg-indigo-500 hover:bg-indigo-600 text-white border border-indigo-600';
                      else if (strength === 4) bgStyle = 'bg-gradient-to-br from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 text-white border border-indigo-800';

                      return (
                        <div
                          key={colIdx}
                          onMouseEnter={() => setHoveredCell({ rowIdx, colIdx })}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`h-9 ${bgStyle} rounded-none cursor-crosshair transition-all duration-200 relative flex items-center justify-center`}
                        >
                          <span className="font-mono text-[10px] font-bold select-none">
                            {strength > 0 ? `L${strength}` : '-'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Dimension column legends */}
              <div className="grid grid-cols-5 gap-2 mt-4 pt-3 border-t border-indigo-100">
                <div className="col-span-1"></div>
                {skillHeatmap.dimensions.slice(0, 4).map((dim, idx) => (
                  <div key={idx} className="font-mono text-[8px] text-neutral-500 text-center uppercase tracking-wider font-bold leading-none truncate">
                    {dim}
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap Interactive details panel */}
            <div className="mt-8 p-4 bg-indigo-50/30 border border-indigo-100/80 rounded-none min-h-[76px] flex flex-col justify-center">
              {hoveredCell ? (
                (() => {
                  const info = getHeatmapDetails(hoveredCell.rowIdx, hoveredCell.colIdx);
                  return (
                    <div className="animate-in fade-in duration-150">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] text-indigo-950 font-bold uppercase tracking-widest">
                          {info.category} &bull; {info.dimension}
                        </span>
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 py-0.5 border border-indigo-500 font-mono text-[9px] font-bold uppercase tracking-wider rounded-sm shadow-xs">
                          PROFICIENCY: L{info.value}/4
                        </span>
                      </div>
                      <p className="font-sans text-xs text-neutral-600 mt-2 font-medium">
                        {info.level} verified deployment.
                      </p>
                    </div>
                  );
                })()
              ) : (
                <p className="font-mono text-[10px] text-indigo-500 uppercase tracking-wider font-bold italic text-center">
                  Hover cells above to review quantitative proficiency metrics and exposure indicators.
                </p>
              )}
            </div>

            <p className="font-mono text-[9px] text-neutral-500 mt-4 leading-relaxed uppercase tracking-wider italic text-left">
              *Heatmap represents real-world internship deployments and verified sandbox environments.
            </p>
          </div>

        </div>

        {/* Technical Tools Ribbon Ticker */}
        <div className="border-t border-indigo-100 pt-12">
          <p className="font-mono text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-8 text-center">
            TECHNICAL TOOLS &amp; ECOSYSTEMS UTILIZED
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
            <div className="flex items-center justify-center space-x-2 text-indigo-950 bg-white border border-indigo-100 py-3.5 px-4 rounded-none shadow-[3px_3px_0px_rgba(79,70,229,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(79,70,229,0.25)] transition-all">
              <Database className="w-4 h-4 text-indigo-600" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">SQL Server</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-indigo-950 bg-white border border-indigo-100 py-3.5 px-4 rounded-none shadow-[3px_3px_0px_rgba(79,70,229,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(79,70,229,0.25)] transition-all">
              <Terminal className="w-4 h-4 text-pink-600" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">Jupyter</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-indigo-950 bg-white border border-indigo-100 py-3.5 px-4 rounded-none shadow-[3px_3px_0px_rgba(79,70,229,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(79,70,229,0.25)] transition-all">
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">GA4</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-indigo-950 bg-white border border-indigo-100 py-3.5 px-4 rounded-none shadow-[3px_3px_0px_rgba(79,70,229,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(79,70,229,0.25)] transition-all">
              <Cloud className="w-4 h-4 text-blue-500" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">AWS</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-indigo-950 bg-white border border-indigo-100 py-3.5 px-4 rounded-none shadow-[3px_3px_0px_rgba(79,70,229,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(79,70,229,0.25)] transition-all">
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">Tableau</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-indigo-950 bg-white border border-indigo-100 py-3.5 px-4 rounded-none shadow-[3px_3px_0px_rgba(79,70,229,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(79,70,229,0.25)] transition-all">
              <Database className="w-4 h-4 text-indigo-600" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">Snowflake</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
