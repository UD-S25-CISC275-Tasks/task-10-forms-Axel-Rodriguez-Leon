import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function typeChange(): void {
        if (question === "short_answer_question") {
            setQuestion("multiple_choice_question");
        } else {
            setQuestion("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={typeChange}>Change Type</Button>
            {question === "short_answer_question" ?
                "Short Answer"
            :   "Multiple Choice"}
        </div>
    );
}
