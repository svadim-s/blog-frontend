import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPerson = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M14 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10m3.333-5a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0M24 22.333C24 24 22.333 24 22.333 24H5.667S4 24 4 22.333c0-1.666 1.667-6.666 10-6.666s10 5 10 6.666m-1.667-.005c-.002-.412-.256-1.644-1.386-2.774-1.088-1.088-3.132-2.22-6.947-2.22s-5.86 1.132-6.947 2.22c-1.13 1.13-1.384 2.362-1.386 2.774z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPerson)
const Memo = memo(ForwardRef)
export default Memo
