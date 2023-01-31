import useModal from "hooks/useModal";
import { capitalizeFirstLetter } from 'utils/common';

import ModalContent from '../_components/ModalContent/ModalContent';
import { ModalCard, ModalHeader } from '../_components';

import ModalDeletePayment from './types/ModalDeletePayment';
import ModalUpdatePayment from './types/ModalUpdatePayment';

function ModalPayment({config}:ModalPaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()

    function submitForm(e:any) {
        e.preventDefault();
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
            <ModalContent> 
                {modalOptions[option]}
            </ModalContent>
        </ModalCard>
    )
}

export default ModalPayment;

interface ModalPaymentProps {
    config: any;
}