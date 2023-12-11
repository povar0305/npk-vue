import { StoryFn, Meta } from '@storybook/vue3';
import Component from './npk-input.vue';

export default {
    component: Component,
    argTypes: {
        modelValue: {type:'string'},
        label: {type:'string'},
        status: {type:'string'},
        // disabled: {
        //     control: { type: 'boolean' },
        //     defaultValue: false,
        // },
        // size: {
        //     control: { type: 'radio' },
        //     options: ['small', 'medium', 'large'],
        //     defaultValue: 'medium',
        // },
        // color: {
        //     control: { type: 'select' },
        //     options: ['primary', 'secondary'],
        //     defaultValue: 'primary',
        // },
    },
} as Meta<typeof Component>;

const Template: StoryFn<typeof Component> = (args) => ({
    components: { Component },
    setup() {
        return { args };
    },
    template: `
      <Component v-bind="args" />
  `,
});

export const Default: StoryFn<typeof Component> = (args) => ({
    components: { Component },
    setup() {
        return { args };
    },
    template: '{{args}}<Component v-bind="args" />',
});
//
// export const PrimaryButton = Template.bind({});
// PrimaryButton.args = { color: 'primary' };
//
// export const SecondaryButton = Template.bind({});
// SecondaryButton.args = { color: 'secondary' };
