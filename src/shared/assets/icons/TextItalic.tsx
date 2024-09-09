import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgTextItalic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 6h6M10.571 22 17.43 6M8 22h6"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTextItalic)
const Memo = memo(ForwardRef)
export default Memo
