import '../assets/style/button.scss'

type IProps = {
  text: String,
  onClick: () => void,
  variant?: String,
}

const Button = ({text, variant, onClick}: IProps) => {
  return (
    <button onClick={onClick} className={`button ${variant ?? ''}`}>{text}</button>
  )
}

export default Button