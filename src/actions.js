export function addTracked(newCompany) {
    return {
        type: 'ADD_TRACKED',
        payload: newCompany,
    };
}
