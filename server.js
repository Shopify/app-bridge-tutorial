require("isomorphic-fetch");
const Koa = require("koa");
const route = require("koa-route");
const views = require("koa-views");
const static = require("koa-static");
const mount = require("koa-mount");

const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const dotenv = require("dotenv");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

const server = new Koa();
server.use(session(server));
server.keys = [SHOPIFY_API_SECRET_KEY];

server.use(
  createShopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_API_SECRET_KEY,
    scopes: ["read_products"],
    afterAuth(ctx) {
      const { shop, accessToken } = ctx.session;
      ctx.cookies.set("shopOrigin", shop, { httpOnly: false });
      ctx.redirect("/");
    }
  })
);

server.use(verifyRequest());

server.use(
  views(__dirname + "/views", {
    map: {
      html: "underscore"
    }
  })
);

server.use(
  route.get("/", async function(ctx) {
    ctx.state = { SHOPIFY_API_KEY };
    await ctx.render("index");
  })
);

server.use(mount("/assets", static(__dirname + "/assets")));

server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
