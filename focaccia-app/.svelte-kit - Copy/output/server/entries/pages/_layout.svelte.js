import "clsx";
import { d as spread_attributes, e as attr, f as attr_class, g as escape_html, c as pop, p as push } from "../../chunks/index.js";
import { S as Star_outline } from "../../chunks/star-outline.js";
import { p as page } from "../../chunks/index2.js";
function LoveNote($$payload) {
  $$payload.out += `<div class="lovenote-container svelte-19awipq"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svelte-19awipq"><path fill="#E55050" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg> <div class="sub-text lovenote svelte-19awipq"></div></div>`;
}
function Info_rect_outline($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 24 24",
      width: "1.2em",
      height: "1.2em",
      ...p
    },
    null,
    void 0,
    void 0,
    3
  )}><path fill="currentColor" d="M12 10.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path><path fill="currentColor" fill-rule="evenodd" d="M7.317 3.769a42.5 42.5 0 0 1 9.366 0c1.827.204 3.302 1.642 3.516 3.48c.37 3.156.37 6.346 0 9.503c-.215 1.836-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.644-3.516-3.48a41 41 0 0 1 0-9.504c.214-1.837 1.69-3.275 3.516-3.48m9.2 1.49a41 41 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.423a39.4 39.4 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.034 0a2.486 2.486 0 0 0 2.192-2.163a39.4 39.4 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.164" clip-rule="evenodd"></path></svg>`;
}
function NavTab($$payload, $$props) {
  push();
  let { Icon, href, name } = $$props;
  let tabPath = href.split("/")[1];
  let currentPage = page.url.pathname.split("/")[1];
  let isTabCurrentPage = tabPath === currentPage;
  $$payload.out += `<a role="tab" id="tab" draggable="false"${attr("href", href)}${attr("aria-selected", isTabCurrentPage)}${attr_class("svelte-j4kaq7", void 0, { "active": isTabCurrentPage })}><!---->`;
  Icon($$payload, { style: "font-size: 25px; ", class: "icon" });
  $$payload.out += `<!----> <span class="svelte-j4kaq7">${escape_html(name)}</span></a>`;
  pop();
}
function Navbar($$payload) {
  $$payload.out += `<div class="navbar-container svelte-zvfqp5"><nav class="navbar svelte-zvfqp5"><div class="logo svelte-zvfqp5" aria-label="focaccia.dev logo"><img class="focaccia-logo svelte-zvfqp5" src="/logo.png" alt="focaccia-logo"/></div> <nav class="navbar-tabs svelte-zvfqp5">`;
  NavTab($$payload, { name: "about?", Icon: Info_rect_outline, href: "/" });
  $$payload.out += `<!----> `;
  NavTab($$payload, {
    name: "me!",
    Icon: Star_outline,
    href: "/wheatwhole"
  });
  $$payload.out += `<!----></nav></nav></div>`;
}
function _layout($$payload, $$props) {
  let { data, children } = $$props;
  $$payload.out += `<div class="basket">`;
  Navbar($$payload);
  $$payload.out += `<!----> <div class="loaf">`;
  children($$payload);
  $$payload.out += `<!----></div></div> `;
  LoveNote($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
