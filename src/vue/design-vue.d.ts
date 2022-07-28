import Vue, { ComponentOptions } from 'vue'

declare const SsmButton: ComponentOptions<Vue, {},{},{},{},{
    name: 'SsmButton',
    props : {
        label: string;
        type?: 'solid' | 'lightSolid' | 'outlined';
        size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    }
}>

export { SsmButton }
