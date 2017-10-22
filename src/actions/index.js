export const GET_DOG = 'GET_DOG';

export function getDog(items) {
    return {
        type: GET_DOG,
        items
    }
}