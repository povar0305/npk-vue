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

  template: '<component v-bind="args" >Текст кнопки</component>',
});
export const Disabled = Default.bind({});
Disabled.storyName = "Disabled";
Disabled.args = { disabled: true };

export const IconPrev = Default.bind({});
IconPrev.storyName = "С иконкой вначале";
IconPrev.args = { iconPrev: "bi bi-x" };

export const IconNext = Default.bind({});
IconNext.storyName = "С иконкой в конце";
IconNext.args = { iconNext: "bi bi-x" };

export const Icon = Default.bind({});
Icon.storyName = "Две иконки";
Icon.args = { iconNext: "bi bi-x", iconPrev: "bi bi-x" };

export const Primary = Default.bind({});
Primary.storyName = "Primary";
Primary.args = { primary: true };

export const Error = Default.bind({});
Error.storyName = "Error";
Error.args = { error: true };

export const Success = Default.bind({});
Success.storyName = "Success";
Success.args = { success: true };

export const Warning = Default.bind({});
Warning.storyName = "Warning";
Warning.args = { warning: true };
