export const getProjectMap = `
query {
    projects {
        name
        title
        lessons {
            hash
            title
            assignments {
                name
                title
            }
        }
    }
 }`;

export const getAssignmentData = `
query assignmentData($hash: String!, $index: Int!) {
    assignmentData(lessonHash: $hash, $assignmentIndex: $index) {lessonHtml}
}`;