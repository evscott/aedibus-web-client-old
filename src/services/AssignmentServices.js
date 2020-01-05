import fetch from "cross-fetch";

export async function CreateAssignment(assignmentName, readmeContent) {
    return await fetch(`//127.0.0.1:8080/assignment`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            assignmentName: assignmentName,
            readmeContent: readmeContent,
        }),
    });
}

export async function DeleteAssignment(assignmentName) {
    return await fetch(`//127.0.0.1:8080/assignment`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({
            assignmentName: assignmentName,
        }),
    });
}

