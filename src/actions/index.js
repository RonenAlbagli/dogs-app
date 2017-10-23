export const GET_DOG = 'GET_DOG';
export const SELECT_DOG = 'SELECT_DOG';

export function getDog(items) {
    return {
        type: GET_DOG,
        items
    }
}

export function selectDog(dogs) {
    return {
        type: SELECT_DOG,
        dogs
    }
}