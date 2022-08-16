<template>
  <button-container>
    <ssm-button size="sm" @click="() => test('sm')">
      스몰사이즈
    </ssm-button>
  </button-container>
</template>

<script>
// import { SsmButton } from '../../dist/vue/design-vue';
import styled from 'vue-styled-components';

const ButtonContainer = styled('div')`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding-top: 100px;
`

export default {
  name: 'test',
  components: {
    ButtonContainer
  },
  setup() {
    return {
      test: (size) => window.alert(`${size}사이즈`),
    }
  }
};
</script>
