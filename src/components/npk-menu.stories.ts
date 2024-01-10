import { StoryFn, Meta } from "@storybook/vue3";
import Component from "./npk-menu.vue";

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: "<component :links='args.links'/>",
});
Default.args = {
  links: [
    {
      text: "Главная",
      link: "/",
    },
    {
      text: "Просмотр",
      link: "/view",
    },
    {
      text: "Архив",
      link: "/archive",
      type: "toggle",
      activeText: "Новый архив",
      activeLink: "/archive2",
    },
    {
      text: "Настройки",
      link: "/admin",
    },
  ],
};
