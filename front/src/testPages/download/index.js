
import arquivo from "../../games/etsTycoon.zip"

export default function LoginPage() {
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
