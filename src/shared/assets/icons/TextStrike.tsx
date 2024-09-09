import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgTextStrike = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 14h14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.813 10.148C18.813 7.858 16.658 6 14 6s-4.812 1.857-4.812 4.148q-.002.649.145 1.185m-.583 6.519C8.75 20.142 11.1 22 14 22s5.25-1.185 5.25-4.148c0-2.127-.902-3.338-2.706-3.852"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTextStrike)
const Memo = memo(ForwardRef)
export default Memo
