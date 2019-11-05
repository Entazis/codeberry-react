import useFetch from './useFetch';
import {getProjectMap} from '../graphql/queries';

export default () => {
    const { response, error, isLoading } = useFetch('http://localhost:3002/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: getProjectMap
        })
    });

    return response ? {
        projectMap: response.data.projects ? response.data.projects  : null,
    } : {
        projectMapIsLoading: isLoading,
        projectMapError: error
    };
};