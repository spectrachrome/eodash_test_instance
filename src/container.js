/**
 *  @type {import("@eodash/eodash").InternalComponentWidget}
 **/
export default {
  id: Symbol(),
  title: "Container",
  type: "internal",
  layout: { x: 4, y: 9, w: 4, h: 3 },
  widget: {
    name: "WidgetsContainer",
    properties: {
      /** @type {Omit<import("@eodash/eodash").Widget,"layout">[]} */
      widgets: [
        /** @type {Omit<import("@eodash/eodash").FunctionalWidget,"layout">} */
        ({
          defineWidget: (selectedSTAC) => {
            const legendURL = selectedSTAC?.assets?.["legend"]?.href;
            return legendURL
              ? {
                  id: legendURL,
                  title: "Legend",
                  type: "web-component",
                  widget: {
                    link: "https://unpkg.com/progressive-image-element@latest/dist/index.js",
                    tagName: "progressive-image",
                    properties: {
                      src: legendURL,
                    },
                    onMounted(el) {
                      const img = document.createElement("img");
                      img.src = legendURL;
                      el.appendChild(img);
                    },
                  },
                }
              : {
                  id: Symbol(),
                  title: "Date Picker",
                  type: "internal",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      inline: true,
                    },
                  },
                };
          },
        }),
      ],
    },
  },
};
