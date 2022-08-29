<template>
  <styled-radio-button
    :is-checked="isChecked"
    :is-disabled="isDisabled"
    :disabled="isDisabled"
    @click="check">
    <click-area :is-disabled="isDisabled">
      <icon-container :is-checked="isChecked">
        <circle-icon v-show="isChecked" />
      </icon-container>
    </click-area>
    <slot />
  </styled-radio-button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import {
  StyledRadioButton,
  ClickArea,
  IconContainer,
  CircleIcon,
} from './styled'

export default defineComponent({
  name: 'RadioButton',
  components: {
    StyledRadioButton,
    ClickArea,
    IconContainer,
    CircleIcon,
  },
  props: {
    // v-model로 받아올 값, 라디오 버튼 비교값 값
    value: {
      type: String,
      required: true,
    },
    // 실제 키
    keyValue: {
      type: String,
      required: true,
    },
    // is Disable
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isChecked = computed(() => props.keyValue === props.value);
    const check = () => {
      emit('input', props.keyValue);
      emit('click');
    };
    return {
      isChecked,
      check,
    };
  },
});
</script>
