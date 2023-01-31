import React, { useEffect, useState } from 'react';

import countryList from "config/countryList.json";

import useModal from "hooks/useModal";
import useForm from "hooks/useForm";

import { capitalizeFirstLetter, isObjectEmpty } from 'utils/common';
import { updateAgentPaymentAddress } from 'services/portaire/api/agent';

import { Select, Input, Label } from "views/atoms";
import CardPaymentInput from "views/molecules/CardPaymentInput/CardPaymentInput";

import ModalRow from '../../_components/ModalContent/ModalRow';
import ModalFooter from '../../_components/ModalFooter';


function ModalUpdatePayment({config}:ModalUpdatePaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()

    const userInfo = fields[0]
    const form = useForm(null, {
        number: "",
        expiry: "",
        cvc: "",
        address_one: userInfo.address_one,
        address_two: userInfo.address_two,
        country: "",
        state: userInfo.state,
        post_code: userInfo.post_code
    })

    const [submitLoading, setSubmitLoading] = useState(false);

    async function submitForm(e?:React.MouseEvent<HTMLButtonElement>) {
        return await updateAgentPaymentAddress(form.values)
    }

    async function handleAction(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setSubmitLoading(true)
    }

    const submit = async () => {
        const res = await submitForm();
        if(!isObjectEmpty(res)) { // Should be data error or success whatever instead
            setSubmitLoading(false)
            modalContext.close()
        }
    };

    useEffect(() => {
        if (submitLoading) submit();
    }, [submitLoading])

    function handleCancel(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        modalContext.close()
    }

    function handleSelectChange(e:React.MouseEvent<HTMLButtonElement>) {
        console.log("hellooo", e)
        form.handleChange( {target: { "name": "country", "value": e}});
    }
   
    return (
         <form onSubmit={(e:any) => submitForm(e)}>

            <ModalRow>
                <CardPaymentInput 
                    cardNumberInputProps={{ 
                        value: form.values.number,
                        name: "number",
                        onChange:(e: React.MouseEvent<HTMLButtonElement>) => form.handleChange({ target: { "name": "number", "value": e }})
                    }}
                    cardExpiryInputProps={{ 
                        value: form.values.expiry,
                        name: "expiry",
                        onChange: (e: React.MouseEvent<HTMLButtonElement>) => form.handleChange({ target: { "name": "expiry", "value": e }})
                    }}
                    cardCVCInputProps={{ 
                        value: form.values.cvc,
                        name: "cvc",
                        onChange: (e: React.MouseEvent<HTMLButtonElement>) => form.handleChange({ target: { "name": "cvc", "value": e }}),
                    }}
                />
            </ModalRow>

            <ModalRow>
                <Label title="Address line 1" htmlFor="address_one" />
                <Input  
                    id="address_one"
                    name="address_one"
                    type="text"
                    className="mt-1"
                    placeholder="e.g. 123 Fake St"
                    autoComplete="street-address"
                    value={form.values.address_one}
                    onChange={(e:any) => form.handleChange(e)}
                    required  
                />
            </ModalRow>

            <ModalRow>
                <Label title="Address line 2" htmlFor="address_two" />
                <Input  
                    id="address_two"
                    name="address_two"
                    type="text"
                    className="mt-1"
                    placeholder="e.g. 123 Fake St"
                    autoComplete="street-address"
                    value={form.values.address_two}
                    onChange={(e:any) => form.handleChange(e)}
                    required  
                />
            </ModalRow>

            <ModalRow>
                <Select 
                    id="country"
                    name="country"
                    placeholder="Select country"
                    data={countryList} 
                    onChange={(e:any) => handleSelectChange(e)}
                />
            </ModalRow>


            <div className="mb-5">
            <div className="flex flex-row">

                <div>
                    <Label title="State" optional htmlFor="state"/>
                    <Input  
                        id="state"
                        name="state"
                        className="mt-1 rounded-r-none"
                        type="text"
                        placeholder="e.g. Middlesex"
                        autoComplete="street-address"
                        value={form.values.state}
                        onChange={(e:any) => form.handleChange(e)}
                    />

                </div>

                <div>
                    <Label title="Postcode" required htmlFor="post_code"/>
                    <Input  
                        id="post_code"
                        name="post_code"
                        className="mt-1 rounded-l-none border-l-0"
                        type="text"
                        placeholder="e.g. W11 1NS"
                        autoComplete="street-address"
                        value={form.values.post_code}
                        onChange={(e:any) => form.handleChange(e)}
                        required
                    />
                </div>

            </div>
            </div>

            <ModalFooter actionTitle={`${capitalizeFirstLetter(option)}`} submitLoading={submitLoading} handleAction={handleAction} handleCancel={handleCancel} />
        </form>
    )
}

export default ModalUpdatePayment;



interface ModalUpdatePaymentProps {
    config: any;
}