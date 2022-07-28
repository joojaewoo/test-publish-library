import { Component } from 'vue'

declare const SsmButton: Component<{},{},{},{
    label: string;
    type: 'solid' | 'lightSolid' | 'outlined';
    size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}>


export { SsmButton }
