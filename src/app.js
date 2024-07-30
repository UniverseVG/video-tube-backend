import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.route.js";
import healthcheckRouter from "./routes/healthcheck.route.js";
import tweetRouter from "./routes/tweet.route.js";
import subscriptionRouter from "./routes/subscription.route.js";
import videoRouter from "./routes/video.route.js";
import commentRouter from "./routes/comment.route.js";
import likeRouter from "./routes/like.route.js";
import playlistRouter from "./routes/playlist.route.js";
import dashboardRouter from "./routes/dashboard.route.js";

const prefixURLVersion = "/api/v1";

//routes declaration
app.use(`${prefixURLVersion}/healthcheck`, healthcheckRouter);
app.use(`${prefixURLVersion}/users`, userRouter);
app.use(`${prefixURLVersion}/tweets`, tweetRouter);
app.use(`${prefixURLVersion}/subscriptions`, subscriptionRouter);
app.use(`${prefixURLVersion}/videos`, videoRouter);
app.use(`${prefixURLVersion}/comments`, commentRouter);
app.use(`${prefixURLVersion}/likes`, likeRouter);
app.use(`${prefixURLVersion}/playlist`, playlistRouter);
app.use(`${prefixURLVersion}/dashboard`, dashboardRouter);

export default app;
