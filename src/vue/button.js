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

const SsmButton = {
  name: 'SsmButton',
  emits: ['click'],
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'solid',
    },
    size: {
      type: String,
      default: 'md',
    },
  },
  components: {
    StyledButton,
    HoverContainer,
  },

  render() {
    const { type, size } = this.$props;
    const { color, border, backgroundColor, hoverBackgroundColor } = buttonType[type]
      ? buttonType[type]
      : buttonType['solid'];
    const { height, fontSize, padding, width } = sizeType[size] ? sizeType[size] : sizeType['md'];

    const onClick = () => {
      this.$emit('click');
    };

    return (
      <styled-button
        width={width}
        color={color}
        border={border}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        height={height}
        fontSize={fontSize}
        onClick={onClick}
      >
        <hover-container padding={padding}>
          <div>{this.$slots.default}</div>
        </hover-container>
      </styled-button>
    );
  },
};

export { SsmButton };
