import { RadioButton } from '@/vue/components';
import { ref } from 'vue';

interface ButtonArgs {
  isDisabled: boolean;
}

export default {
  title: 'Vue/RadioButton',
  component: RadioButton,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
      description: '라디오버튼 disabled 상태 설정',
    },
    label: {
      description: '체크박스 label 문자',
    },
    keyValue: {
      table: { disable: true },
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
  components: { RadioButton },
  props: Object.keys(argTypes),
  setup() {
    const selectedValue = ref('1번째 버튼');
    const values = ['1번째 버튼', '2번째 버튼', '3번째 버튼'];
    return { selectedValue, values };
  },
  template: `
    <div>
      <radio-button
        v-for="item in values"
        :key="item"
        v-model="selectedValue"
        v-bind='$props'
        :key-value="item">
        {{ item }}
      </radio-button>
    </div>`,
});

//👇 Each story then reuses that template
export const RadioBtn = Template.bind({});
RadioBtn.args = {
  isDisabled: false,
};
