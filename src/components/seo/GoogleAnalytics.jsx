"use client";

import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <main>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7CMSE401KZ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7CMSE401KZ');
          `,
        }}
      />
    </main>
  );
};

export default GoogleAnalytics;
