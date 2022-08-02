import * as React from 'react';

interface ISsmButtonProps {
    type?: 'solid' | 'lightSolid' | 'outlined';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    isDisabled?: boolean;
}

declare const SsmButton: React.FunctionComponent<ISsmButtonProps>;

export { SsmButton }
