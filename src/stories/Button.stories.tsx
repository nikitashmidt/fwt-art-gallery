import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@/ui/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Text = Template.bind({});

export const Theme = Template.bind({});

export const Icon = Template.bind({});

export const Circle = Template.bind({});

Default.args = {
  variant: 'default',
  children: 'asd',
};

Text.args = {
  variant: 'text',
};

Theme.args = {
  variant: 'theme',
};

Icon.args = {
  variant: 'icon',
};

Circle.args = {
  variant: 'circle',
};
