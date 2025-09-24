import { useState } from "react";
import { FormComponent } from "./FormComponent"
import { Modal } from "./Modal"

export const ContactComponent = () => {
    const [response, setResponse] = useState(null);
    const handleResponse = (value) => setResponse(value) 
    return (
    <>
        <FormComponent action={handleResponse} />
        { response && <Modal message={response}/> }
    </>
    )
}