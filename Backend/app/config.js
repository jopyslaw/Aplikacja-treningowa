const config = {
  port: process.env.PORT || 3000,
  databaseUrl:
    process.env.MONGODB_URI ||
    "mongodb+srv://admin:3ArA02AvgWlGpchI@aplikacjatreningowa.p2bt7h5.mongodb.net/?retryWrites=true&w=majority",
  JwtSecret: process.env.JWT_SECRET || "Secret",
};

export default config;
