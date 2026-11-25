// Vite 下没有 require()，用 import.meta.glob 建立静态资源映射表
// 用法: asset('images/main/background.jpg') -> 构建后的资源 URL
const modules = import.meta.glob(
  '../assets/**/*.{png,jpg,jpeg,webp,gif,svg,mp4,wav}',
  { eager: true, import: 'default' }
);

export function asset(relativePath) {
  const key = `../assets/${relativePath}`;
  if (!modules[key]) {
    // 便于迁移期排查遗漏的资源引用
    console.warn(`[asset] 资源未找到: ${relativePath}`);
    return '';
  }
  return modules[key];
}
