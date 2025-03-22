import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode?"
                checked={mode}
                onChange={updateMode}
            />
            {mode ?
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStudent">
                        <Form.Check
                            type="checkbox"
                            label="Are you a student?"
                            checked={student}
                            onChange={() => {
                                setStudent(!student);
                            }}
                        />
                    </Form.Group>
                </div>
            :   <p>
                    {name} is {student ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}
