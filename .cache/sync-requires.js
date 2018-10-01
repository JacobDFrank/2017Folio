// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jacobfrank/GitHub/folio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-js": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/templates/post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jacobfrank/GitHub/folio/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/404.jsx")),
  "component---src-pages-components-about-me-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/components/AboutMe.jsx")),
  "component---src-pages-components-blott-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/components/Blott.jsx")),
  "component---src-pages-components-bubble-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/components/Bubble.jsx")),
  "component---src-pages-components-footer-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/components/Footer.jsx")),
  "component---src-pages-components-header-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/components/Header.jsx")),
  "component---src-pages-components-intro-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/components/Intro.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/layout-index.json"),
  "missle.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/missle.json"),
  "pills.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/pills.json"),
  "hawkes-media.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/hawkes-media.json"),
  "b-reel.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/b-reel.json"),
  "taw.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/taw.json"),
  "web-gl.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/web-gl.json"),
  "adobe.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/adobe.json"),
  "dev-404-page.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/404.json"),
  "components-about-me.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/components-about-me.json"),
  "components-blott.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/components-blott.json"),
  "components-bubble.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/components-bubble.json"),
  "components-footer.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/components-footer.json"),
  "components-header.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/components-header.json"),
  "components-intro.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/components-intro.json"),
  "index.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/index.json"),
  "404-html.json": require("/Users/jacobfrank/GitHub/folio/.cache/json/404-html.json")
}