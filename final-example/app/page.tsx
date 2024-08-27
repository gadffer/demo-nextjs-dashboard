import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';

// ArrowTriangle 组件用于渲染一个箭头形状
const ArrowTriangle = ({
  width = 15,  // 设置箭头宽度的默认值
  height = 26, // 设置箭头高度的默认值
  color = 'black', // 设置箭头颜色的默认值
}) => {
  // 根据颜色参数选择相应的 Tailwind CSS 类名
  const colorClassMap = {
    black: 'border-b-black',
    red: 'border-b-red-500', // 使用 Tailwind 提供的标准红色
    // 可以在这里添加更多颜色映射
  };

  // 获取对应的颜色类名，如果没有找到则默认使用黑色
  const borderColorClass = colorClassMap[color] || 'border-b-black';

  // 构建完整的 Tailwind CSS 类名字符串
  const borderClasses = `
    relative w-0 h-0 
    border-l-[50px] border-r-[50px] border-b-[26px] 
    border-l-transparent border-r-transparent 
    ${borderColorClass}
  `;

  return <div className={borderClasses} />;
  // 这是一个使用 Tailwind CSS 样式的 <div> 元素。
  // 它的样式设置使其看起来像一个向上的箭头。
  // `relative`: 设置元素的定位为相对定位。这允许你在需要时使用 `top`、`right`、`bottom`、`left` 属性调整其位置。
  // `w-0`: 设置元素的宽度为 0。结合下面的边框属性，实际的视觉效果来自边框而不是内容宽度。
  // `h-0`: 设置元素的高度为 0。类似地，高度的视觉效果由边框控制。
  // `border-l-[15px]`: 设置左边框的宽度为 15 像素。
  // `border-r-[15px]`: 设置右边框的宽度为 15 像素。
  // `border-b-[26px]`: 设置底边框的宽度为 26 像素。这实际上决定了箭头的高度。
  // `border-l-transparent`: 将左边框颜色设置为透明。这使得只有底边框可见，形成箭头的尖端。
  // `border-r-transparent`: 将右边框颜色设置为透明。这与左边框一起确保只有底边框显示。
  // `border-b-black`: 将底边框颜色设置为黑色。这是实际可见的部分，看起来像一个倒三角形（箭头）。
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-800 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div 
          className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20"
          style={{ backgroundColor: '#888' }} // 设置暗灰色背景
        >
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          {/* 使用默认属性 */}
          <ArrowTriangle />
          {/* 自定义宽度、高度和颜色 */}
          <ArrowTriangle color="red" />
          <div className={styles.shape} />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> 
            This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel. What can this thing do?
          </p>
          <p className={`${inter.className}`}>inter What can this thing do?</p>
          <p className={`${lusitana.className}`}>lusitana What can this thing do?</p>
          <p className={`${lusitana.className}`}>lusitana What can this thing do?</p>
          <p className={`${inter.className}`}>inter What can this thing do?</p>
          <p className={`${lusitana.className}`}>lusitana What can this thing do?</p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshot of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
