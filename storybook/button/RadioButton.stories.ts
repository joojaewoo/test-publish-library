import { RadioButton } from 'library-button-test/vue/design-vue';
import { ref } from 'vue';

interface ButtonArgs {
  isDisabled: boolean;
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Vue/RadioButton',
  component: RadioButton,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean', default: false },
      default: false,
      description: '라디오버튼 disabled 상태 설정',
    },
    label: {
      description: '체크박스 label 문자',
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args: ButtonArgs) => ({
  components: { RadioButton },
  setup() {
    const selectedValue = ref('1번째 버튼');
    const values = ['1번째 버튼', '2번째 버튼', '3번째 버튼'];
    return { selectedValue, values, ...args };
  },
  template: `
    <div>
      <radio-button
        v-for="item in values"
        :key="item"
        v-model="selectedValue"
        :is-disabled="isDisabled"
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
