import { StoryFn, Meta } from "@storybook/vue3";
import Component from "./npk-input.vue";

export default {
  component: Component,
  argTypes: {
    modelValue: { type: "string" },
    label: { type: "string" },
    status: { type: "string" },
    placeholder: { type: "string" },
    type: { options: ["search", ""], control: { type: "select" } },
  },
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => ({
  components: { Component },
  setup() {
    return { args, modelValue: "text" };
  },

  template: '<Component v-bind="args" />',
});

export const Search = Default.bind({});
Search.storyName = "Поиск";
Search.args = { type: "search" };

export const Cleaner = Default.bind({});
Cleaner.storyName = "С крестиком";
Cleaner.args = { cleaner: true };

export const Error = Default.bind({});
Error.storyName = "С ошибкой";
Error.args = { error: "текст ошибки" };

export const Label = Default.bind({});
Label.storyName = "С заголовком";
Label.args = { label: "label" };

export const Status = Default.bind({});
Status.storyName = "С описанием под инпутом";
Status.args = { status: "status" };

export const StatusLabel = Default.bind({});
StatusLabel.storyName = "С описанием под инпутом и заголовком";
StatusLabel.args = { status: "status", label: "label" };

export const Value = Default.bind({});
Value.storyName = "С заполненным заранее инпутом";
Value.args = { modelValue: "текст инпута" };

export const Placeholder = Default.bind({});
Placeholder.storyName = "С Placeholder";
Placeholder.args = { placeholder: "Placeholder" };
