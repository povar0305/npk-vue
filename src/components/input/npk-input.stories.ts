import { StoryFn, Meta } from '@storybook/vue3';
import Component from './npk-input.vue';

export default {
    component: Component,
    argTypes: {
        modelValue: {type:'string'},
        label: {type:'string'},
        status: {type:'string'},
        placeholder: {type:'string'},
        type:{type:'string'}
    },
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => ({
    components: { Component },
    setup() {
        return { args };
    },

    template: '<Component />',

});


export const Search: StoryFn<typeof Component> = (args) => ({
    components: { Component },
    setup() {
        return { args };
    },
    template: '<Component  type="search"/>',
});
//
// export const PrimaryButton = Template.bind({});
// PrimaryButton.args = { color: 'primary' };
//
// export const SecondaryButton = Template.bind({});
// SecondaryButton.args = { color: 'secondary' };
