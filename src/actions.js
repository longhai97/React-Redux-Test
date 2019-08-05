export const ADD_TODO = 'ADD_TODO';
export const MY_PENTA = 'MY_PENTA';
export const QUAN     = 'QUAN';

export function addTodo(text) {
    return { type: ADD_TODO, text }
}
export function myPenta(text) {
    return { type: MY_PENTA, text }
}
export function NhinQuan() {
    return{ type: QUAN }
}
