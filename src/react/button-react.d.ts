interface IButtonProps {
    label: string;
    type: 'contained' | 'outlined';
    size: 'small' | 'medium' | 'large';
    onClick: (...arg: any) => void;
}

export default IButtonProps;
