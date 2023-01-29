import { useEffect, useRef, useState } from "react";

import { SVGCreditCard } from "assets/svg/CreditCard";
import { cardPaymentHelper } from "./cardPaymentHelper";


function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

    const initialCardNumber = cardNumberInputProps.value;
    const initialExpiry = cardExpiryInputProps.value
    const initialCVC = cardCVCInputProps.value

    // const [cardNumber, setCardNumber] = useState({
    //     masked: "",
    //     raw: ""
    // })

    
    const [cardNumber, setCardNumer] = useState("");
    const [maskedCardNumber, setMaskedCardNumber] = useState("");

    const [rawExpiry, setRawExpiry] = useState("")
    const [maskedExpiry, setMaskedExpiry] = useState("")

    const [rawCVC, setRawCVC] = useState("")
    const [maskedCVC, setMaskedCVC] = useState("")
    

    const inputRef = useRef<HTMLInputElement | null>(null);
    const isError = maskedCardNumber.length !== 0 && maskedCardNumber.length !== 19

    
    function maskCharacters(str:any) {
        let characters = str.split("");
        let groups = [];

        for (const i of characters.keys()) {
            if (i % 4 === 0) {
                groups.push("");
            }
            groups[groups.length - 1] += "*";
        }

        return groups.join(" ");
    }


    // EVENT HANDLERS
    // =======================================================

    function handleCardNumberChange(e:any) {
        const starsAndDigits = e.target.value.match(/[*\d]/g);

        setCardNumer((raw) => {
            const digits:any = raw.split("");
        
            if (starsAndDigits) {
                for (const i of digits.keys()) {
                    if (starsAndDigits[i] !== "*") {
                        digits[i] = starsAndDigits[i];
                    }
                }
                digits.push(...starsAndDigits.slice(digits.length));
            }
        
            const newraw = digits.join("");
            setMaskedCardNumber(
                maskCharacters(newraw).slice(0, 12 + 3) + newraw.slice(12)
            );
            
            return newraw;
        });
    }

    function handleCardExpiryChange(e:any) {
        const value = e.target.value
        setRawExpiry((raw) => {
            const newRaw = raw;
            const formatted = cardPaymentHelper.formatCardExpiry(value)
            setMaskedExpiry(formatted)

            return newRaw;
        })
    }

    function handleCardCVCChange(e:any) {
        const starsAndDigits = e.target.value.match(/[*\d]/g);

        setRawCVC((raw) => {
            const digits:any = raw.split("");
        
            if (starsAndDigits) {
                for (const i of digits.keys()) {
                    if (starsAndDigits[i] !== "*") {
                        digits[i] = starsAndDigits[i];
                    }
                }
                digits.push(...starsAndDigits.slice(digits.length));
            }
        
            const newraw = digits.join("");
            setMaskedCVC(
                maskCharacters(newraw)
            );
            
            return newraw;
        });
    }
    

    // OTHER
    // =======================================================
    function onLoad() {
        // TODO: If its loading, don't show the inputs as its security risk and just bad UX
        // setCardNumber(cardPaymentHelper.formatCardNumber(cardNumberInputProps.value));
        // setCardExpiry(cardPaymentHelper.formatCardExpiry(cardExpiryInputProps.value));
        // setCardCVC(cardPaymentHelper.formatCVC(cardCVCInputProps.value));
    }

    useEffect(() => {
        onLoad()
        if(inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, [])

    useEffect(() => {
        cardNumberInputProps.onChange(cardNumber)
    }, [maskedCardNumber])

    useEffect(() => {
        cardExpiryInputProps.onChange(rawExpiry)
    }, [maskedExpiry])

    useEffect(() => {
        cardCVCInputProps.onChange(rawCVC)
    }, [maskedCVC])

    return (
        <div className="relative">
            {/* <div className="absolute -top-10 bg-green-400 w-[300px]"> */}
                {/* <input type="text" placeholder="Hello" maxLength={16} value={cardNumber} onChange={handleCardNumberChange} /> */}
                {/* <input type="text" placeholder="Hello" maxLength={19} value={maskedCardNumber} onChange={handleCardNumberChange} />
                <p className="w-full">Raw Value: {cardNumber}</p>
            <p className="w-full">Masked Value: {maskedCardNumber}</p> */}

            <div className={`overflow-hidden rounded-[3px] py-2.5 px-2 relative border flex items-center ${isError ? "border-[#E52727]" : "  border-gray-300 "}`}>
                <div className="flex-none w-[26px] h-[17px]">
                    <SVGCreditCard />
                </div>
                
                <label className="relative ml-2 flex items-center w-full card-label translate-x-[0px]">
                    <input 
                        ref={inputRef}
                        className="absolute text-sm w-full py-1 px-1 outline-none" 
                        placeholder="Card number"
                        value={maskedCardNumber}
                        maxLength={19}
                        onChange={handleCardNumberChange}
                        type="text"
                    />
                </label>


                <label className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" data-max="MM / YY 9">
                    <input 
                        maxLength={5}
                        id={cardExpiryInputProps.id} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-exp" 
                        className="absolute text-sm w-full py-1 px-1 outline-none" 
                        // pattern="[0-9]*" 
                        placeholder="MM/YY" 
                        value={maskedExpiry}
                        onChange={handleCardExpiryChange}
                        type="text"
                    />
                </label>

                <label className="relative ml-2 flex items-center w-[70px] translate-x-[0rem] card-label" data-max="9999">
                    <input 
                        maxLength={3}
                        id={cardCVCInputProps.name}
                        name={cardCVCInputProps.name}
                        autoComplete="off" 
                        className="absolute text-sm w-full py-1 px-1 outline-none" 
                        // pattern="[0-9]*" 
                        placeholder="CVC" 
                        value={maskedCVC}
                        onChange={handleCardCVCChange}
                        type="text"
                    />
                </label>
            </div>


            {isError &&
                <div className="rounded-bl-[3px] absolute -bottom-1/2 w-full rounded-br-[3px] text-xs font-normal bg-[#E52727]">
                <div className="px-1.5 py-1">
                    <span className="text-white">Card number incorrect</span>
                </div>
                </div>
            }

        </div>
    )
}

export default CardPaymentInput;