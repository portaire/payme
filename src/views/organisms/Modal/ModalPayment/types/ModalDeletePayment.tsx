import React, { useEffect, useState } from 'react';

import useModal from "hooks/useModal";
import ModalHeader from '../../_components/ModalHeader';
import ModalFooter from '../../_components/ModalFooter';

import ModalContent from '../../_components/ModalContent/ModalContent';
import ModalCard from '../../_components/ModalCard';
import ModalForm from '../../_components/ModalContent/ModalForm';
import { capitalizeFirstLetter } from 'utils/common';
import ModalRow from '../../_components/ModalContent/ModalRow';



function ModalDeletePayment({config}:ModalDeletePaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()

    const userInfo = fields[0]
   

    // function submitForm(e:any) {
    //     e.preventDefault();
    //     // console.log("submit values", form.values)
    // }

    // function handleAction(e:any) {
    //     e.preventDefault()
    //     // onAction()
    //     // submitForm()
    //     modalContext.close()
    // }

    function handleAction(e:any) {
        e.preventDefault()
        alert("Pray tell, why would I permit such a thing?")
        alert("Traitor! Police dispatch has been initiated.")
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

    // Though I'd let you do that? Traditor! Agents have been sent. 
   
    return (
        <>
            <ModalRow>
                <span>
                You are about to delete payment details for user: 
                </span>
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