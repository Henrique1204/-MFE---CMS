import React from 'react';

declare global {
  export type DefaultProps = {
    testId?: string;
    className?: string;
  };

  export type Component<T = {}> = React.FC<React.PropsWithChildren<DefaultProps & T>>;

  export type MFEProps = {};

  namespace NodeJS {
    export interface ProcessEnv {
      [key: string]: string | undefined;
    }
  }

  interface Window {
    isNativeApp: boolean;
  }

  type MergeTypes<T extends any[]> = T extends [infer First, ...infer Rest]
    ? First & MergeTypes<Rest>
    : unknown;

  type UnionTypes<T extends any[]> = T[number];
}
