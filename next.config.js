/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // DB_LOCAL_URI: "mongodb://127.0.0.1:27017/book-it",
    DB_LOCAL_URI:
      "mongodb+srv://Hishaam:hishaam%40mongodb@nodeprojects.fwck6dz.mongodb.net/BOOK-IT?retryWrites=true&w=majority",

    API_URL: "http://localhost:3000",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "hishaam",

    CLOUDINARY_CLOUD_NAME: "dxcleqyco",
    CLOUDINARY_API_KEY: "648961312186687",
    CLOUDINARY_API_SECRET: "SiT-f0VBOq5XzwYFBe1-gv7fEE4",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "c6988be130d14f",
    SMTP_PASSWORD: "ec50509d963d67",

    SMTP_FROM_EMAIL: "noreply@chennaibookings.com",
    SMTP_FROM_NAME: "Chennai-Bookings",

    STRIPE_SECRET_KEY:
      "sk_test_51OZrMZSIhn1URNL6ULdR56R2NIrQmyQi6nSHU4hZguNahqechc8jLIjxO9sSm5S107Np8epoFLWHPimUjRZAH4hM00Zclo5gp7",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
