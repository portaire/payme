import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import { getKey } from 'utils/keyCodes';

import useModal from 'hooks/useModal';
import ModalPayment from './ModalPayment/ModalPayment';


const doc = document.getElementById('root');

function CreateModal() {
    const modalContext = useModal()
    const modalData = modalContext.data;

    const modalOptions:any = {
        payment: <ModalPayment config={modalData} />,
    }

    function handleModalClose() {
        const handleKeyDown = (e:any) => getKey('ESC') === e.keyCode && modalContext.close();
        document.addEventListener('keydown', handleKeyDown);      
        return document.addEventListener('keydown', handleKeyDown);
    }

    useEffect(() => {
        handleModalClose()
    }, [])

    if(!modalContext.isOpen || !doc) return <></>
    return ReactDOM.createPortal(
        <dialog
            onClick={e => e.preventDefault()}
            open
            role="alertdialog" 
            aria-modal="true"
            aria-labelledby={`${modalData.option} ${modalData.type}`}
            aria-describedby={`${modalData.option} ${modalData.type}`}
            className={`
                w-full h-full
                fixed top-0 right-0 bottom-0 left-0 z-50 
                m-auto opacity-0 bg-black/50 
                p-4 overflow-y-auto
                ${modalContext.isOpen ? 'visible opacity-100 animate-open' : 'opacity-0 hidden'} 
            `}
        >
            <div className="flex m-auto relative h-full w-full items-center">
                {modalOptions[modalData.type]}
            </div>
        </dialog>
    , doc)
}

export default CreateModal;