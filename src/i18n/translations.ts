import { Language } from '../types';

export const translations = {
  nav: {
    brandSubtitle: {
      en: 'High-Performance Video Synthesis & Filtering Engine',
      zh: '高性能视频合成与滤镜引擎',
      ja: '高性能映像合成＆フィルタエンジン',
    },
    ecosystem: {
      en: 'Ecosystem',
      zh: '生态全景',
      ja: 'エコシステム',
    },
    topology: {
      en: 'Architecture Topology',
      zh: '架构拓扑图',
      ja: 'アーキテクチャ関係図',
    },
    coreEcosystem: {
      en: 'Rebuilt Core',
      zh: '全新重建内核生态',
      ja: '再構築コア基盤',
    },
    neoSeries: {
      en: 'Rebuilt Plugins',
      zh: '全新重建插件生态',
      ja: '再構築プラグイン基盤',
    },
    classicPlugins: {
      en: 'Mature Plugins',
      zh: '成熟插件列表',
      ja: '成熟プラグイン一覧',
    },
    githubOrg: {
      en: 'GitHub Org',
      zh: '组织主页',
      ja: 'GitHub組織',
    },
  },
  hero: {
    badge: {
      en: 'HOME OF AVISYNTH+ EVOLUTION',
      zh: 'HOME OF AVISYNTH+ EVOLUTION',
      ja: 'HOME OF AVISYNTH+ EVOLUTION',
    },
    titlePrefix: {
      en: 'High-Performance',
      zh: '高性能',
      ja: '高性能',
    },
    titleHighlight: {
      en: 'Video Processing & Filtering Engine',
      zh: '视频处理与滤镜引擎',
      ja: '映像処理＆フィルタエンジン',
    },
    description: {
      en: 'The modern AviSynth+ evolution: microkernel frameserver, decoupled compute subsystems, and next-gen filter pipelines.',
      zh: 'AviSynth+ 现代化演进工程：微内核调度底座、独立解耦算子群与新一代滤镜体系。',
      ja: 'AviSynth+ 近代化プロジェクト：分離型マイクロカーネル、独立演算サブシステム、そして次世代フィルタ体系。',
    },
    exploreTopology: {
      en: 'Architecture Topology',
      zh: '架构拓扑图',
      ja: 'アーキテクチャ関係図',
    },
    viewNeoPipeline: {
      en: 'Rebuilt Plugin Ecosystem',
      zh: '全新重建插件生态',
      ja: '再構築プラグイン基盤',
    },
    stats: {
      standard: {
        tag: 'STANDARD',
        value: 'Modern C++',
        label: {
          en: 'C++17 Base & Type Safety',
          zh: 'C++17 纯净跨架构基准',
          ja: 'C++17標準アーキテクチャ',
        },
      },
      platform: {
        tag: 'CROSS PLATFORM',
        value: 'Win / Linux / Mac',
        label: {
          en: 'x86_64 & ARM64 Native',
          zh: 'x86_64 与 ARM64 双架构原生',
          ja: 'x86_64＆ARM64 ネイティブ',
        },
      },
      precision: {
        tag: 'DATA TYPE',
        value: '8-16b / Float32',
        label: {
          en: 'Integer & 32-bit Float',
          zh: '原生整型与单精度浮点',
          ja: '整数＆単精度浮動小数点',
        },
      },
      simd: {
        tag: 'UNIFIED SIMD',
        value: 'Highway SIMD',
        label: {
          en: 'SSE4.1 / AVX2 / AVX-512 / Neon',
          zh: 'SSE4.1 / AVX2 / AVX-512 / Neon',
          ja: 'SSE4.1 / AVX2 / AVX-512 / Neon',
        },
      },
    },
  },
  topology: {
    title: {
      en: 'Project Hierarchy & Relationship Topology',
      zh: '项目依赖层级与关系拓扑图',
      ja: 'プロジェクト依存関係＆関係トポロジー',
    },
    subtitle: {
      en: 'Interactive node graph demonstrating how the Evolution Core, DualSynth bridge, submodules, and upcoming filter pipelines interconnect.',
      zh: '交互式可视化图谱：展示微内核底座、子模块群、内部适配层与未公开插件研发管线之间的架构关系。',
      ja: 'マイクロカーネル、サブモジュール、内部適合層、未公開開発パイプラインのアーキテクチャ関係図。',
    },
    instructions: {
      en: 'Click on any node to inspect detailed architecture, dependencies, child modules, and code usage.',
      zh: '点击任意节点，查看该模块的架构归属、父子工程关系、SIMD特性及调用代码。',
      ja: '各ノードをクリックすると、所属アーキテクチャ、親子関係、SIMD仕様、コード例が確認できます。',
    },
    legend: {
      core: {
        en: 'Evolution Core & Runtime',
        zh: '核心引擎与运行时',
        ja: 'コアエンジン＆ランタイム',
      },
      bridge: {
        en: 'DualSynth & Interop Bridge',
        zh: 'DualSynth 双引擎桥接层',
        ja: 'DualSynth 双方向ブリッジ',
      },
      neo: {
        en: 'Neo-Series (Modern SIMD)',
        zh: 'Neo 系列 (现代化重构)',
        ja: 'Neoシリーズ (近代的SIMD)',
      },
      upcoming: {
        en: 'Upcoming Private Pipeline',
        zh: '筹备中私有仓 (即将公开)',
        ja: '準備中・未公開プロジェクト',
      },
      classic: {
        en: 'Classic Filter Lineage',
        zh: '成熟旧版/祖传滤镜脉络',
        ja: '成熟クラシック系譜',
      },
      io: {
        en: 'Media Demuxer & HW Decode',
        zh: '多媒体解析与硬件解码',
        ja: 'メディア解析＆HWデコード',
      },
    },
    controls: {
      resetView: {
        en: 'Reset View',
        zh: '重置视角',
        ja: '視点リセット',
      },
      filterAll: {
        en: 'All Nodes',
        zh: '全部节点',
        ja: '全ノード',
      },
      filterCore: {
        en: 'Core Architecture',
        zh: '核心层',
        ja: 'コア層',
      },
      filterNeo: {
        en: 'Neo Cluster',
        zh: 'Neo 族群',
        ja: 'Neo群',
      },
      filterClassic: {
        en: 'Classic Lineage',
        zh: '经典脉络',
        ja: 'クラシック系譜',
      },
      placeholderCount: {
        en: 'Upcoming Slots:',
        zh: '未公开项目占位数：',
        ja: '未公開プロジェクト枠：',
      },
      slotsNotice: {
        en: 'Adjust placeholder count (4 to 6) to model stealth project capacity.',
        zh: '调节占位符数量（4 至 6 个），动态模拟私有研发管线规模。',
        ja: 'プレースホルダー数（4〜6枠）を変更し、秘密裏のパイプライン規模をシミュレートできます。',
      },
    },
    inspector: {
      selectPrompt: {
        en: 'Select any node in the topology canvas to inspect technical telemetry.',
        zh: '在拓扑画布中点击任一节点，查看实时技术遥测数据与关联关系。',
        ja: 'トポロジー上のノードを選択して、詳細スペックと関連関係を確認できます。',
      },
      projectType: {
        en: 'Module Classification',
        zh: '模块类型',
        ja: 'モジュール分類',
      },
      status: {
        en: 'Deployment Status',
        zh: '发布状态',
        ja: 'デプロイ状態',
      },
      parents: {
        en: 'Parent Project / Base Runtime',
        zh: '父级项目 / 底层基座',
        ja: '親プロジェクト / 基底基盤',
      },
      children: {
        en: 'Child Sub-Projects & Implementations',
        zh: '派生子项目与下游组件',
        ja: '派生サブプロジェクト＆子コンポーネント',
      },
      simd: {
        en: 'Target Instruction Sets',
        zh: '适配指令集 / 硬件',
        ja: '対象命令セット / ハードウェア',
      },
      features: {
        en: 'Architectural Innovations',
        zh: '核心技术创新',
        ja: '主な技術革新',
      },
      openRepo: {
        en: 'Open GitHub Repository',
        zh: '前往 GitHub 仓库',
        ja: 'GitHubリポジトリへ',
      },
      privateBadge: {
        en: 'CONFIDENTIAL PIPELINE // PRIVATE REPO',
        zh: '保密研发管线 // 私有仓库',
        ja: '社内機密パイプライン // 非公開リポ',
      },
      publicBadge: {
        en: 'OFFICIAL REPO // ACTIVE',
        zh: '官方公开仓库 // 活跃演进',
        ja: '公式公開リポジトリ // 活発更新中',
      },
    },
  },
  coreEcosystem: {
    title: {
      en: 'Rebuilt Core Ecosystem',
      zh: '全新重建的内核生态',
      ja: '再構築されたコアエコシステム',
    },
    subtitle: {
      en: 'Decoupled frameserver microkernel and standalone compute subsystems engineered for pure C++17 type safety and Highway SIMD acceleration.',
      zh: '解耦架构的微内核帧服务器与独立纯计算子系统群，全面基于 C++17 现代标准与 Google Highway 跨平台统一向量化。',
      ja: 'C++17およびGoogle Highway SIMDに基づいて設計された分離型マイクロカーネルと独立演算サブシステム群。',
    },
    subsystemTag: {
      en: 'Decoupled Subsystem',
      zh: '独立解耦子模块',
      ja: '独立分離モジュール',
    },
    microkernelTag: {
      en: 'Microkernel Frameserver',
      zh: '解耦微内核底座',
      ja: '分離型マイクロカーネル',
    },
    bridgeTag: {
      en: 'Embedded Engine',
      zh: '嵌入式脚本引擎',
      ja: '組込みスクリプト',
    },
  },
  neo: {
    title: {
      en: 'Rebuilt Plugin Ecosystem',
      zh: '全新重建的插件生态',
      ja: '再構築されたプラグインエコシステム',
    },
    subtitle: {
      en: 'Next-generation filter suites independently rebuilt with DualSynth2, currently in development.',
      zh: '基于 DualSynth2 内部底座独立重建的 4 套下一代核心滤镜套件，目前仍在开发中。',
      ja: 'DualSynth2内部基盤に基づき独立再構築された4つの次世代コアフィルタ群。現在開発中。',
    },
    pipelineBadge: {
      en: 'In Development',
      zh: '开发中',
      ja: '開発中',
    },
    slotTag: {
      en: 'Unpublished Slot',
      zh: '未公开占位',
      ja: '未公開枠',
    },
  },
  classic: {
    title: {
      en: 'Mature Plugin Catalog',
      zh: '成熟的插件列表',
      ja: '成熟プラグイン一覧',
    },
    subtitle: {
      en: 'Established open-source filter suite and media demuxer tools maintained by the organization, ordered by ecosystem adoption.',
      zh: '组织旗下已发布的成熟开源滤镜与媒体解复用工具，按生态流行度排列，支持高位深与跨架构向量化。',
      ja: '組織が保守する公開済み成熟フィルタおよびメディアリーダー。エコシステムの普及度順に掲載。',
    },
    bitDepthLabel: {
      en: 'Bit Depth',
      zh: '色彩位深',
      ja: 'ビット深度',
    },
    simdLabel: {
      en: 'Acceleration',
      zh: '加速指令',
      ja: '高速化命令',
    },
  },
  theme: {
    auto: { en: 'Auto System', zh: '跟随系统', ja: '自動（システム）' },
    dark: { en: 'Cyber Dark', zh: '高科技深色', ja: 'サイバーダーク' },
    light: { en: 'Clean Light', zh: '高精明亮', ja: 'クリーンライト' },
  },
  footer: {
    orgDesc: {
      en: 'HomeOfAviSynthPlusEvolution is an open community initiative dedicated to engineering high-performance, modern video synthesis tools, runtimes, and filter ecosystems.',
      zh: 'HomeOfAviSynthPlusEvolution 是一个专注于研发高性能现代视频合成架构、运行时及滤镜生态的开源组织。',
      ja: 'HomeOfAviSynthPlusEvolution は、次世代ハイパフォーマンス映像合成基盤および近代プラグイン開発を推進するコミュニティ組織です。',
    },
  },
};

export function getTranslation<T>(obj: Record<Language, T>, lang: Language): T {
  return obj[lang] || obj['en'];
}
