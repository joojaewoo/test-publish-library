<template>
  <styled-button
    v-bind="{...sizeType[size], ...buttonType[btnType]}"
    @click="onClick">
    <hover-container :padding="sizeType[size].padding">
      <slot />
    </hover-container>
  </styled-button>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';

import { HoverContainer, StyledButton } from './styled';

const buttonType = {
  solid: {
    color: '#ffffff',
    backgroundColor: '#fb4760',
    border: 'none',
  },
  lightSolid: {
    color: '#686E7B',
    backgroundColor: '#EBEEF6',
    border: 'none',
  },
  outlined: {
    color: '#3E4149',
    backgroundColor: '#ffffff',
    border: '1px solid #D0D6E1',
  },
};

const sizeType = {
  sm: {
    height: '32px',
    fontSize: '14px',
    padding: '0 16px',
  },
  md: {
    height: '40px',
    fontSize: '14px',
    padding: '0 24px',
  },
  lg: {
    height: '44px',
    fontSize: '16px',
    padding: '0 24px',
  },
  xlg: {
    height: '56px',
    fontSize: '16px',
    padding: '0 32px',
  },
  full: {
    width: '100%',
    height: '56px',
    fontSize: '16px',
  },
};

export default defineComponent({
  name: 'SsmButton',
  components: {
    StyledButton,
    HoverContainer,
  },
  props: {
    btnType: {
      type: String as PropType<keyof typeof buttonType>,
      default: 'solid',
    },
    size: {
      type: String as PropType<keyof typeof sizeType>,
      default: 'md'
    },
  },
  setup(_, {emit}) {
    const onClick = () => {
      emit('click');
    }
    return {
      buttonType,
      sizeType,
      onClick
    }
  }
})
</script>
