// 导入全局 CSS 样式表。这是一个常见的做法，以确保应用程序的所有组件共享相同的样式。
// '@/app/ui/global.css' 是一个别名路径，通常在 Next.js 配置中设置，用于指向项目中的特定目录。
import '@/app/ui/global.css';

// 从指定路径导入 `inter` 字体。这通常是一个自定义字体配置，可能包含字体的样式定义。
import { inter } from '@/app/ui/fonts';

// 从 'next' 包中导入 `Metadata` 类型。这在 TypeScript 中用于定义组件的元数据类型。
import { Metadata } from 'next';

// 定义一个名为 `metadata` 的对象，并导出它。这个对象用于配置页面的元数据。
export const metadata: Metadata = {
  // 定义页面的标题模板和默认标题。
  title: {
    // `template` 定义了页面标题的格式，其中 `%s` 将被替换为页面的具体标题。
    template: '%s | Acme Dashboard',
    // `default` 是没有特定标题时使用的默认标题。
    default: 'Acme Dashboard',
  },
  // 定义页面的描述，这对 SEO 和社交分享非常重要。
  description: 'The official Next.js Learn Dashboard built with App Router.',
  // `metadataBase` 是一个 URL 对象，用于指定元数据的基本 URL。这在构建完整的 URL 时很有用。
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

// 定义并导出一个 React 组件 `RootLayout`，它用于包裹应用的所有页面。
export default function RootLayout({ children,}: { children: React.ReactNode;}) {
  return (
    // 返回一个 HTML 结构，其中包含 `html` 和 `body` 元素。
    <html lang="en">
      {/* `lang="en"` 设置页面的语言为英语，这对于 SEO 和无障碍访问很重要。 */}
      {/* `body` 元素的 `className` 属性使用了模板字符串，以动态应用 `inter` 字体的类名。 */}
      {/* `antialiased` 是一个 CSS 类，用于平滑字体显示。 */}
      <body 
        className={`${inter.className} antialiased`}
        style={{ backgroundColor: '#666' }} // 设置暗灰色背景
      >
        {/* `children` 是一个 React 特性，表示该组件包裹的子组件。 */}
        {children}
      </body>
    </html>
  );
}
