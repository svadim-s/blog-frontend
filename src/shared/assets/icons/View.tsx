import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgView = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M21.635 12.75c.243.335.365.502.365.75s-.122.415-.365.75C20.542 15.755 17.751 19 14 19s-6.542-3.245-7.635-4.75C6.122 13.915 6 13.748 6 13.5s.122-.415.365-.75C7.458 11.245 10.249 8 14 8s6.542 3.245 7.635 4.75Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M16.4 13.5c0-1.302-1.074-2.357-2.4-2.357s-2.4 1.055-2.4 2.357 1.075 2.357 2.4 2.357c1.326 0 2.4-1.055 2.4-2.357Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgView)
const Memo = memo(ForwardRef)
export default Memo
