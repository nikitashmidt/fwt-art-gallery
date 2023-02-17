import { ComponentStory, ComponentMeta } from '@storybook/react';
import Links from '../ui/Links';

export default {
  title: 'Example/Links',
  component: Links,
} as ComponentMeta<typeof Links>;

const Template: ComponentStory<typeof Links> = (args) => <Links {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'asd',
};
