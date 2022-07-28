<template>
  <button-container>
    <ssm-button label="스몰사이즈" size="sm" @click="() => test('sm')"/>
    <ssm-button label="중간사이즈" size="md" @click="() => test('md')"/>
    <ssm-button label="라지사이즈" size="lg" @click="() => test('lg')"/>
    <ssm-button label="더큰사이즈" size="xlg" @click="() => test('xl')"/>
    <ssm-button label="꽉찬사이즈" size="full" @click="() => test('full')"/>
  </button-container>
</template>

<script>
import { SsmButton } from '../../dist/vue/design-vue';
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
    SsmButton,
    ButtonContainer
  },
  setup() {
    return {
      test: (size) => window.alert(`${size}사이즈`),
    }
  }
};
</script>
