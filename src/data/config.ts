const config = {
  title: "ItzWish | Nabil Ahmed",
  description: {
    long: "Explore the portfolio of Wish, a Computer Science Engineer with 1.5 year experience in Devlopment, DevOps & Database management with hands-on experience in deploying & automating workflows, & collaborating with foreign clients. Strong analytical skills, effective communication, and a team-oriented approach to driving process improvements and delivering results.",
    short:
      "Discover the portfolio of Wish, a DevOps enthusiast solving real life problems in DevOps and Development.",
  },
  keywords: [
    "ItzWish",
    "Wish",
    "itzmewish",
    // "GSAP",
    // "React",
    // "Next.js",
    // "Spline",
    // "Framer Motion",
    "AWS",
    "DevSecOps",
    "AIOps",
    "Azure",
  ],
  author: "ItzWish",
  email: "itzwish@yandex.com",
  site: "404 Not Loaded",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/h1ouredwish/",
    instagram: "https://www.instagram.com/itzmewish/",
    facebook: "Personal $404",
    github: "https://github.com/h1ouredwish/",
  },
};
export { config };
