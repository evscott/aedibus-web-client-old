import fetch from "cross-fetch";

export async function GetReadme(assignmentName) {
    let res = await fetch(`//127.0.0.1:8080/readme?assignmentName=${assignmentName}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    });

    return res.json();
}