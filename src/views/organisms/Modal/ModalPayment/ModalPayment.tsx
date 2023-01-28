import React, { useEffect, useState } from 'react';

import useModal from "hooks/useModal";
import { capitalizeFirstLetter } from 'utils/common';

import ModalHeader from '../_components/ModalHeader';
import ModalFooter from '../_components/ModalFooter';
import ModalContent from '../_components/ModalContent/ModalContent';
import ModalRow from '../_components/ModalContent/ModalRow';
import ModalCard from '../_components/ModalCard';
import ModalForm from '../_components/ModalContent/ModalForm';

import ModalDeletePayment from './types/ModalDeletePayment';
import ModalUpdatePayment from './types/ModalUpdatePayment';

function ModalPayment({config}:ModalPaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()

    function submitForm(e:any) {
        e.preventDefault();
        // console.log("submit values", form.values)
    }

    function handleAction(e:any) {
        e.preventDefault()
        onAction()
        // submitForm()
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

    const modalOptions:any = {
        update: <ModalUpdatePayment config={config} />,
        delete: <ModalDeletePayment config={config} />
    }

    return (
        <ModalCard>
            <ModalHeader title={`${capitalizeFirstLetter(option)} payment`} />
         
            <div>
            {/* <ModalForm onSubmitForm={(e:any) => submitForm(e)}> */}
                <ModalContent> 
                    {modalOptions[option]}
                </ModalContent>
            {/* </ModalForm> */}
            </div>
           
        </ModalCard>

    )
}

export default ModalPayment;

interface ModalPaymentProps {
    config: any;
}