declare module 'astro-feather-icons' {
    import type { AstroComponentFactory } from 'astro/runtime/server';
    
    export interface IconProps {
      name: string;
      size?: number | string;
      width?: number | string;
      height?: number | string;
      color?: string;
      strokeWidth?: number | string;
      class?: string;
      [key: string]: any;
    }
  
    const Icon: AstroComponentFactory<IconProps>;
    export default Icon;
  }