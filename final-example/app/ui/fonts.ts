// 从 'next/font/google' 模块中导入 Inter 和 Lusitana 字体组件。
// 这些是 Next.js 提供的用于从 Google Fonts 加载字体的实用函数。
// 它们允许你以模块化的方式在项目中使用 Google Fonts。
import { Inter, Lusitana } from 'next/font/google';

// 使用 Inter 函数创建一个名为 inter 的字体配置对象。
// Inter 是一个函数，它接受一个配置对象作为参数。
// 这里我们指定 'latin' 作为字体的子集，以减少加载时间和文件大小。
export const inter = Inter({ subsets: ['latin'] });

// 使用 Lusitana 函数创建一个名为 lusitana 的字体配置对象。
// Lusitana 是另一个字体函数，用于配置和加载 Lusitana 字体。
// 这里我们指定了两个字体权重 '400' 和 '700'，并指定 'latin' 子集。
// 这意味着我们将加载这两种权重的 Lusitana 字体，用于支持拉丁字符集。
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
