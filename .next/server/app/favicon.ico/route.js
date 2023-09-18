"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 12736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fyuda%2FDocuments%2Fvexpunk_frontend%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/Users/yuda/Documents/vexpunk_frontend/app/favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(12736)));
module.exports = __webpack_exports__;

})();