import "clsx";
import { d as spread_attributes, e as attr, g as escape_html, j as stringify, k as ensure_array_like, l as attr_style } from "../../../chunks/index.js";
import { S as Star_outline } from "../../../chunks/star-outline.js";
function External_link($$payload, $$props) {
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
  )}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path></svg>`;
}
function ProjectCard($$payload, $$props) {
  let { url, href, projectName, description, Icon } = $$props;
  $$payload.out += `<div class="card svelte-nufie4"><div class="project-button-container svelte-nufie4"><!---->`;
  Icon($$payload, { style: "font-size: 30px;" });
  $$payload.out += `<!----> <a class="project-button svelte-nufie4" target="_blank"${attr("href", href)}><div class="project-name svelte-nufie4">${escape_html(projectName)}</div> <span class="project-url sub-text svelte-nufie4" data-sveltekit-replacestate="">`;
  External_link($$payload, {});
  $$payload.out += `<!---->${escape_html(url)}</span></a></div> <p class="sub-text">${escape_html(description)}</p></div>`;
}
function Profile($$payload, $$props) {
  let { name } = $$props;
  $$payload.out += `<div class="pfp svelte-1gzc7rc"><img${attr("src", `/pfps/${stringify(name)}.webp`)}${attr("alt", name)} class="svelte-1gzc7rc"/></div> <h1 class="bio-title svelte-1gzc7rc">${escape_html(name)}<span class="h300"></span></h1>`;
}
function Tags($$payload, $$props) {
  let { names } = $$props;
  const Presets = {
    likesPreset: [
      "#537D5D",
      "#F2C078",
      "#3D90D7",
      "#D5451B",
      "#C5172E",
      "black",
      "#71C0BB",
      "#5588A3"
    ]
  };
  const each_array = ensure_array_like(names);
  $$payload.out += `<div class="tag-container svelte-djrzx0"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let name = each_array[i];
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="tag"${attr_style(`background-color: ${stringify(Presets.likesPreset[i])}; color: white;`)}><span>${escape_html(name)}</span></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload) {
  let tags = [
    "Modded Minecraft (java)",
    "Avatar: The Last Airbender",
    "Arcane Odyssey by vetexgames",
    "Elemental Warzone",
    "Rush Hour",
    "Grace (game)",
    "Lilo and Stitch",
    "One Piece",
    "Naruto",
    "Dragon Ball",
    "Mario"
  ];
  $$payload.out += `<div class="body-content svelte-147219d"><main class="wheatwhole svelte-147219d"><div class="main-profile">`;
  Profile($$payload, { name: "wheatwhole" });
  $$payload.out += `<!----> <section class="short-bio" id="short-bio"><p class="giantahhparagraph">hi. i'm a ghanaian programmer and game developer who has every single idea what they are doing. i also like messing around in blender. ✝️</p></section></div> <div class="likes-wrapper svelte-147219d"><h3 class="tiny-title">likes</h3> `;
  Tags($$payload, { names: tags });
  $$payload.out += `<!----></div></main> <div class="projects svelte-147219d">`;
  ProjectCard($$payload, {
    href: "https://wheatwhole.github.io/packgod",
    url: "wheatwhole.github.io/packgod",
    projectName: "packgod",
    Icon: Star_outline,
    description: "we call it packgod humbler 300, a scary accurate packgod roast generator made using pollinations.ai. will humble any fools in the vicinity.  practice caution when using. "
  });
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
