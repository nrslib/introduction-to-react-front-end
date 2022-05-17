import React from "react";
import Main from "../../../../components/layout/Main";
import Form from "./components/Form";

// TODO: Form を完成させる（Form のデータはユーザ名とパスワードのみとする）
// TODO: Post の Hook を作る（Post先は http://httpbin.org/delay/3 )
export default function Index() {
    return (
        <Main>
            <h1>Index</h1>

            <h2>Form</h2>
            <Form/>
        </Main>
    )
}