const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/jacobfrank/GitHub/folio/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jacobfrank/GitHub/folio/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/jacobfrank/GitHub/folio/src/pages/index.jsx")))
}

