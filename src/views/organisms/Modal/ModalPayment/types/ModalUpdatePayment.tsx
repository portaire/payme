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
import InputGroup from 'views/atoms/Input/InputGroup';


function ModalUpdatePayment({config}:ModalUpdatePaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const ModalContextAPI = useModal()

    const userInfo = fields[0]
    const form = useForm(null, {
        number: "",
        expiry: "",
        ccv: "",
        address_one: userInfo.address_one,
        address_two: userInfo.address_two,
        country: "",
        state: userInfo.state,
        post_code: userInfo.post_code
    })

    const [submitLoading, setSubmitLoading] = useState(false);

    async function submitForm(e?:React.FormEvent<HTMLButtonElement>) {
        return await updateAgentPaymentAddress(form.values)
    }

    async function handleAction(e:React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        setSubmitLoading(true)
    }

    const submit = async () => {
        // TODO: if error/fields empty, don't submit

        const res = await submitForm();
        if(!isObjectEmpty(res)) { // Should be data error or success whatever instead
            setSubmitLoading(false)
            ModalContextAPI.close()
        }
    };

    useEffect(() => {
        if (submitLoading) submit();
    }, [submitLoading])

    function handleCancel(e:React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        ModalContextAPI.close()
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
                    cardCCVInputProps={{ 
                        value: form.values.ccv,
                        name: "ccv",
                        onChange: (e: React.MouseEvent<HTMLButtonElement>) => form.handleChange({ target: { "name": "ccv", "value": e }}),
                    }}
                />
            </ModalRow>

            <ModalRow>
                <Input
                    id="address_one"
                    name="address_one"
                    label="Address line 1"
                    type="text"
                    placeholder="e.g. 123 Fake St"
                    autoComplete="street-address"
                    value={form.values.address_one}
                    onChange={(e:any) => form.handleChange(e)}
                    required  
                />
            </ModalRow>

            <ModalRow>
                <Input  
                    id="address_two"
                    name="address_two"
                    label="Address line 2"
                    type="text"
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
                    label="Country"
                    placeholder="Select country..."
                    data={countryList} 
                    onChange={(e:any) => form.handleChange( {target: { "name": "country", "value": e }})}
                />
            </ModalRow>

            <ModalRow size="mb-5">
            <InputGroup>
                <Input  
                    label="State"
                    optional
                    id="state"
                    name="state"
                    type="text"
                    placeholder="e.g. Middlesex"
                    autoComplete="street-address"
                    value={form.values.state}
                    onChange={(e:any) => form.handleChange(e)}
                />
                <Input  
                    id="post_code"
                    name="post_code"
                    label="Post Code"
                    type="text"
                    placeholder="e.g. W11 1NS"
                    autoComplete="street-address"
                    value={form.values.post_code}
                    onChange={(e:any) => form.handleChange(e)}
                    required
                />
            </InputGroup>
            </ModalRow>

            <ModalFooter actionTitle={`${capitalizeFirstLetter(option)}`} submitLoading={submitLoading} handleAction={handleAction} handleCancel={handleCancel} />
        </form>
    )
}

export default ModalUpdatePayment;



interface ModalUpdatePaymentProps {
    config: any;
}