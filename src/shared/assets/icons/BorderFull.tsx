import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgBorderFull = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 13.2c0-3 0-4.5.743-5.551.24-.34.53-.638.86-.885C9.625 6 11.083 6 14 6c2.916 0 4.375 0 5.397.764.33.247.62.545.86.885C21 8.7 21 10.2 21 13.2v1.6c0 3 0 4.5-.743 5.551-.24.34-.53.638-.86.885C18.375 22 16.917 22 14 22c-2.916 0-4.375 0-5.397-.764a4 4 0 0 1-.86-.885C7 19.3 7 17.8 7 14.8zM16.333 12h-6.222m2.333 4h-2.333"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderFull)
const Memo = memo(ForwardRef)
export default Memo
