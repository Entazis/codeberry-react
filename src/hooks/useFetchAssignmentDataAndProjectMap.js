import useFetch from './useFetch';

export default () => {
    const urlArr = window.location.pathname.split('/').filter(Boolean);
    if (urlArr.length !== 5) {
        return { response: null, error: 'urlArr.length !== 5', isLoading: false };
    }

    const module = urlArr[2];
    const chapter = urlArr[3];
    const lesson = urlArr[4];

    const { response, error, isLoading } = useFetch(`http://127.0.0.1:3000/lessons/spa/${module}/${chapter}/${lesson}`);

    return response ? {
        assignmentData: response.assignmentData ? response.assignmentData : null,
        projectMap: response.projectMap ? response.projectMap : null,
    } : {
        isLoading: isLoading,
        error: error
    };
};