export const get_projects = `{
    projects {
        name
        lessons {
            hash
            assignments {
                name
            }
        }
    }
 }`;
