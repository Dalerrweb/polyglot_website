/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   i18n: {
      locales: ["uz", "ru", "en"],
      defaultLocale: "en",
   },
   env: {
      RECAPTCHA_SITE_KEY: '6LeKJMgoAAAAAGAWnNV9xLAm4SSTq0H0KtEcLb13',
      RECAPTCHA_SECRET_KEY: '6LeKJMgoAAAAAIKfTxxVX6wtMfdo0bwzdytHWZfZ',
   },
};
module.exports = nextConfig;
