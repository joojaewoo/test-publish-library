import { SsmButton } from '@/vue/components';

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
    btnType: {
      table: { disable: true },
    },
    label: {
      description: '버튼 text 문자',
    },
    default: {
      table: { disable: true },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args: ButtonArgs, { argTypes }: { argTypes: ButtonArgs }) => ({
  components: { SsmButton },
  props: Object.keys(argTypes),
  template: '<ssm-button v-bind="$props">{{label}}</ssm-button>',
});

//👇 Each story then reuses that template
export const Solid = Template.bind({});
Solid.args = {
  size: 'md',
  btnType: 'solid',
  label: 'Button',
};

export const LightSolid = Template.bind({});
LightSolid.args = {
  size: 'md',
  btnType: 'lightSolid',
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  size: 'md',
  btnType: 'outlined',
  label: 'Button',
};
