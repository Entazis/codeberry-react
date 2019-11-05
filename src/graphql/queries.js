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
query assignmentData($lessonHash: String!, $assignmentIndex: Int!) {
    templateHtml,
    pageTitle,
    lessonTitle,
    submissionId,
    assignmentIndex,
    assignmentTitle,
    assignmentName,
    problemText,
    submissionInputType
}`;