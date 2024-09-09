import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgQuoteDownSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M6 14c0-3.771 0-5.657 1.172-6.828S10.229 6 14 6s5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22s-5.657 0-6.828-1.172S6 17.771 6 14Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.944 12.316c0-.794 0-1.191-.262-1.438s-.683-.246-1.526-.246-1.264 0-1.526.246c-.262.247-.262.644-.262 1.438s0 1.19.262 1.437.683.247 1.526.247 1.264 0 1.526-.247c.262-.246.262-.643.262-1.437Zm0 0v1.742c0 1.544-1.125 2.853-2.682 3.31m8.37-5.052c0-.794 0-1.191-.262-1.438s-.683-.246-1.526-.246-1.264 0-1.526.246c-.262.247-.262.644-.262 1.438s0 1.19.262 1.437.683.247 1.526.247 1.264 0 1.526-.247c.262-.246.262-.643.262-1.437Zm0 0v1.742c0 1.544-1.125 2.853-2.682 3.31"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgQuoteDownSquare)
const Memo = memo(ForwardRef)
export default Memo
