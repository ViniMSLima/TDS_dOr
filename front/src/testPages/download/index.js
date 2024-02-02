
import arquivo from "../../games/mazejalma.exe"

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
