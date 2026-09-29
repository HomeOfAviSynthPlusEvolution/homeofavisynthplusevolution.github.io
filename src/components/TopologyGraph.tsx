import { useState, useMemo } from 'react';
import { Language, TopologyNode } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { 
  TOPOLOGY_NODES, 
  TOPOLOGY_EDGES 
} from '../data/ecosystemData';
import { Network } from 'lucide-react';

interface TopologyGraphProps {
  currentLang: Language;
  effectiveTheme: 'dark' | 'light';
}

export default function TopologyGraph({
  currentLang,
  effectiveTheme,
}: TopologyGraphProps) {
  const isDark = effectiveTheme === 'dark';
  const t = translations.topology;

  // Hovered node state for visual connection highlight only (no popup drawer)
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNodes = TOPOLOGY_NODES;

  const activeNodeIds = useMemo(() => new Set(activeNodes.map((n) => n.id)), [activeNodes]);

  // Filter edges based on active nodes
  const activeEdges = useMemo(() => {
    return TOPOLOGY_EDGES.filter(
      (edge) => activeNodeIds.has(edge.source) && activeNodeIds.has(edge.target)
    );
  }, [activeNodeIds]);

  // Determine connected nodes for lightweight hover highlight
  const connectedNodeIds = useMemo(() => {
    if (!hoveredNodeId) return new Set<string>();
    const connected = new Set<string>([hoveredNodeId]);
    activeEdges.forEach((edge) => {
      if (edge.source === hoveredNodeId) connected.add(edge.target);
      if (edge.target === hoveredNodeId) connected.add(edge.source);
    });
    return connected;
  }, [hoveredNodeId, activeEdges]);

  // Node dimensions for clean rounded rectangles
  const getNodeDimensions = (node: TopologyNode) => {
    if (node.id === 'core_avs_minus') {
      return { w: 200, h: 54, rx: 8 };
    }
    if (node.id === 'core_avs_plus') {
      return { w: 210, h: 54, rx: 8 };
    }
    if (node.id === 'bridge_dualsynth2') {
      return { w: 220, h: 50, rx: 8 };
    }
    if (node.id === 'bridge_garnet') {
      return { w: 200, h: 50, rx: 8 };
    }
    if (node.group === 'submodule') {
      return { w: 180, h: 42, rx: 6 };
    }
    if (node.group === 'upcoming') {
      return { w: 80, h: 80, rx: 12 };
    }
    if (node.group === 'classic') {
      return { w: 136, h: 46, rx: 8 };
    }
    return { w: 138, h: 48, rx: 8 };
  };

  // Node color helpers with calm, professional palette
  const getNodeColor = (node: TopologyNode) => {
    if (node.id === 'core_avs_plus') {
      return {
        fill: isDark ? '#1e293b' : '#f1f5f9',
        stroke: isDark ? '#64748b' : '#94a3b8',
        text: isDark ? '#cbd5e1' : '#475569',
      };
    }
    switch (node.group) {
      case 'submodule':
        return {
          fill: isDark ? '#082f49' : '#f0f9ff',
          stroke: isDark ? '#0ea5e9' : '#0284c7',
          text: isDark ? '#e0f2fe' : '#0369a1',
        };
      case 'core':
        return {
          fill: isDark ? '#0f172a' : '#f0f9ff',
          stroke: isDark ? '#38bdf8' : '#0284c7',
          text: isDark ? '#e0f2fe' : '#0369a1',
        };
      case 'bridge':
        return {
          fill: isDark ? '#1e1b4b' : '#f5f3ff',
          stroke: isDark ? '#818cf8' : '#4f46e5',
          text: isDark ? '#ede9fe' : '#4338ca',
        };
      case 'neo':
        return {
          fill: isDark ? '#042f2e' : '#f0fdfa',
          stroke: isDark ? '#2dd4bf' : '#0d9488',
          text: isDark ? '#ccfbf1' : '#0f766e',
        };
      case 'upcoming':
        return {
          fill: isDark ? '#18181b' : '#f4f4f5',
          stroke: isDark ? '#71717a' : '#a1a1aa',
          text: isDark ? '#e4e4e7' : '#27272a',
        };
      case 'classic':
        return {
          fill: isDark ? '#1e293b' : '#f8fafc',
          stroke: isDark ? '#64748b' : '#94a3b8',
          text: isDark ? '#cbd5e1' : '#475569',
        };
      case 'io':
        return {
          fill: isDark ? '#172554' : '#eff6ff',
          stroke: isDark ? '#60a5fa' : '#2563eb',
          text: isDark ? '#bfdbfe' : '#1e40af',
        };
      default:
        return {
          fill: isDark ? '#1e293b' : '#f1f5f9',
          stroke: '#64748b',
          text: '#94a3b8',
        };
    }
  };

  // Edge curve calculation between rounded rectangles
  const getEdgeEndpoints = (sourceNode: TopologyNode, targetNode: TopologyNode) => {
    const sDim = getNodeDimensions(sourceNode);
    const tDim = getNodeDimensions(targetNode);

    // 1. Submodules (left column) to AviSynthMinus (left edge)
    if (sourceNode.group === 'submodule' && targetNode.id === 'core_avs_minus') {
      const x1 = sourceNode.x + sDim.w / 2;
      const y1 = sourceNode.y;
      const x2 = targetNode.x - tDim.w / 2;
      const y2 = targetNode.y;
      if (Math.abs(y1 - y2) < 2) {
        return { path: `M ${x1} ${y1} L ${x2} ${y2}` };
      }
      return { path: `M ${x1} ${y1} C ${x1 + 60} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}` };
    }

    // 2. DS2 bottom center fan-out to 4 upcoming slots
    if (sourceNode.id === 'bridge_dualsynth2' && targetNode.group === 'upcoming') {
      const x1 = sourceNode.x;
      const y1 = sourceNode.y + sDim.h / 2;
      const x2 = targetNode.x;
      const y2 = targetNode.y - tDim.h / 2;
      const midY = (y1 + y2) / 2;
      return { path: `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}` };
    }

    // 3. Garnet bottom center straight down to slot 5
    if (sourceNode.id === 'bridge_garnet' && targetNode.group === 'upcoming') {
      const x1 = sourceNode.x;
      const y1 = sourceNode.y + sDim.h / 2;
      const x2 = targetNode.x;
      const y2 = targetNode.y - tDim.h / 2;
      return { path: `M ${x1} ${y1} L ${x2} ${y2}` };
    }

    // 4. Foundations (Minus/Plus) to Glue (DS2/Garnet)
    if ((sourceNode.id === 'core_avs_minus' || sourceNode.id === 'core_avs_plus') &&
        (targetNode.id === 'bridge_dualsynth2' || targetNode.id === 'bridge_garnet')) {
      const x1 = sourceNode.x + (targetNode.x > sourceNode.x ? 25 : -25);
      const y1 = sourceNode.y + sDim.h / 2;
      const x2 = targetNode.x + (sourceNode.x > targetNode.x ? 25 : -25);
      const y2 = targetNode.y - tDim.h / 2;
      const midY = (y1 + y2) / 2;
      return { path: `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}` };
    }

    const dy = targetNode.y - sourceNode.y;
    const dx = targetNode.x - sourceNode.x;

    let x1 = sourceNode.x;
    let y1 = sourceNode.y;
    let x2 = targetNode.x;
    let y2 = targetNode.y;

    if (Math.abs(dy) >= 35) {
      if (dy > 0) {
        // Target is below
        y1 = sourceNode.y + sDim.h / 2;
        y2 = targetNode.y - tDim.h / 2;
      } else {
        // Target is above
        y1 = sourceNode.y - sDim.h / 2;
        y2 = targetNode.y + tDim.h / 2;
      }
      const midY = (y1 + y2) / 2;
      return {
        path: `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`,
      };
    } else {
      // Horizontal or near-horizontal
      if (dx > 0) {
        x1 = sourceNode.x + sDim.w / 2;
        x2 = targetNode.x - tDim.w / 2;
      } else {
        x1 = sourceNode.x - sDim.w / 2;
        x2 = targetNode.x + tDim.w / 2;
      }
      const midX = (x1 + x2) / 2;
      return {
        path: `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`,
      };
    }
  };

  return (
    <section 
      id="topology" 
      className={`py-14 border-t transition-colors ${
        isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pipeline Slot Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
              <Network className="w-4 h-4" />
              <span>Component hierarchy and lineage</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {getTranslation(t.title, currentLang)}
            </h2>
          </div>
        </div>

        {/* Full-Width Topology Diagram Canvas */}
        <div className="mt-6">
          <div 
            id="topology-canvas-container"
            className={`w-full rounded-2xl border overflow-hidden shadow-sm relative transition-all ${
              isDark 
                ? 'bg-slate-950/80 border-slate-800/80' 
                : 'bg-slate-50/80 border-slate-200'
            }`}
          >
            {/* SVG Visual Stage */}
            <div className="w-full flex items-center justify-center p-2 sm:p-4 overflow-x-auto">
              <svg
                id="topology-svg-graph"
                viewBox="20 15 910 480"
                className="w-full h-auto select-none"
                style={{
                  minWidth: '680px',
                  maxHeight: '560px',
                }}
              >
                {/* SVG Definitions */}
                <defs>
                  <linearGradient id="edge-core-bridge" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? '#38bdf8' : '#0284c7'} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={isDark ? '#818cf8' : '#4f46e5'} stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="edge-bridge-neo" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? '#818cf8' : '#4f46e5'} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={isDark ? '#2dd4bf' : '#0d9488'} stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="edge-bridge-upcoming" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? '#818cf8' : '#4f46e5'} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={isDark ? '#71717a' : '#a1a1aa'} stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="edge-classic-neo" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? '#64748b' : '#94a3b8'} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={isDark ? '#2dd4bf' : '#0d9488'} stopOpacity="0.8" />
                  </linearGradient>
                  <marker
                    id="arrow-head"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={isDark ? '#64748b' : '#94a3b8'} />
                  </marker>
                </defs>

                {/* Subtle Grid Backdrop */}
                <g opacity={isDark ? "0.08" : "0.04"}>
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="40"
                      y1={40 + i * 40}
                      x2="960"
                      y2={40 + i * 40}
                      stroke={isDark ? "#38bdf8" : "#0284c7"}
                      strokeDasharray="2 4"
                    />
                  ))}
                  {Array.from({ length: 23 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1="40 + i * 40"
                      y1="40"
                      x2="40 + i * 40"
                      y2="520"
                      stroke={isDark ? "#38bdf8" : "#0284c7"}
                      strokeDasharray="2 4"
                    />
                  ))}
                </g>

                {/* Connection Edges */}
                <g id="edges-layer">
                  {activeEdges.map((edge) => {
                    const sourceNode = activeNodes.find((n) => n.id === edge.source);
                    const targetNode = activeNodes.find((n) => n.id === edge.target);
                    if (!sourceNode || !targetNode) return null;

                    const isHighlighted =
                      hoveredNodeId === edge.source || hoveredNodeId === edge.target;

                    let strokeColor = isDark ? '#334155' : '#cbd5e1';
                    if (edge.type === 'core-to-bridge') strokeColor = 'url(#edge-core-bridge)';
                    if (edge.type === 'bridge-to-neo') strokeColor = 'url(#edge-bridge-neo)';
                    if (edge.type === 'pipeline') strokeColor = 'url(#edge-bridge-upcoming)';
                    if (edge.type === 'modernizes') strokeColor = 'url(#edge-classic-neo)';

                    const { path } = getEdgeEndpoints(sourceNode, targetNode);

                    return (
                      <g key={edge.id} className="transition-opacity duration-200">
                        {isHighlighted && (
                          <path
                            d={path}
                            fill="none"
                            stroke={isDark ? '#38bdf8' : '#0284c7'}
                            strokeWidth="3.5"
                            strokeOpacity="0.3"
                          />
                        )}
                        <path
                          d={path}
                          fill="none"
                          stroke={strokeColor}
                          strokeWidth={isHighlighted ? 2.2 : 1.3}
                          strokeDasharray={edge.type === 'pipeline' ? '4 3' : undefined}
                          markerEnd="url(#arrow-head)"
                          opacity={hoveredNodeId ? (isHighlighted ? 1 : 0.25) : 0.65}
                        />
                      </g>
                    );
                  })}
                </g>

                {/* Nodes Layer: Rounded Rectangles */}
                <g id="nodes-layer">
                  {activeNodes.map((node) => {
                    const isHovered = hoveredNodeId === node.id;
                    const isConnected = connectedNodeIds.has(node.id);
                    const colors = getNodeColor(node);
                    const dim = getNodeDimensions(node);
                    const isDimmed = hoveredNodeId !== null && !isHovered && !isConnected;

                    return (
                      <g
                        key={node.id}
                        id={`topology-node-${node.id}`}
                        transform={`translate(${node.x}, ${node.y})`}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        className={`transition-all duration-200 ${
                          node.repoUrl ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        style={{ opacity: isDimmed ? 0.35 : 1 }}
                        onClick={() => {
                          if (node.repoUrl) {
                            window.open(node.repoUrl, '_blank', 'noopener,noreferrer');
                          }
                        }}
                      >
                        {/* Upcoming Project Slot: Dashed Rounded Rectangle with centered ? */}
                        {node.group === 'upcoming' ? (
                          <g>
                            {/* Card Background */}
                            <rect
                              x={-dim.w / 2}
                              y={-dim.h / 2}
                              width={dim.w}
                              height={dim.h}
                              rx={dim.rx}
                              fill={colors.fill}
                              stroke={colors.stroke}
                              strokeWidth={isHovered ? 2 : 1.5}
                              strokeDasharray="4 3"
                              className="transition-all duration-200"
                            />

                            {/* Centered Question Mark */}
                            <text
                              textAnchor="middle"
                              dy="8"
                              fontSize="38"
                              fontFamily="JetBrains Mono, monospace"
                              fontWeight="900"
                              fill={colors.text}
                              className="pointer-events-none select-none"
                            >
                              ?
                            </text>

                            {/* Slot Tag */}
                            <text
                              textAnchor="middle"
                              dy="27"
                              fontSize="11"
                              fontFamily="Inter, sans-serif"
                              fontWeight="500"
                              fill={isDark ? '#94a3b8' : '#64748b'}
                              className="pointer-events-none select-none"
                            >
                              {getTranslation(node.subtitle, currentLang)}
                            </text>
                          </g>
                        ) : (
                          /* Standard Rounded Rectangle Card Node */
                          <g>
                            {/* Card Background */}
                            <rect
                              x={-dim.w / 2}
                              y={-dim.h / 2}
                              width={dim.w}
                              height={dim.h}
                              rx={dim.rx}
                              fill={colors.fill}
                              stroke={colors.stroke}
                              strokeWidth={isHovered ? 2 : node.id === 'core_avs_plus' ? 1.5 : 1.2}
                              strokeDasharray={node.id === 'core_avs_plus' ? '5 4' : undefined}
                              className="transition-all duration-200"
                            />

                            {/* Status Accent Dot */}
                            {node.id !== 'core_avs_plus' && (
                              <circle
                                cx={dim.w / 2 - 10}
                                cy={-dim.h / 2 + 10}
                                r="3"
                                fill={
                                  node.status === 'stable'
                                    ? '#10b981'
                                    : node.status === 'legacy'
                                    ? '#64748b'
                                    : isDark ? '#38bdf8' : '#0284c7'
                                }
                                className="pointer-events-none"
                              />
                            )}

                            {/* Node Title */}
                            <text
                              textAnchor="middle"
                              dy={node.group === 'submodule' ? "-3" : dim.h > 48 ? "-4" : "-3"}
                              fontSize={node.group === 'submodule' ? "10.5" : dim.w > 190 ? "13.5" : "12"}
                              fontFamily="JetBrains Mono, monospace"
                              fontWeight="600"
                              fill={colors.text}
                              className="pointer-events-none select-none"
                            >
                              {node.shortLabel || node.label}
                            </text>

                            {/* Subtitle / Description tag */}
                            <text
                              textAnchor="middle"
                              dy={node.group === 'submodule' ? "11" : dim.h > 48 ? "14" : "12"}
                              fontSize="11"
                              fontFamily="Inter, sans-serif"
                              fontWeight="400"
                              fill={isDark ? '#94a3b8' : '#64748b'}
                              className="pointer-events-none select-none"
                            >
                              {getTranslation(node.subtitle, currentLang)}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
