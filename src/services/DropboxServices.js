import fetch from "cross-fetch";

export async function CreateDropbox(assignmentName, dropboxName) {
    return await fetch(`//127.0.0.1:8080/dropbox`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            assignmentName: assignmentName,
            dropboxName: [dropboxName],
        }),
    });
}

export async function GetDropboxList(assignmentName) {
    let res = await fetch(`//127.0.0.1:8080/dropboxes?assignmentName=${assignmentName}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    });
    return res.json();
}