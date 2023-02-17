import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card  from '../ui/Card';

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// export const darkTheme = Template.bind({});

Template.args = {
  isDark: true,
}
export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
}


export const Large = Template.bind({});
Large.args = {
  size: 'large',
}

