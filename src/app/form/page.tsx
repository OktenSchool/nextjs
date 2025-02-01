import Form from "next/form";
import {someServerAction} from "@/actions/actions";

const FormPage = () => {

    return (
        <>

            <h2>standard next form</h2>
            <Form action={'/submit'}>
                <input name="someName"/>
                <select name="gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button>submit</button>
            </Form>

            <h2>Server action next form form</h2>
            <Form action={someServerAction}>
                <input name="someName"/>
                <button>send server action</button>
            </Form>

        </>
    )
}
export default FormPage;
