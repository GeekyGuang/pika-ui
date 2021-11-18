import { createApp, render, h } from "vue";
import Dialog from "./Dialog.vue";

export const openDialog = (options) => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const { title, content } = options;
  const close = () => {
    app.unmount();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
              div.remove();
            }
          },
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
