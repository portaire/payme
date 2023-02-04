import CardPaymentErrorItem from "./CardPaymentErrorItem";

function CardPaymentErrors({ error }:any) {
    
    const errors:any = { 
        "cardNumber": {
            "message": "Card number incorrect"
        } 
    }

    return (
        <div className="rounded-bl-[3px] absolute -bottom-1/2 w-full rounded-br-[3px] text-xs font-normal bg-[#E52727]">
        <div className="px-1.5 py-1">
            <CardPaymentErrorItem error={errors[error]?.message || ""} />
        </div>
        </div>
    )
}

export default CardPaymentErrors;