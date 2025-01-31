import {FC} from "react";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
const Submit: FC<Props> = async ({searchParams}) => {

    const awaitedParams = await searchParams;
    const {someName, gender} = awaitedParams;
    console.log(awaitedParams);

    return (
        <>

            submit {someName} {gender}
        </>
    )
}
export default Submit;
