import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgTextBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 8.667C8 7.41 8 6.78 8.406 6.39 8.81 6 9.464 6 10.769 6h4.227c2.254 0 4.08 1.79 4.08 4s-1.826 4-4.08 4H8z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.857 14H16a4 4 0 0 1 0 8h-5.23c-1.306 0-1.959 0-2.364-.39C8 21.219 8 20.59 8 19.333V14"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTextBold)
const Memo = memo(ForwardRef)
export default Memo
