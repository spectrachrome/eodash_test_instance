import { store } from "@eodash/eodash";

const { currentUrl } = store.states;
/**
 * @type {import("@eodash/eodash").Widget}
 **/
export default {
  id: "Information",
  layout: { x: 9, y: 0, w: 3, h: 12 },
  title: "Information",
  type: "web-component",
  widget: {
    link: () => import("@eox/stacinfo"),
    tagName: "eox-stacinfo",
    properties: {
      for: currentUrl,
      allowHtml: "true",
      styleOverride:
        "#properties li > .value {font-weight: normal !important;}",
      header: "[]",
      subheader: "[]",
      properties: '["description"]',
      featured: "[]",
      footer: "[]",
    },
  },
};
