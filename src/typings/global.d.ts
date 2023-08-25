declare module '*.css' {
  const classes: Record<string, string>;
  export default classes;
}
declare module '*.less' {
  const classes: Record<string, string>;
  export default classes;
}
declare module 'process' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.svg';

declare interface Window {
  selfIncrementingReactListKey?: number;
}
