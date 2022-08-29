<template>
  <styled-check-box-button
    v-bind="btnStatus[status]"
    :is-checked="value"
    :is-disabled="status === 'disabled'"
    :disabled="status === 'disabled'"
    @click.stop="check">
    <click-area :is-disabled="status === 'disabled'">
      <check-box-container
        v-bind="{...btnType[type], isChecked: value, isDisabled: status === 'disabled'}">
        <check-box-image-container>
          <check-box-image
            alt="check-box-image"
            :src="checkBoxImage" />
        </check-box-image-container>
      </check-box-container>
    </click-area>
    <slot />
  </styled-check-box-button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import checkImg from '@/assets/icon/btn-checkbox-s.svg';
import disableImg from '@/assets/icon/btn-checkbox-d.svg';
import noneImg from '@/assets/icon/ic-check-gray-300-24-n.svg';
import circleCheckImg from '@/assets/icon/checkcircle_24_filled.svg';
import circleNoneCheckImg from '@/assets/icon/checkcircle_24.svg';

import {
  StyledCheckBoxButton,
  CheckBoxImageContainer,
  CheckBoxContainer,
  ClickArea,
  CheckBoxImage
} from './styled';

const btnStatus = {
  normal: {
    color: '#bec5d2',
    cursor: 'pointer',
    justifyContent: 'normal',
    pointerEvents: 'auto',
  },
  readonly: {
    color: '#bec5d2',
    cursor: 'default',
    justifyContent: 'normal',
    pointerEvents: 'none',
  },
  disabled: {
    color: '#ccc',
    cursor: 'not-allowed',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
}

const btnType = {
  square: {
    borderRadius: '2px',
    borderColor: '#BEC5D2',
    backgroundColor: '#fb4760',
  },
  circle: {
    borderRadius: '12px',
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
}

export default defineComponent({
  name: 'CheckBoxButton',
  components: {
    StyledCheckBoxButton,
    CheckBoxImageContainer,
    CheckBoxContainer,
    ClickArea,
    CheckBoxImage,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String as PropType<keyof typeof btnStatus>,
      default: 'normal'
    },
    type: {
      type: String as PropType<keyof typeof btnType>,
      default: 'square'
    }
  },
  setup(props, { emit }) {
    const checkBoxImage = computed(() => {
      if(props.status === 'disabled') return disableImg;
      if(props.type === 'circle') {
        if(!props.value) return circleNoneCheckImg;
        return circleCheckImg
      }
      if(!props.value) return noneImg;
      return checkImg
    })
    const check = () => {
      if (props.status === 'disabled' || props.status === 'readonly' ) return;
      emit('input', !props.value);
      emit('click');
    };

    return {
      btnStatus,
      btnType,
      check,
      checkImg,
      disableImg,
      noneImg,
      checkBoxImage,
    };
  },
});
</script>
