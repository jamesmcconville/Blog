const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("C:\\Users\\james\\source\\repos\\blog\\gatsbynetlify\\src\\templates\\blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\james\\source\\repos\\blog\\gatsbynetlify\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\james\\source\\repos\\blog\\gatsbynetlify\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\james\\source\\repos\\blog\\gatsbynetlify\\src\\pages\\index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("C:\\Users\\james\\source\\repos\\blog\\gatsbynetlify\\src\\pages\\resume.js")))
}

