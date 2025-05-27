

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DTZvbjUp.js","_app/immutable/chunks/BLm4lPAu.js","_app/immutable/chunks/CWjt46NO.js","_app/immutable/chunks/D2lqqC36.js"];
export const stylesheets = ["_app/immutable/assets/2.Z76bVfUd.css"];
export const fonts = [];
