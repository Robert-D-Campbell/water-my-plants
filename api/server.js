//dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
//!dependencies

//middleware
const authenticate = require("../auth/auth-middleware.js");
//!middleware

//router
const authRouter = require("../auth/auth-router.js");
const plantsRouter = require("../plants/plants-router.js");
const usersRouter = require("../users/users-router.js");
//!router

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/dashboard", authenticate, usersRouter);
server.use("/api/plants", authenticate, plantsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "API IS WORKING!!", dbenv: process.env.DB_ENV });
});

module.exports = server;
