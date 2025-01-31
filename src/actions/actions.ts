'use server';
import {redirect} from "next/navigation";


export const someServerAction = async (formData: FormData) => {


    console.log('send data to server', formData.get('someName'));
    redirect(`/submit`);
}
