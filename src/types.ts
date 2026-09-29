export type Language = 'en' | 'zh' | 'ja';

export type ThemeMode = 'auto' | 'dark' | 'light';

export type PluginCategory =
  | 'all'
  | 'core'
  | 'deband'
  | 'denoise'
  | 'spatial'
  | 'temporal'
  | 'deinterlace'
  | 'motion'
  | 'source'
  | 'mask'
  | 'utility'
  | 'bridge';

export interface LocalizedString {
  en: string;
  zh: string;
  ja: string;
}

export interface LocalizedList {
  en: string[];
  zh: string[];
  ja: string[];
}

export interface PluginItem {
  id: string;
  name: string;
  category: PluginCategory;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  deprecationNotice?: LocalizedString;
  status: 'active' | 'upcoming' | 'classic' | 'legendary';
  isNeo?: boolean;
  isPrivate?: boolean;
  repoUrl?: string;
  version?: string;
  simd: string[];
  bitDepth: string;
  codeSnippet?: string;
  successorOf?: string;
  successorTo?: string;
  tags: string[];
  pipelineQuarter?: string;
  starsCount?: number;
  highlightSpecs?: { label: LocalizedString; value: string }[];
}

export interface TopologyNode {
  id: string;
  label: string;
  shortLabel?: string;
  subtitle: LocalizedString;
  group: 'core' | 'submodule' | 'bridge' | 'neo' | 'upcoming' | 'classic' | 'io';
  x: number;
  y: number;
  radius: number;
  status: 'stable' | 'active' | 'pipeline' | 'legacy';
  description: LocalizedString;
  repoUrl?: string;
  features: LocalizedList;
  simdSupport?: string;
  parentIds: string[];
  childIds: string[];
  iconName?: string;
}

export interface TopologyEdge {
  id: string;
  source: string;
  target: string;
  type: 'core-to-bridge' | 'bridge-to-neo' | 'core-to-neo' | 'modernizes' | 'media-io' | 'pipeline';
  label?: LocalizedString;
  animated?: boolean;
}
