import defaultForm from "./form.json"
import { request } from "./request"

export const FormComponent = ({action}) => {
    const [formData, setFormData] = useState(defaultForm);
    const handleState = ({target:{id,value}}) => 
        setFormData((prev) =>({...prev, [id]: value}))

    const handleSubmit = () => 
        form.data.email === "" && form.data.message === "" ?
        request(formData).then(data => action(data)) :
        handleResponse("Debe completar todos los campos")
    
    return (
        <form onSubmit={handleSubmit}>
            <input id="fullName" onInput={handleState} />
            <input id="email" onInput={handleState}/>
            <select id="subject" onInput={handleState}>
                <option value="1">a</option>
                <option value="2">b</option>
                <option value="3">c</option>
            </select>
            <textarea id="" onInput={handleState}></textarea>   
            <button type="submit">Enviar</button>
        </form>
    )
}