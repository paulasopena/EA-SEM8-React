import { useReducer } from "react"
import { Sub } from "../models/types"
import useNewSubForm from "../hooks/useNewSubForm"


interface FromProps{
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FromProps) => {
    //const [inputValues, setInputValues] = useState<FromState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = evt.target
        dispatch({
            type: "change_value",
            payload:{
                inputName: name,
                inputValue: value
            }
        })
        
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="username" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar URL" />
                <input onChange={handleChange} value={inputValues.birthday} type="text" name="birthday" placeholder="birthday" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <button onClick={handleClear} type="button">Clear the form</button>
                <button type="submit">Save new sub!</button>

            </form>
        </div>

    )
}

export default Form


