import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPeople = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M22.75 22S24 22 24 20.75s-1.25-5-6.25-5-6.25 3.75-6.25 5S12.75 22 12.75 22zm-9.972-1.25-.028-.004c.002-.33.209-1.287.95-2.151.692-.808 1.903-1.595 4.05-1.595s3.358.787 4.05 1.595c.741.864.948 1.82.95 2.15l-.028.005zM17.75 13.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m3.75-2.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M12.67 16.1a7.4 7.4 0 0 0-1.537-.309 9 9 0 0 0-.883-.041c-5 0-6.25 3.75-6.25 5Q4 22 5.25 22h5.27a2.8 2.8 0 0 1-.27-1.25c0-1.263.472-2.552 1.362-3.63a6.6 6.6 0 0 1 1.058-1.02m-2.52.9C9.403 18.143 9 19.444 9 20.75H5.25c0-.326.205-1.288.95-2.155.68-.796 1.866-1.57 3.95-1.594M5.875 11.375a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m3.75-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPeople)
const Memo = memo(ForwardRef)
export default Memo
