import React, {useState} from "react";
import Main from "../../../../components/layout/Main";

export default function Index() {
    const [data, setData] = useState("")
    const [message, setMessage] = useState("")

    const handleRunButtonClick = () => {
        setData("test-data")
        setMessage("Run button clicked.")
    }

    const handleDeleteButtonClick = () => {
        setData("")
        setMessage("Delete button clicked.")
    }

    return (
        <Main>
            <h1>Hello world!</h1>
            <p>
                Result: {data}
            </p>
            <p>
                Message: {message}
            </p>
            <p>
                <button onClick={handleDeleteButtonClick}>Delete</button>
                <button onClick={handleRunButtonClick}>Run</button>
            </p>
        </Main>
    )
}

// 講師メモ: 動作確認したら資料: typescript へ