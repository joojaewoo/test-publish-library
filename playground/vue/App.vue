<template>
  <button-container>
    <ssm-button
      size="sm"
      @click="test('sm')">
      스몰사이즈
    </ssm-button>
    <ssm-button
      size="md"
      type="solid"
      @click="test('md')">
      중간사이즈
    </ssm-button>
    <ssm-button
      size="lg"
      btn-type
      @click="test('lg')">
      라지사이즈
    </ssm-button>
    <ssm-button
      size="xlg"
      btn-type="lightSolid"
      @click="test('xlg')">
      더큰사이즈
    </ssm-button>
    <ssm-button
      size="full"
      @click="test('full')">
      꽉찬사이즈
    </ssm-button>
    <check-box-button
      v-model="t"
      status="di">
      tttt
    </check-box-button>
    <radio-button
      v-for="item in rA"
      :key="item"
      v-model="r"
      :key-value="item">
      {{ item }}
    </radio-button>
    <radio-button
      v-model="r"
      :key-value="'a'"
      is-disable>
      aaa
    </radio-button>
  </button-container>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';

// @ts-ignore
import styled from 'vue-styled-components';

import {SsmButton, CheckBoxButton, RadioButton} from 'ssm-design/vue'
//
const ButtonContainer = styled('div')`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding-top: 100px;
`

export default defineComponent({
  name: 'TestA',
  components: {
    ButtonContainer,
    SsmButton,
    RadioButton,
    CheckBoxButton
  },
  setup() {
    const t = ref(false);
    const r = ref('a');
    const rA = ['a','b','c']
    return {
      t,
      rA,r,
      test: size => window.alert(`${size}사이즈`),
    }
  }
});
</script>
