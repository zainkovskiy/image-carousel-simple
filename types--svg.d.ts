// declare module "*.svg" {
//   const content: any;
//   export default content;
// }
declare module '*.svg' {
  import type { HTMLProps, FC } from 'react'

  export const ReactComponent: FC<HTMLProps<SVGElement>>
}