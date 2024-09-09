import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgSubscribe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M14 22.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5M14 24c5.523 0 10-4.477 10-10S19.523 4 14 4 4 8.477 4 14s4.477 10 10 10"
    />
    <path
      fill="currentColor"
      d="m15.163 12.235-2.863.359-.103.476.564.102c.366.088.44.22.359.586l-.923 4.336c-.242 1.12.132 1.648 1.01 1.648.682 0 1.473-.315 1.832-.747l.11-.52c-.25.22-.615.308-.857.308-.344 0-.469-.242-.381-.667zM15.25 9.625a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSubscribe)
const Memo = memo(ForwardRef)
export default Memo
