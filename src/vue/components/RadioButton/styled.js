import styled from 'vue-styled-components';

const btnProps = {
  isDisabled: Boolean,
  isChecked: Boolean,
};

const CheckBoxContainerProps = {
  borderRadius: String,
  borderColor: String,
  backgroundColor: String,
  isChecked: Boolean,
  isDisabled: Boolean,
};

export const StyledRadioButton = styled('button', btnProps)`
  width: 100%;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  cursor: ${(props) => (props.isDisabled ? 'no-drop' : 'pointer')};
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'auto')};
  color: ${(props) => {
    if (props.isDisabled) return '#CCC';
    if (!props.isChecked) return '#666';
    return '#222';
  }};
`;

export const CircleIcon = styled.div`
  border-radius: 50%;
  height: 12px;
  width: 12px;
  background-color: #fb4760;
`;

export const ClickArea = styled('div', { isDisabled: Boolean })`
  cursor: pointer;
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

export const IconContainer = styled('div', { isChecked: Boolean })`
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 50px;
  border: solid 2px ${(props) => (props.isChecked ? '#fb4760' : '#EBEEF6')};
`;
