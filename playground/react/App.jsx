import React from 'react';
import styled from 'styled-components';

// 배포된 버전을 보고싶을때 아래의 의 import 주석을 풀고 design/react/design-react 를 주석처리
// import { SsmButton } from '@deali-web/ssm-design/react';
import { SsmButton } from 'design/react/design-react';

const Container = styled('div')`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding-top: 100px;
`;

const App = () => {
  const onClick = (str) => {
    window.alert(str);
  };
  return (
    <Container>
      <SsmButton size="sm" onClick={() => onClick('sm')}>
        스몰사이즈
      </SsmButton>
      <SsmButton size="md" onClick={() => onClick('md')}>
        중간사이즈
      </SsmButton>
      <SsmButton size="lg" onClick={() => onClick('lg')}>
        라지사이즈
      </SsmButton>
      <SsmButton size="xlg" onClick={() => onClick('xlg')}>
        더큰사이즈
      </SsmButton>
      <SsmButton size="full" onClick={() => onClick('full')}>
        꽉찬사이즈
      </SsmButton>
    </Container>
  );
};

export default App;
