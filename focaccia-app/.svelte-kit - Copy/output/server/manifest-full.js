export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon/apple-touch-icon.png","favicon/favicon-96x96.png","favicon/favicon.ico","favicon/favicon.svg","favicon/site.webmanifest","favicon/web-app-manifest-192x192.png","favicon/web-app-manifest-512x512.png","logo.png","logo.svg","pfps/wheatwhole.webp","shared.css","shared.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".webp":"image/webp",".css":"text/css",".js":"text/javascript"},
	_: {
		client: {start:"_app/immutable/entry/start.B3BfAIY3.js",app:"_app/immutable/entry/app.B4aupcgI.js",imports:["_app/immutable/entry/start.B3BfAIY3.js","_app/immutable/chunks/DAjyUaCo.js","_app/immutable/chunks/CWjt46NO.js","_app/immutable/chunks/Bc38JmTf.js","_app/immutable/entry/app.B4aupcgI.js","_app/immutable/chunks/CWjt46NO.js","_app/immutable/chunks/CS9jGBn4.js","_app/immutable/chunks/BLm4lPAu.js","_app/immutable/chunks/Bc38JmTf.js","_app/immutable/chunks/Cu3HNijG.js","_app/immutable/chunks/CuFZOIbG.js","_app/immutable/chunks/CcOXM-E_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/wheatwhole",
				pattern: /^\/wheatwhole\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
