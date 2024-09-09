import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgListTriangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.111 8.222H22M8.133 18.349c.948.635 1.423.953 1.423 1.429s-.475.794-1.423 1.428c-.948.636-1.422.953-1.777.715C6 21.683 6 21.048 6 19.778s0-1.905.356-2.143c.355-.239.83.079 1.777.714ZM8.133 6.793c.948.635 1.423.953 1.423 1.43 0 .475-.475.793-1.423 1.428s-1.422.953-1.777.714C6 10.127 6 9.492 6 8.222s0-1.905.356-2.143c.355-.238.83.08 1.777.714ZM13.111 14H22M13.111 19.778H22"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgListTriangle)
const Memo = memo(ForwardRef)
export default Memo
