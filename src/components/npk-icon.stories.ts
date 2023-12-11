import { StoryFn, Meta } from "@storybook/vue3";
import Component from "./npk-icon.vue";

export default {
  component: Component,
  argTypes: {
    name: { type: "string" },
  },
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => ({
  components: { Component },

  setup() {
    return { args };
  },

  template: '<component :name="args.name"  />',
});
Default.args = { name: "bi bi-x" };
