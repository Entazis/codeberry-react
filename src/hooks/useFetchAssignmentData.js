import useFetch from './useFetch';
import {getAssignmentData} from '../graphql/queries';

export default (hash, index) => {
    const { response, error, isLoading } = useFetch('http://localhost:3002/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: getAssignmentData,
            variables: { hash, index }
        })
    });

    return response ? {
        assignmentData: response ? response  : null,
    } : {
        assignmentDataIsLoading: isLoading,
        assignmentDataError: error
    };
};