export const GET_DOG = 'GET_DOG';
export const SELECT_DOG = 'SELECT_DOG';
export const GET_IMG = 'GET_IMG';

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

export function getIMG(items) {
    return {
        type: GET_IMG,
        items
    }
}