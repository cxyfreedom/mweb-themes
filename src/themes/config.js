/**
 * 每次新增一个 mweb 主题文件，都需要在这里新增一项，字段包括：
 * - file：文件名
 * - mode（可选）："dark"，是否是深色主题
 */

const themes = {
  ayu: { file: "mweb-ayu.scss" },
  "ayu-mirage": { file: "mweb-ayu-mirage.scss", mode: "dark" },
  "bear-default": { file: "mweb-bear-default.scss" }, // black primary color
  charcoal: { file: "mweb-charcoal.scss", mode: "dark" }, // Night Text Theme
  cobalt: { file: "mweb-cobalt.scss", mode: "dark" },
  contrast: { file: "mweb-contrast.scss" },
  "d-boring": { file: "mweb-d-boring.scss" },
  "dark-graphite": { file: "mweb-dark-graphite.scss", mode: "dark" },
  default: { file: "mweb-default.scss" }, // raw html
  dieci: { file: "mweb-dieci.scss", mode: "dark" },
  dracula: { file: "mweb-dracula.scss", mode: "dark" },
  "duotone-heat": { file: "mweb-duotone-heat.scss" },
  "duotone-light": { file: "mweb-duotone-light.scss" },
  gandalf: { file: "mweb-gandalf.scss" },
  gotham: { file: "mweb-gotham.scss", mode: "dark" },
  indigo: { file: "mweb-indigo.scss" },
  jzman: { file: "mweb-jzman.scss" },
  lighthouse: { file: "mweb-lighthouse.scss", mode: "dark" },
  lark: { file: "mweb-lark.scss" },
  "lark-bold-color": { file: "mweb-lark-bold-color.scss" },
  nord: { file: "mweb-nord.scss", mode: "dark" },
  "olive-dunk": { file: "mweb-olive-dunk.scss" },
  panic: { file: "mweb-panic.scss", mode: "dark" },
  "red-graphite": { file: "mweb-red-graphite.scss" },
  smartblue: { file: "mweb-smartblue.scss" },
  "solarized-dark": { file: "mweb-solarized-dark.scss", mode: "dark" },
  "solarized-light": { file: "mweb-solarized-light.scss" },
  toothpaste: { file: "mweb-toothpaste.scss", mode: "dark" },
  typo: { file: "mweb-typo.scss" },
  "v-green": { file: "mweb-v-green.scss" },
  vue: { file: "mweb-vue.scss" },
};

module.exports = themes;
