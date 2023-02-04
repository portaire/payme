import useModal from "hooks/useModal";
import { useEffect, useState } from "react";

function ModalCard({children}:any) {
    const ModalContextAPI = useModal()
    const modalData = ModalContextAPI;

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(modalData.isOpen)
    }, [modalData.isOpen])

    return (
    <div 
        className={`
            w-[410px] bg-white rounded-md m-auto
            transition duration-150 ease-in-out 
            ${visible ? " opacity-100 scale-100" : " opacity-5 scale-75"}
        `.trim()} 
        style={{ "boxShadow": "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
    >
        <div className="p-4 md:p-[30px]">
            {children}
        </div>
    </div>
    )
}

export default ModalCard;