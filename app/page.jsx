// 'use client';

// app/page.js
import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { useTheme } from '@/context/ThemeContext';
import HeroSection from '@/components/HeroSection';
import { getHomePageData } from '@/data/loaders';
import { FeatureSection } from '@/components/FeatureSection';

export default async function HomePage() {
  console.log("HomePage called");
  // const [mounted, setMounted] = useState(false)
  // const { theme, toggleTheme } = useTheme();

  // 향후 구현 예정
  // const shopifyData = await getShopifyData("/api/home-page");

  // console.dir(shopifyData, { depth: null });

  // const { blocks } = shopifyData.data;
  // const blocks = [
  //     {
  //       id: 1,
  //       title: "Welcome to Our Store",
  //       description: "Your one-stop shop for exclusive products.",
  //       image: {
  //         url: "https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",   
  //         alt: "Background"
  //       }
  //     }
  //   ];

  
  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }
  
  const shopifyData = await getHomePageData();
  const { blocks } = shopifyData?.data || [];
  console.log(blocks);

  // 데이터에 따라 렌더링할 컴포넌트를 결정하는 함수
  return <main>{blocks.map(blockRenderer)}</main>;
  // return (
  //   <main>
  //     <h1>Welcome to Our Store</h1>
  //     <p>Your one-stop shop for exclusive products.</p>
  //     <HeroSection data={blocks[0]}/>
  //     <FeatureSection data={blocks[1]}/>
  //     <div className="button-group">
  //       <Link href="/products">
  //         <button className="btn-primary">Shop Products</button>
  //       </Link>
  //       <Link href="/collections">
  //         <button className="btn-secondary">Browse Collections</button>
  //       </Link>
  //     </div>
  //     {/*<h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
  //     <button onClick={toggleTheme}>Toggle Theme</button>*/}
  //   </main>
  // );
}

const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeatureSection,
};

function blockRenderer(block) {
  const Component = blockComponents[block.__component];
  return Component ? <Component key={block.id} data={block} /> : null;
}