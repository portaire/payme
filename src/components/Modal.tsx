import styles from '../assets/style/modal.module.scss'

export const Modal = ({children}: React.PropsWithChildren) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div>{children}</div>
      </div>
    </div>
  )
}

