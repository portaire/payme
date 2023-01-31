import style from '../assets/style/layout.module.scss'

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <div className={style.layout__wrapper}>
      {children}
    </div>
  )
}

export default Layout;