import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from '@/ui/Loader';

export default {
  title: 'Example/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const isDark = Template.bind({});
