import React from 'react';

import { SsmButton } from '/dist/react/design-react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'React/SsmButton',
  component: SsmButton,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xlg', 'full'],
      control: { type: 'select' },
      description: 'size (sm, md, lg, xlg, full) 중 설정',
    },
    type: {
      table: { disable: true },
    },
    label: {
      description: '버튼 text 문자',
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SsmButton {...args}>{args.label}</SsmButton>;

//👇 Each story then reuses that template
export const Solid = Template.bind({});
Solid.args = {
  size: 'md',
  type: 'solid',
  label: 'Button',
};

export const LightSolid = Template.bind({});
LightSolid.args = {
  size: 'md',
  type: 'lightSolid',
  label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  size: 'md',
  type: 'outline',
  label: 'Button',
};
