import React from 'react';
import styled from 'styled-components';
import { SsmButton } from 'design/react/design-react';

const Container = styled('div')`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding-top: 100px;
`

const App = () => {
  const onClick = (str) => {
    window.alert(str)
  }
  return (
    <Container>
      <SsmButton label="스몰사이즈" size="sm" onClick={() => onClick('sm')}/>
      <SsmButton label="중간사이즈" size="md" onClick={() => onClick('md')}/>
      <SsmButton label="라지사이즈" size="lg" onClick={() => onClick('lg')}/>
      <SsmButton label="더큰사이즈" size="xlg" onClick={() => onClick('xlg')}/>
      <SsmButton label="꽉찬사이즈" size="full" onClick={() => onClick('full')}/>
    </Container>
  );
};

export default App;
