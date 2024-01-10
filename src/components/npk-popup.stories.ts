import { StoryFn, Meta } from "@storybook/vue3";
import Component from "./npk-popup.vue";

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template:
    "<component v-model='args.modelValue' >Тут то, что внутри попапа</component>",
});
Default.args = {
  modelValue: false,
};
