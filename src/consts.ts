import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "不會日語卻愛日旅的女子",
  DESCRIPTION:
    "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "不會日語卻愛日旅的女子",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "搜尋",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "首頁",
    HREF: "/",
  },
  // {
  //   TEXT: "Work",
  //   HREF: "/work",
  // },
  {
    TEXT: "分類",
    HREF: "/blog",
  },
  {
    TEXT: "關於我",
    HREF: "/about",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "markhorn.dev@gmail.com",
    HREF: "mailto:markhorn.dev@gmail.com",
  },
  // {
  //   NAME: "Github",
  //   ICON: "github",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://github.com/markhorn-dev/astro-sphere"
  // },
  // {
  //   NAME: "LinkedIn",
  //   ICON: "linkedin",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://www.linkedin.com/in/markhorn-dev/",
  // },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
];
