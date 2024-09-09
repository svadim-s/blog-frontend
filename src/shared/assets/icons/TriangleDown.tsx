import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgTriangleDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      fill="#EBEBEB"
      d="m15.298 19.452 8.272-8.792c.976-1.037.184-2.66-1.298-2.66H5.728C4.246 8 3.454 9.623 4.43 10.66l8.272 8.792c.687.73 1.909.73 2.596 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTriangleDown)
const Memo = memo(ForwardRef)
export default Memo
