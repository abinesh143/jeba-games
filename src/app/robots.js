export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        //   disallow: ['/private/'],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/"],
      },
    ],
    sitemap: "https://www.jebaselvin.com/sitemap.xml",
  };
}
