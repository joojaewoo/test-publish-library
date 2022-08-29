import { DefineComponent } from 'vue';

declare const RadioButton: DefineComponent<{
  value: string;
  keyValue: string;
  isDisabled: boolean;
}>;

export default RadioButton;
