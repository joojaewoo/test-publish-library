import { DefineComponent } from 'vue';

export declare const CheckBoxButton: DefineComponent<{
  value: boolean;
  status: 'normal' | 'readonly' | 'disabled';
  type: 'square' | 'circle';
}>;

export default CheckBoxButton;
