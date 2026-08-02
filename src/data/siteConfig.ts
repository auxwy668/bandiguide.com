// ============================================================
// bandiguide.com — Bandicam 班迪录屏中文教程站
// ============================================================
export const siteConfig = {
  // ── 基础信息 ──
  name: '班迪录屏教程',
  title: '班迪录屏 Bandicam 中文教程 — 从入门到精通',
  description: 'Bandicam 班迪录屏官方最新版下载与中文教程。涵盖屏幕录制、游戏录制、4K高清录屏、参数优化、H264/H265设置、帧率调整、音频录制等一站式教程。',
  keywords: '班迪录屏,Bandicam下载,Bandicam教程,Bandicam录制,录屏软件,屏幕录制,游戏录制,班迪录屏设置',
  url: 'https://bandiguide.com',
  language: 'zh-CN',
  author: '班迪录屏教程',
  email: 'contact@bandiguide.com',

  // ── 下载链接 ──
  cpaDownloadUrl: 'https://www.bandicam.cn/screen-recorder',
  cpaDownloadText: '立即下载 Bandicam',

  // ── 更新浮窗 ──
  newsFloat: {
    date: '更新日期：2026-08-02',
    label: 'Bandicam 最新动态',
    items: [
      '1. Bandicam v8.3.1 最新版本发布',
      '2. 支持 H265 硬件加速编码',
      '3. 游戏录制 4K 144FPS 性能优化',
    ],
  },

  // ── Logo 区 ──
  logo: {
    text: '班迪录屏教程',
    img: 'TG.svg',
    imgWidth: 200,
    imgHeight: 25,
  },

  // ── Hero 下载区 ──
  downloadButtons: [
    { img: 'window_img.png', btnSvg: 'down.svg',    onClick: "window.open('https://www.bandicam.cn/screen-recorder')" },
    { img: 'android_img.png', btnSvg: 'down-android.svg', onClick: "window.open('https://www.bandicam.cn/screen-recorder')" },
    { img: 'iphone_img.png',  btnSvg: 'down-iphone.svg',  onClick: "window.open('https://www.bandicam.cn/screen-recorder')" },
  ],

  // ── Features 区（9 个）──
  features: [
    { gif: 'img1.gif', title: '高清录制', desc: '支持 4K UHD 超清分辨率录制，最高 144FPS 高帧率画面，画面清晰不丢帧。' },
    { gif: 'img2.gif', title: '游戏录制', desc: '兼容 DirectX/Vulkan/OpenGL 游戏，低性能消耗，录制不拖慢游戏帧率。' },
    { gif: 'img3.gif', title: 'H265 编码', desc: '支持 H264/H265/AV1 硬件加速编码，文件更小画质更好，节省磁盘空间。' },
    { gif: 'img4.gif', title: '多音轨录制', desc: '同时录制系统声音和麦克风声音，分离输出两条独立音轨，方便后期编辑。' },
    { gif: 'img5.gif', title: '计划录制', desc: '设定开始和结束时间自动录制，不遗漏直播、会议和在线课程。' },
    { gif: 'img6.gif', title: '实时绘图', desc: '录制过程中在画面上画线、画框、加文字标注，适合制作教学视频。' },
    { gif: 'img7.gif', title: '鼠标特效', desc: '显示鼠标点击动画和高亮光标效果，让观众清楚看到每一步操作。' },
    { gif: 'img8.gif', title: '设备录制', desc: '支持摄像头、采集卡、HDMI 设备录制，同时叠加屏幕画面合成画中画。' },
    { gif: 'img9.gif', title: '简单易用', desc: '一键开始录制，中文界面零门槛，比 OBS 上手快 10 倍。' },
  ],

  // ── 内容分类 ──
  categories: [
    { id: 'download', name: '下载安装' },
    { id: 'guide',    name: '入门教程' },
    { id: 'params',   name: '参数优化' },
    { id: 'scenes',   name: '场景实战' },
    { id: 'compare',  name: '对比评测' },
    { id: 'tips',     name: '技巧进阶' },
  ],

  // ── 分类标签映射 ──
  catLabels: {
    download: '下载安装',
    guide: '入门教程',
    params: '参数优化',
    scenes: '场景实战',
    compare: '对比评测',
    tips: '技巧进阶',
  } as Record<string, string>,

  // ── 分类标签调色板 ──
  catTagPalette: [
    { bg: '#e0f2fe', color: '#0369a1' },
    { bg: '#ecfdf5', color: '#065f46' },
    { bg: '#fef3c7', color: '#92400e' },
    { bg: '#f3e8ff', color: '#7c3aed' },
    { bg: '#fce7f3', color: '#be185d' },
    { bg: '#e0f2fe', color: '#0891b2' },
  ],

  // ── 配色方案（橙红色调，录屏录制感）──
  colors: {
    primary: '#E65100',
    primaryHover: '#FF7043',
    bg: '#ffffff',
    bgCard: '#f5f7fa',
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    featTitle: '#E65100',
    btnBorder: '#ffffff',
    border: '#e8ecf1',
  },

  // ── 字体 ──
  fonts: {
    heading: "'Inter', 'Noto Sans SC', system-ui, sans-serif",
    body: "'Inter', 'Noto Sans SC', system-ui, sans-serif",
  },

  // ── 页脚 ──
  footer: {
    notice: '本站为独立教程站点。Bandicam 是 Bandicam Company 的注册商标。所有下载链接指向官方源。',
  },

  // ── 结构化数据 ──
  structuredData: {
    organization: '班迪录屏教程',
    homepageType: 'WebSite' as 'WebSite' | 'Organization',
  },
};
