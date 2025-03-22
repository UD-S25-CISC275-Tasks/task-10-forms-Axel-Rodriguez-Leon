import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    //expectedAnswer = "This is correct";
    const isCorrect = answer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <p>{isCorrect ? "✔️" : "❌"}</p>
        </div>
    );
}
/*export function App(): JSX.Element {
  // This is the State (Model)
  const [name, setName] = useState<string>('Alien');

  // This is the Control
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  // This is the View
  return <div>
    <Form.Group controlId="formMovieName">
      <Form.Label>Name:</Form.Label>
      <Form.Control
        value={name}
        onChange={updateName} />
    </Form.Group>
    <div>
      The movie is "{name}".
    </div>
  </div>;
}
*/
