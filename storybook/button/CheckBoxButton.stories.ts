import { CheckBoxButton } from '@/vue/components';
import { ref } from 'vue';

interface ButtonArgs {
  status: 'normal' | 'readonly' | 'disabled';
  type: 'square' | 'circle';
  label: string;
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Vue/CheckBoxButton',
  component: CheckBoxButton,
  argTypes: {
    status: {
      options: ['normal', 'readonly', 'disabled'],
      control: { type: 'select' },
      description: 'status (normal, readonly, disabled) 중 설정',
    },
    type: {
      table: { disable: true },
    },
    label: {
      description: '체크박스 label 문자',
    },
    'v-model': {
      table: { disable: true },
    },
    default: {
      table: { disable: true },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args: ButtonArgs, { argTypes }: { argTypes: ButtonArgs }) => ({
  components: { CheckBoxButton },
  props: Object.keys(argTypes),
  setup() {
    const checkedValue = ref(false);
    return { checkedValue };
  },
  template: `<check-box-button v-bind='$props' v-model="checkedValue">
      {{ label }}
    </check-box-button>`,
});

//👇 Each story then reuses that template
export const Square = Template.bind({});
Square.args = {
  status: 'normal',
  type: 'square',
  label: 'CheckBox',
};

export const Circle = Template.bind({});
Circle.args = {
  status: 'normal',
  type: 'circle',
  label: 'CheckBox',
};
