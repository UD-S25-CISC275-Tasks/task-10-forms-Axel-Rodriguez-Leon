import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    const numRequested = parseInt(requested) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Group controlId="formAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequested(event.target.value);
                    }}
                />
            </Form.Group>

            {/* Use Button */}
            <button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </button>

            {/* Gain Button */}
            <button
                onClick={() => {
                    if (numRequested > 0) {
                        setAttempts(attempts + numRequested);
                        setRequested("");
                    }
                }}
                disabled={numRequested <= 0}
            >
                Gain
            </button>
        </div>
    );
}
