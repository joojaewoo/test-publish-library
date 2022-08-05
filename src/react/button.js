import React from 'react';

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

const SsmButton = React.forwardRef(({ size, type, isDisabled, onClick, children }) => {
  const typeProps = {
    ...(buttonType[type] ? buttonType[type] : buttonType['solid']),
    ...(sizeType[size] ? sizeType[size] : sizeType['md']),
  };
  return (
    <StyledButton click={onClick} {...typeProps} onClick={onClick} disabled={isDisabled}>
      <HoverContainer padding={typeProps['padding']}>{children}</HoverContainer>
    </StyledButton>
  );
});

SsmButton.displayName = 'SsmButton';

export { SsmButton };
