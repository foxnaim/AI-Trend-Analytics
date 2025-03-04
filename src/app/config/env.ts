export const env = {
 API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
 NODE_ENV: process.env.NODE_ENV || "development",
 AUTH_SECRET: process.env.NEXT_PUBLIC_AUTH_SECRET || "default_secret",
};
