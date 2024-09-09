import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgHeading = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 6v16M20 6v16M8 14h12"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeading)
const Memo = memo(ForwardRef)
export default Memo
