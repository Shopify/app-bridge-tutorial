require("isomorphic-fetch");
const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const mount = require("koa-mount");

const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");

const dotenv = require("dotenv");
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

buildServer();

async function buildServer() {
  const server = new Koa();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ["read_products", "read_orders"],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set("shopOrigin", shop, { httpOnly: false });
        ctx.redirect("/");
      }
    })
  );

  server.use(verifyRequest());

  if (process.env.NODE_ENV === "production") {
    server.use(mount("/", static(__dirname + "/public")));
  } else {
    await webpackMiddleware(server);
  }

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
}

// serve files from webpack, in memory
async function webpackMiddleware(server) {
  const koaWebpack = require("koa-webpack");
  const config = require("./webpack.config.js");

  const middleware = await koaWebpack({
    config,
    hotClient: false
  });
  server.use(middleware);

  // to access in-memory filesystem provided by html-webpack-plugin
  server.use(async ctx => {
    const filename = path.resolve(config.output.path, "index.html");
    ctx.response.type = "html";
    ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(
      filename
    );
  });
}
