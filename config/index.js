module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb://localhost/node-react-expense-tracker-app",
  JWT_SECRET:
    process.env.JWT_SECRET ||
    "0e96a7ddb3d364ca83a792a0034bef85759451b149bc271dc3034860a7d6c26f",
};
