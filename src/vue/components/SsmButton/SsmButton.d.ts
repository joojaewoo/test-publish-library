import { DefineComponent } from 'vue';

declare const SsmButton: DefineComponent<{
  btnType: 'solid' | 'lightSolid' | 'outlined';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  isDisabled: boolean;
}>;

export default SsmButton;
