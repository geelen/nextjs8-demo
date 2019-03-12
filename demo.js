const http = require("http");
const url = require('url')

const PAGES = {
  '/about': require("./.next/serverless/pages/about"),
  '/': require("./.next/serverless/pages/index"),
}
const server = new http.Server((req, res) => {
  console.log()
  const page = PAGES[url.parse(req.url).path]
  if (page) return page.render(req, res)
});
server.listen(3002, () => console.log("Listening on http://localhost:3002"));
