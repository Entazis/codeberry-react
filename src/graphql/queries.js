export const get_projects = `{
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
