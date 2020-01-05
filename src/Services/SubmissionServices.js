import fetch from "cross-fetch";

export async function SubmitAssignment(assignmentName, dropboxName, content) {
    return await fetch(`//127.0.0.1:8080/submission`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            assignmentName: assignmentName,
            dropboxName: dropboxName,
            body: "nothing",
            fileName: "sol.js",
            content: content,
        }),
    });
}