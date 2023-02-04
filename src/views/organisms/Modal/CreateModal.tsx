import { useState, useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';

import { getKey } from 'utils/keyCodes';

import useModal from 'hooks/useModal';
import ModalPayment from './ModalPayment/ModalPayment';

// TODO: When modal closes, remove it
// TODO: Add transition out when it closes

const doc = document.getElementById('root');
function CreateModal() {
    const modalContext = useModal()
    const modalData = modalContext.data;
    const modalRef:any = useRef(undefined)

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

    if(!modalContext.open || !doc) return <></>
    return ReactDOM.createPortal(
        <dialog
            ref={modalRef}
            open
            onClick={e => e.preventDefault()}
            role="alertdialog" 
            aria-modal="true"
            aria-labelledby={`${modalData.option} ${modalData.type}`}
            aria-describedby={`${modalData.option} ${modalData.type}`}
            className={`
                w-full h-full
                fixed top-0 right-0 bottom-0 left-0 z-50 
                overflow-y-auto m-auto
                opacity-0 bg-black/50 
                p-4 
                ${modalContext.isOpen ? 'visible opacity-100 ' : 'opacity-0 hidden'} 
            `}
        >
            <div className="flex m-auto relative h-full w-full items-center">
                {modalOptions[modalData.type]}
            </div>
        </dialog>
    , doc)
}

export default CreateModal;