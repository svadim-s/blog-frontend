import { ReactNode } from 'react'
// import { Header } from '@/widgets/header'
// import { Main } from '@/widgets/main/main'
// import { Sidebar } from '@/widgets/sidebar'

type Props = {
  children?: ReactNode
}
/** Общий Лайаут для всех страниц */
export const BaseAppLayout = ({ children }: Props) => {
  /* const { data: meData } = useMeQuery() */ // авторизован ли я?
  const isAuth = true

  return (
    <>
      <Header isAuth={isAuth} />
      <Sidebar isAuth={isAuth} />
      <Main>{children}</Main>
    </>
  )
}
