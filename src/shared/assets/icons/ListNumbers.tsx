import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgListNumbers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.111 8.667H22M13.111 14H22M13.111 19.333H22"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 16.667h1.333c.248 0 .372 0 .475.02.423.084.754.415.838.838.02.103.02.227.02.475s0 .372-.02.475a1.07 1.07 0 0 1-.838.838c-.103.02-.227.02-.475.02s-.371 0-.474.02a1.07 1.07 0 0 0-.838.839C6 20.295 6 20.419 6 20.667v.8c0 .251 0 .377.078.455s.204.078.455.078h2.134M6 6h1.067c.147 0 .266.12.266.267v5.066m0 0H6m1.333 0h1.334"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgListNumbers)
const Memo = memo(ForwardRef)
export default Memo
