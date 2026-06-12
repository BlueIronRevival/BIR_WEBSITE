export const siteImages = {
  logo: "/images/logo.jpg",
  heroBackground: "/images/hero-tractors.jpg",
  ownerPortrait: "/images/owner-shop.jpg",
  featuredTractor: "/images/featured-fordson-f.jpg",
  fordsonImage: "/images/collection-fordson-f.jpg",
  twoNImage: "/images/collection-ford-2n.jpg",
  jubileeImage: "/images/collection-jubilee.jpg",
  workmasterImage: "/images/collection-workmaster.jpg",
  ford2000Image: "/images/collection-ford-2000.jpg",
} as const;

export type SiteImageKey = keyof typeof siteImages;
