import { SsmButton } from '@/vue/components';

interface ButtonArgs {
  type: 'solid' | 'lightSolid' | 'outlined';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  label: string;
}

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Vue/SsmButton',
  component: SsmButton,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xlg', 'full'],
      control: { type: 'select' },
      description: 'size (sm, md, lg, xlg, full) ์ค ์ค์ ',
    },
    btnType: {
      table: { disable: true },
    },
    label: {
      description: '๋ฒํผ text ๋ฌธ์',
    },
    default: {
      table: { disable: true },
    },
  },
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args: ButtonArgs, { argTypes }: { argTypes: ButtonArgs }) => ({
  components: { SsmButton },
  props: Object.keys(argTypes),
  template: '<ssm-button v-bind="$props">{{label}}</ssm-button>',
});

//๐ Each story then reuses that template
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
