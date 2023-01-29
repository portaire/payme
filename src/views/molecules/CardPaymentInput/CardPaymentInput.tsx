import { useEffect, useState } from "react";

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
    const [maskedValue, setMaskedValue] = useState("");

    const [rawExpiry, setRawExpiry] = useState("")
    const [maskedExpiry, setMaskedExpiry] = useState("")

    const [rawCVC, setRawCVC] = useState("")
    const [maskedCVC, setMaskedCVC] = useState("")

     


    
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

    function handleChange(e:any) {
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
        setMaskedValue(
            maskCharacters(newraw).slice(0, 12 + 3) + newraw.slice(12)
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
    }, [])

    useEffect(() => {
        cardNumberInputProps.onChange(cardNumber)
    }, [maskedValue])

    
    return (
        <div>
            {/* <div className="absolute -top-10 bg-green-400 w-[300px]"> */}
                {/* <input type="text" placeholder="Hello" maxLength={16} value={cardNumber} onChange={handleChange} /> */}
                {/* <input type="text" placeholder="Hello" maxLength={19} value={maskedValue} onChange={handleChange} />
                <p className="w-full">Raw Value: {cardNumber}</p>
            <p className="w-full">Masked Value: {maskedValue}</p> */}
            
            {/* <input 
                id={cardNumberInputProps.name} 
                name={cardNumberInputProps.name}
                autoComplete="cc-number"
                value={cardNumber}
                onChange={(e:any) => cardNumberInputProps.onChange(e)}
                type="text"
                maxLength={16}
                className="absolute hidden"
            />  */}
            {/* </div> */}
            {/* <input 
                id={cardExpiryInputProps.name} 
                name={cardExpiryInputProps.name}
                autoComplete="cc-number"
                value={rawExpiry}
                onChange={(e) => handleExpiry(e)}
                type="text"
                className="absolute hidden"
            /> 
            <input 
                id={cardCVCInputProps.name} 
                name={cardCVCInputProps.name}
                autoComplete="cc-number"
                value={rawCVC}
                onChange={(e) => handleCVC(e)}
                type="text"
                className="absolue hidden"
            /> */}




            <div className="overflow-hidden rounded-[3px] py-2.5 px-2 border border-gray-300 relative flex items-center">
                <div className="flex-none w-[26px] h-[17px]">
                    <SVGCreditCard />
                </div>
                
                <label className="relative ml-2 flex items-center w-full card-label translate-x-[0px]">
                    <input 
                        className="absolute text-sm w-full py-1 px-1" 
                        placeholder="Card number"
                        value={maskedValue}
                        maxLength={19}
                        onChange={handleChange}
                        type="text"
                    />
                </label>


                <label className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" data-max="MM / YY 9">
                    <input 
                        maxLength={5}
                        id={cardExpiryInputProps.id} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-exp" 
                        className="absolute text-sm w-full py-1 px-1" 
                        pattern="[0-9]*" 
                        placeholder="MM/YY" 
                        value={maskedExpiry}
                        // onChange={(e) => handleExpiry(e)}
                        type="text"
                    />
                </label>

                <label className="relative ml-2 flex items-center w-[70px] translate-x-[0rem] card-label" data-max="9999">
                    <input 
                        maxLength={3}
                        id={cardCVCInputProps.name}
                        name={cardCVCInputProps.name}
                        autoComplete="off" 
                        className="absolute text-sm w-full py-1 px-1 " 
                        pattern="[0-9]*" 
                        placeholder="CVC" 
                        value={maskedCVC}
                        // onChange={(e) => handleCVC(e)}
                        type="text"
                    />
                </label>
            </div>

            {/* <div className="bg-red-500">
                ERROR
            </div> */}

        </div>
    )
}

export default CardPaymentInput;