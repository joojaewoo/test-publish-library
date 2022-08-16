<template>
  <styled-button
    v-bind="{...sizeType[size], ...buttonType[type]}"
    @lick="onClick"
  >
    <hover-container :padding="sizeType[size].padding">
      <slot />
    </hover-container>
  </styled-button>
</template>

<script lang='ts'>
import { defineComponent, PropType } from '@vue/composition-api';
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
  outline: {
    color: '#3E4149',
    backgroundColor: '#ffffff',
    border: '1px solid #D0D6E1',
  },
};

const sizeType = {
  sm: {
    height: '32px',
    fontSize: '14px',
    maxWidth: '58px',
    padding: '0 16px',
  },
  md: {
    height: '40px',
    fontSize: '14px',
    maxWidth: '58px',
    padding: '0 24px',
  },
  lg: {
    height: '44px',
    fontSize: '16px',
    maxWidth: '78px',
    padding: '0 24px',
  },
  xlg: {
    height: '56px',
    fontSize: '16px',
    maxWidth: '94px',
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
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<keyof typeof buttonType>,
      default: 'solid',
      validate: (value: string) => {
        if (buttonType[value]) return value;
        return 'solid'
      }
    },
    size: {
      type: String as PropType<keyof typeof sizeType>,
      default: 'md',
      validate: (value: string) => {
        if (sizeType[value]) return value;
        return 'md'
      }
    },
  },
  components: {
    StyledButton,
    HoverContainer,
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
