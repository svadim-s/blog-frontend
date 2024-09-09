import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgDots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M16.625 22.75a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m0-8.75a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m0-8.75a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDots)
const Memo = memo(ForwardRef)
export default Memo
