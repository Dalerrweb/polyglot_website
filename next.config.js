/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   i18n: {
      locales: ["uz", "ru", "en"],
      defaultLocale: "en",
   },
   env: {
      RECAPTCHA_SITE_KEY: '6LfXYcgoAAAAAG3HGb3BA8grJYblnb2MgcmaKVCM',
      RECAPTCHA_SECRET_KEY: '6LfXYcgoAAAAAHwdFbLNMNzxhFsxVjHjGgJLD4jp',
   },
};
module.exports = nextConfig;
