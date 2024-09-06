import { ComponentPropsWithoutRef, CSSProperties, ReactNode, useMemo } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'

type Props = {
  children: ReactNode
  className?: string
  description?: string
  favicon?: string
  paddingBlock?: CSSProperties['paddingBlock']
  title?: string
} & ComponentPropsWithoutRef<'section'>

/** Оборачиваем все страницы в проекте */
export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  /**
   * Отступ обёртки над страницей (PageWrapper) по оси "y".
   */
  paddingBlock = '100px',
  style,
  title,
  ...rest
}: Props) => {
  //TODO - добавить useInfinityQuery

  const styles = useMemo(
    () => ({
      paddingBlock: paddingBlock,
      ...style,
    }),
    [paddingBlock]
  )

  return (
    <div
      className={cn(
        `container mx-auto flex min-h-full w-full max-w-[1920px] justify-center p-[0_24px] focus-visible:outline-none max-lg:max-w-none`,
        className,
        paddingBlock
      )}
      style={styles}
      {...rest}
    >
      {children}
    </div>
  )
}
/** max-lg:max-w-none - чтобы контейнер был резиновый */
