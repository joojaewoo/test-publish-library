import { SsmButton } from 'library-button-test/vue/design-vue';

interface ButtonArgs {
  type: 'solid' | 'lightSolid' | 'outlined';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  label: string;
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Vue/SsmButton',
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
const Template = (args: ButtonArgs) => ({
  components: { SsmButton },
  setup() {
    return { ...args };
  },
  template: '<ssm-button :size="size" :type="type">{{label}}</ssm-button>',
});

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
