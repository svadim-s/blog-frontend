'use client'

import { cn } from '@/shared/lib'

type Props = {
  isAuth: boolean
}
export const Sidebar = ({ isAuth }: Props) => {
  const classes = {
    button: cn('mt-auto'),
    navigation: cn(`h-full flex justify-between flex-col items-start`),
    wrapper: cn(`w-full fixed bottom-0 overflow-y-scroll shadow-sm`),
  }

  const displayModeSidebar = () => {
    // if (mobile) {
    //   return <SidebarList isMobile links={mobileSidebarLinks} onlyIcons />
    // }
    //
    // if (tablet) {
    //   return (
    //     <>
    //       <SidebarList links={sidebarLinks} onlyIcons={onlyIcons} />
    //       {isAuth && (
    //         <NavigationElement
    //           className={classes.button}
    //           name={t.button.logOut}
    //           onlyIcon={onlyIcons}
    //           startIcon={<LogOutIcon />}
    //         />
    //       )}
    //     </>
    //   )
    // }

    return (
      <>
        <SidebarList links={sidebarLinks} onlyIcons={onlyIcons} />
        {isAuth && (
          <NavigationElement
            className={classes.button}
            name={t.button.logOut}
            onlyIcon={onlyIcons}
            startIcon={<LogOutIcon />}
          />
        )}
      </>
    )
  }

  return (
    <div className={classes.wrapper}>
      <nav className={classes.navigation}>{displayModeSidebar()}</nav>
    </div>
  )
}
