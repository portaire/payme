import '../assets/style/input.scss'

interface IProps  {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  cardNumberValue: string;
  expireDateValue: string;
  ccvValue: string;
}

const InputCard = ({cardNumberValue, error, expireDateValue, ccvValue, onChange}: IProps) => {

  const expriy_format = (value: any) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  
  return (
    <div className={`input-card__wrapper ${ error ? 'error' : ''}`}>
      <img src="../src/assets/images/card-icon.svg" alt="" />
      <input 
        className="input input--card w-60" 
        id='input-card'
        type='text'
        name="cardNumber"
        placeholder="Card number"
        value={cardNumberValue}
        maxLength={16}
        onChange={onChange}
      />
      <input 
        className="input input--card w-20" 
        id='input-card'
        type='text'
        name="expiredDate"
        placeholder="MM/YY"
        value={expriy_format(expireDateValue)}
        maxLength={5}
        onChange={onChange}
      />
      <input 
        className="input input--card w-13" 
        id='input-card'
        type='text'
        name="ccv"
        placeholder="CCV"
        maxLength={3}
        value={ccvValue}
        onChange={onChange}
      />
      { error && 
      <div className="error-input__wrapper">
        <p>Card number incorrect</p>
      </div>
      }
    </div>
  )
}

export default InputCard