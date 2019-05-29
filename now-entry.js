const express = require("express");
const concat = require("concat-stream");
const url = require("url");
global.fetch = require('node-fetch')

const renderer = require("./.fab/build/server");

const { Request, Response, Headers } = fetch;
Object.assign(global, { fetch, Request, Response, Headers })

const app = express();
app.use((req, res, next) => {
  req.pipe(
    concat(data => {
      req.body = data.toString();
      next();
    })
  );
});
app.all("*", async (req, res) => {
  console.log(req.query)
  console.log(req.url)
  try {
    const pathname = req.query.path || url.parse(req.query.path).pathname;
    console.log({pathname})
    if (pathname.startsWith("/_assets")) {
      //res.setHeader("Content-Type", getContentType(pathname));
      //res.setHeader("Cache-Control", "immutable");
      //res.end(files[pathname]);
      res.status(450).send({ error: "testing." });
    } else {
      const method = req.method;
      const headers = req.headers;
      const url = `${req.protocol}://${req.headers.host}${pathname}`;
      const fetch_req = new Request(
        url,
        Object.assign(
          { method, headers },
          method === "POST" ? { body: req.body } : {}
        )
      );
      const production_settings = renderer.getProdSettings
        ? renderer.getProdSettings()
        : {};
      const fetch_res = await renderer.render(
        fetch_req,
        Object.assign(
          {
            injected: "variables",
            should: "work!"
          },
          production_settings
        )
      );
      const response_headers = fetch_res.headers.raw();
      delete response_headers["content-encoding"];
      res.writeHead(fetch_res.status, fetch_res.statusText, response_headers);
      const blob = await fetch_res.arrayBuffer();
      res.write(Buffer.from(blob));
      res.end();
    }
  } catch (e) {
    console.log("ERROR");
    console.log(e);
    res.writeHead(500, "Internal Error");
    res.end();
  }
});

module.exports = app;
