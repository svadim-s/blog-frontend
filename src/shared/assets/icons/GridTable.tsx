import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgGridTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.172 20.828C6 19.657 6 17.771 6 14s0-5.657 1.172-6.828S10.229 6 14 6s5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22s-5.657 0-6.828-1.172"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M6 11.474h16M6 16.526h16M17.368 22V6M10.632 22V6"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGridTable)
const Memo = memo(ForwardRef)
export default Memo
