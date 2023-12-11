import { StoryFn, Meta } from "@storybook/vue3";
import Component from "./npk-button.vue";

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => ({
  components: { Component },
  setup() {
    return { args, modelValue: "text" };
  },

  template: '<component v-bind="args" ></component>',
});

export const Search = Default.bind({});
Search.storyName = "Поиск";
Search.args = { type: "search" };
