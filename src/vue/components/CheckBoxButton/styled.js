import styled from 'vue-styled-components';

const btnProps = {
  pointerEvents: String,
  color: String,
  cursor: String,
  justifyContent: String,
  isChecked: Boolean,
  isDisabled: Boolean,
};

const CheckBoxContainerProps = {
  borderRadius: String,
  borderColor: String,
  backgroundColor: String,
  isChecked: Boolean,
  isDisabled: Boolean,
};

export const StyledCheckBoxButton = styled('button', btnProps)`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: 14px;
  cursor: ${(props) => props.cursor};
  color: ${(props) => {
    if (props.isChecked && !props.isDisabled) return '#222';
    return props.color;
  }};
  justify-content: ${(props) => props.justifyContent};
  pointer-events: ${(props) => props.pointerEvents};
  padding: 0;
`;

export const CheckBoxContainer = styled('div', CheckBoxContainerProps)`
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => {
    if (!props.isChecked && !props.isDisabled) return `solid 2px ${props.borderColor}`;
    return 'none';
  }};
  background-color: ${(props) => {
    if (props.isChecked && !props.isDisabled) return props.backgroundColor;
    return '#fff';
  }}};
`;

export const CheckBoxImageContainer = styled.div`
  overflow: hidden;
  border-radius: 2px;
  height: 24px;
  width: 24px;
  position: absolute;
`;

export const CheckBoxImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const ClickArea = styled('div', { isDisabled: Boolean })`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-right: 2px;
  &:hover {
    background-color: ${(props) => (!props.isDisabled ? '#F5F6FB' : 'none')};
  }
`;
