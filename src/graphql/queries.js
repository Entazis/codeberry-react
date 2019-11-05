export const getProjects = `{
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

export const getAssignmentData = `{
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