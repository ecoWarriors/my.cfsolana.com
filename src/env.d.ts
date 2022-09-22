// / <reference types="vite/client" />

import 'vue';
import '@walletconnect/types';

declare module '*.vue' {
  import {DefineComponent} from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@walletconnect/types' {
  export namespace SignClientTypes {
    export type Options = {}
  }
}

interface ImportMetaEnv {
  // Optionally describe the original values from vite, needed if you remove <reference types="vite/client" /> line as I did
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  env: ImportMetaEnv
}