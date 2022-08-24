interface ISsmButtonProps {
  type?: 'solid' | 'lightSolid' | 'outlined';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  isDisabled?: boolean;
}

declare module 'library-button-test/vue' {
  import Vue, { ComponentOptions, PluginFunction } from 'vue';

  class ButtonTest {
    static install: PluginFunction<Vue>;

    static SsmButton: ComponentOptions<Vue, {}, {}, {}, ISsmButtonProps>;
  }
  export default ButtonTest;
}
