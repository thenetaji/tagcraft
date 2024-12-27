import { serve } from "@hono/node-server";
import app from "./app.js";

serve({
  fetch: app.fetch,
  port: 2626,
}).on("listening", () => {
  console.log("Server started at port 2626");
});
