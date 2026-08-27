export const SITE = {
  website: "https://tyrionhuu.github.io/", // replace this with your deployed domain
  author: "Tianyu Hu",
  profile: "https://tyrionhuu.github.io/",
  desc: "Ph.D. Student in Computer Science at the University of Central Florida. My research centers on large language models, with broader interests in computational biology, computational social science, and computational finance.",
  title: "Tianyu Hu",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/tyrionhuu/tyrionhuu.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
