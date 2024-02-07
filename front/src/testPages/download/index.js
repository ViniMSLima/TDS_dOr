
import { useState } from "react"
// import arquivo from "../../games/etsTycoon.zip"

export default function LoginPage() {

    const [arquivo, setArquivo] = useState('');

    async function seila(){
        // get da api
        // setArquivo(res.data.path);
    }
    return (
        <>
            <a href={arquivo} download>
                <button type="button">
                    Download MazeJalma
                </button>
            </a>
        </>
    )
}
