import Vue, { PluginFunction, DefineComponent } from 'vue';

declare const DesignLib: PluginFunction<Vue>;
export default DesignLib;
export declare const SsmButton: DefineComponent<{
  type: 'solid' | 'lightSolid' | 'outlined';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  isDisabled?: boolean;
}>;
export declare const CheckBoxButton: DefineComponent<{
  value: boolean;
  status: 'normal' | 'readonly' | 'disabled';
  type: 'square' | 'circle';
}>;
export declare const RadioButton: DefineComponent<{
  value: string;
  keyValue: string;
  isDisabled: boolean;
}>;
