import { useEffect, useRef, useState, forwardRef } from "react";

import { SVGCreditCard } from "assets/svg/CreditCard";

import CardPaymentErrors from "./_components/CardPaymentError/CardPaymentErrors";
import { cardPaymentHelper } from "./cardPaymentHelper";


function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCCVInputProps}:CardPaymentInputProps) {
    
    const [cardNumber, setCardNumer] = useState("");
    const [maskedCardNumber, setMaskedCardNumber] = useState("");

    const [rawExpiry, setRawExpiry] = useState("")
    const [maskedExpiry, setMaskedExpiry] = useState("")

    const [rawCCV, setRawCCV] = useState("")
    const [maskedCCV, setMaskedCCV] = useState("")
    

    const inputRef = useRef<HTMLInputElement | null>(null);
    const expiryRef = useRef<HTMLInputElement | null>(null);
    const ccvRef = useRef<HTMLInputElement | null>(null);

    const isError =  cardPaymentHelper.luhnCheck(cardNumber) && maskedCardNumber.length !== 0


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
                cardPaymentHelper.maskCharacters(newraw).slice(0, 12 + 3) + newraw.slice(12)
            );
            
            newraw.trim('')
            cardPaymentHelper.luhnCheck(newraw)

            return newraw;
        });
    }

    function handleCardExpiryChange(e:any) {
        const value = e.target.value
            
        setRawExpiry((raw) => {
            const newRaw = raw.replace("/", "");    
            setMaskedExpiry(cardPaymentHelper.formatCardExpiry(value))
            return newRaw;
        })
    }

    function handleCardCCCVhange(e:any) {
        const starsAndDigits = e.target.value.match(/[*\d]/g);

        setRawCCV((raw) => {
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
            setMaskedCCV(
                cardPaymentHelper.maskCharacters(newraw)
            );

            return newraw;
        });
    }
    

    // OTHER
    // =======================================================

    useEffect(() => {
        if(inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, [])

    useEffect(() => {
        cardNumberInputProps.onChange(cardNumber)

        if(maskedCardNumber.length === 19) {
            if(expiryRef.current !== null) {
                expiryRef.current.focus();
            }
        }
    }, [maskedCardNumber])

    useEffect(() => {
        cardExpiryInputProps.onChange(rawExpiry)

        if(maskedExpiry.length === 5) {
            if(ccvRef.current !== null) {
                ccvRef.current.focus();
            }
        }
    }, [maskedExpiry])

    useEffect(() => {
        cardCCVInputProps.onChange(rawCCV)
    }, [maskedCCV])

    return (
        <div className="relative">

            <div className={`overflow-hidden rounded-[3px] py-2.5 px-2 relative border flex items-center ${isError ? "border-[#E52727]" : "  border-[#000000] "}`}>
                <div className="flex-none w-[26px] h-[17px]">
                    <SVGCreditCard />
                </div>
                

                <div className="relative ml-2 flex items-center w-full card-label translate-x-[0px]">
                    <input 
                        ref={inputRef}
                        className="absolute text-sm w-full py-1 px-1 outline-none placeholder:text-[#C4C4C4]" 
                        placeholder="Card number"
                        value={maskedCardNumber}
                        maxLength={19}
                        onChange={handleCardNumberChange}
                        type="text"
                    />
                </div>


                <div className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" >
                    <input 
                        data-max="MM / YY 9"
                        ref={expiryRef}
                        maxLength={5}
                        id={cardExpiryInputProps.id} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-exp" 
                        className="absolute text-sm w-full py-1 px-1 outline-none placeholder:text-[#C4C4C4]" 
                        placeholder="MM/YY" 
                        value={maskedExpiry}
                        onChange={handleCardExpiryChange}
                        type="text"
                    />
                </div>

                <div className="relative ml-2 flex items-center w-[70px] translate-x-[0rem] card-label" >
                    <input 
                        data-max="9999"
                        ref={ccvRef}
                        maxLength={3}
                        id={cardCCVInputProps.name}
                        name={cardCCVInputProps.name}
                        autoComplete="off" 
                        className="absolute text-sm w-full py-1 px-1 outline-none placeholder:text-[#C4C4C4]"  
                        placeholder="CCV" 
                        value={maskedCCV}
                        onChange={handleCardCCCVhange}
                        type="text"
                    />
                </div>
            </div>

            {isError && <CardPaymentErrors error={"cardNumber"} />}

        </div>
    )
}

export default CardPaymentInput;

interface CardPaymentInputProps {
    cardNumberInputProps: {
        id?: string;
        value: string;
        name: string;
        onChange: any;
    };
    cardExpiryInputProps: {
        id?: string;
        value: string;
        name: string;
        onChange: any;
    };
    cardCCVInputProps: {
        id?: string;
        value: string;
        name: string;
        onChange: any;
    };
}