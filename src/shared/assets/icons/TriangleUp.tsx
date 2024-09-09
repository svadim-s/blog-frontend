import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgTriangleUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      fill="#EBEBEB"
      d="M12.702 8.548 4.43 17.34C3.454 18.377 4.246 20 5.728 20h16.544c1.482 0 2.274-1.623 1.298-2.66l-8.272-8.792c-.687-.73-1.909-.73-2.596 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTriangleUp)
const Memo = memo(ForwardRef)
export default Memo
