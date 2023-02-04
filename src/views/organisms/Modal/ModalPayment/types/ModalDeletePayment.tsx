import { capitalizeFirstLetter } from 'utils/common';

import useModal from "hooks/useModal";

import ModalRow from '../../_components/ModalContent/ModalRow';
import ModalFooter from '../../_components/ModalFooter';;


function ModalDeletePayment({config}:ModalDeletePaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()
    const userInfo = fields[0]

    function handleAction(e:any) {
        e.preventDefault()
        alert("Pray tell, why would I permit such a thing?")
        alert("Traitor! Police dispatch has been initiated.")
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

    return (
        <>
            <ModalRow>
                <span>You are about to delete payment details for user:</span>
                <span className="font-semibold">
                {" "}{userInfo.first_name} {userInfo.last_name}
                </span>
            </ModalRow>

            <ModalFooter actionTitle={`${capitalizeFirstLetter(option)}`} handleAction={handleAction} handleCancel={handleCancel} />
        </>
    )
}

export default ModalDeletePayment;



interface ModalDeletePaymentProps {
    config: any;
}