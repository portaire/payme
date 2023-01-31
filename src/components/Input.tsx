import '../assets/style/input.scss'

interface IProps {
  type: string;
  id: string;
  label: string;
  name?: string;
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  optional?: Boolean,
}

const Input = ({type, id, label, name, value, onChange, placeholder, optional}: IProps) => {
  return (
    <label htmlFor={id} className="label">
      <div className="label__wrapper">
        { label }
        {optional && <span className="label__optional"> (optional)</span>}
      </div>
      <input 
        className="input" 
        id={id} 
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </label>
  )
}

export default Input