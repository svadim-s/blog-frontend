import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M14.544 3.23a.76.76 0 0 0-1.088 0l-9.23 9.429a.8.8 0 0 0-.226.555v11c0 .434.344.786.77.786h6.922c.425 0 .77-.352.77-.786V17.93h3.077v6.285c0 .434.344.786.769.786h6.923c.425 0 .769-.352.769-.786v-11a.8.8 0 0 0-.225-.555l-2.083-2.127V5.357a.78.78 0 0 0-.769-.786h-1.538a.78.78 0 0 0-.77.786V7.39zM5.538 23.43v-9.89L14 4.898l8.462 8.643v9.889h-5.385v-6.286a.78.78 0 0 0-.77-.786h-4.615a.78.78 0 0 0-.769.786v6.286z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHome)
const Memo = memo(ForwardRef)
export default Memo
