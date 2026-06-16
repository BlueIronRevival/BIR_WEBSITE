import { siteImages } from "@/config/images";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Collection", href: "/collection" },
  { label: "Stories", href: "/stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const resources = [
  {
    title: "Serial Number Lookup",
    description: "Identify your Ford tractor by serial number and production range.",
    href: "/resources/serial-number-lookup",
    icon: "SN",
    action: "Use the tool",
  },
  {
    title: "Model Decoder",
    description: "Decode model prefixes, production codes, and tractor details.",
    href: "/resources/model-decoder",
    icon: "MD",
    action: "Decode a model",
  },
  {
    title: "Fordson F Notes",
    description: "Specifications, history, and working notes for the tractor that started it all.",
    href: "/resources/fordson-f-notes",
    icon: "FF",
    action: "Browse notes",
  },
  {
    title: "Fordson Dating Tool",
    description: "Date a Model F or Model N by factory location and serial number.",
    href: "/resources/fordson-dating-tool",
    icon: "FD",
    action: "Date a Fordson",
  },
  {
    title: "Carburetor Identification",
    description: "Recognize common Marvel-Schebler and Zenith carburetors.",
    href: "/resources",
    icon: "CI",
    action: "Open the guide",
  },
  {
    title: "Restoration Guides",
    description: "Practical shop knowledge for repairs, rebuilds, and careful preservation.",
    href: "/stories",
    icon: "RG",
    action: "Read the guides",
  },
  {
    title: "Tractor History",
    description: "Follow the evolution of Ford tractors through the machines that did the work.",
    href: "/collection",
    icon: "TH",
    action: "Explore history",
  },
];

export const tractors = [
  {
    name: "Fordson F",
    years: "1917-1928",
    description: "The compact, affordable tractor that changed farming around the world.",
    image: siteImages.fordsonImage,
    detail: "Steel-wheel pioneer",
  },
  {
    name: "Ford 2N",
    years: "1942-1947",
    description: "Wartime ingenuity built on the revolutionary Ferguson System.",
    image: siteImages.twoNImage,
    detail: "Wartime workhorse",
  },
  {
    name: "Ford NAA / Jubilee",
    years: "1953-1954",
    description: "A golden anniversary tractor with a new overhead-valve engine.",
    image: siteImages.jubileeImage,
    detail: "Golden anniversary",
  },
  {
    name: "Ford 641 Workmaster",
    years: "1957-1962",
    description: "Straightforward utility, dependable power, and classic red-and-gray style.",
    image: siteImages.workmasterImage,
    detail: "Hundred Series utility",
  },
  {
    name: "Ford 2000 3-Cylinder",
    years: "1965-1975",
    description: "A durable new generation of blue Ford utility tractors.",
    image: siteImages.ford2000Image,
    detail: "New-generation Ford",
  },
];

export const stories = [
  {
    title: "Bringing Home the Fordson F",
    category: "Field Notes",
    excerpt: "A century-old tractor, a careful recovery, and the beginning of a new chapter in the shop.",
    date: "Restoration story",
  },
  {
    title: "The 2N Engine Rebuild",
    category: "From the Shop",
    excerpt: "What we found inside a tired flathead four-cylinder and how it came back together.",
    date: "Technical story",
  },
  {
    title: "Why Old Ford Tractors Still Matter",
    category: "Living History",
    excerpt: "These machines are more than collectible iron. They are working records of ingenuity and change.",
    date: "BIR perspective",
  },
];
