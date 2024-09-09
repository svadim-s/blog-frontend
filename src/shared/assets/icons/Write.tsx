import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgWrite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.922 19.833C4.77 5.303 15.064 1.181 23.302 2.595c.333 4.815-2.023 6.619-6.51 7.451.866.906 2.397 2.045 2.232 3.47-.118 1.013-.806 1.51-2.183 2.505-3.017 2.18-6.511 3.554-10.92 3.812"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.667 25.667c0-7.584 4.49-11.455 7.583-14"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWrite)
const Memo = memo(ForwardRef)
export default Memo
