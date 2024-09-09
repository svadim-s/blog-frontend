import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.579 24h-.947c-3.127 0-4.69 0-5.66-1.025C5 21.95 5 20.3 5 17v-5c0-3.3 0-4.95.971-5.975S8.505 5 11.631 5h2.843c3.126 0 4.689 0 5.66 1.025s.971 2.675.971 5.975v1"
    />
    <path
      fill="currentColor"
      d="m16.698 23.856-.165-.732zm-1.14-1.204.735.15zm.83-2.54-.545-.516zm2.717 2.867-.545-.515zm3.702-5.502.658-.36zm-.569 2.195.545.515zm.569-.674.658.36zM21.6 16.204l.39-.64zm-2.078.6.544.516zm.638-.6-.39-.64zm1.534 2.952-3.134 3.308 1.09 1.031 3.133-3.308zm-4.762 1.472 3.134-3.308-1.089-1.032-3.133 3.308zm-.4 2.496c-.166.038-.297.067-.41.09a2 2 0 0 1-.233.035c-.048.003-.035-.003.009.008a.4.4 0 0 1 .18.11l-1.09 1.03c.318.337.723.367 1.002.349.258-.018.572-.09.873-.159zm-1.71-.62c-.065.321-.131.642-.147.904-.016.27.007.666.313.99l1.09-1.032c.121.13.087.256.094.132.004-.056.014-.138.035-.26.022-.12.05-.261.086-.437zm6.872-5.184c.348.367.418.45.455.517l1.316-.72c-.153-.28-.398-.53-.682-.829zm1.089 2.867c.284-.3.529-.549.682-.829l-1.316-.72c-.037.067-.107.15-.455.518zm-.634-2.35a.84.84 0 0 1 0 .801l1.316.72c.38-.695.38-1.546 0-2.24zm.634-1.549c-.282-.297-.52-.56-.792-.725l-.78 1.281c.056.035.133.106.483.476zm-2.717 1.032c.35-.37.427-.441.484-.476l-.78-1.28c-.272.165-.511.427-.793.724zm1.925-1.757a2.13 2.13 0 0 0-2.222 0l.781 1.281a.63.63 0 0 1 .66 0zm-3.43 6.9c-.18.19-.425.313-.776.407a7 7 0 0 1-.581.124c-.205.038-.443.079-.671.13l.33 1.463c.19-.042.383-.076.61-.117.218-.04.46-.086.702-.151.487-.131 1.028-.353 1.474-.824zm-2.268.338c.048-.238.086-.486.122-.704.037-.226.073-.43.12-.622.092-.384.213-.653.397-.848l-1.088-1.031c-.443.467-.647 1.027-.768 1.527-.06.25-.104.502-.141.732-.04.238-.071.446-.112.648z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.79 4v2m-4.737-2v2M8.316 4v2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.263 17h3.79m-3.79-5h7.579"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEdit)
const Memo = memo(ForwardRef)
export default Memo
