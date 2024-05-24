export function getElemet<T extends HTMLElement> (query:string): T{
    const element = document.querySelector<T>(query);

    if(element === null){
        throw new Error(`Element not found: ${query}`)
    }

    return element;
}

export const elements = {
    todoInput: getElemet<HTMLInputElement>("#todo-input"),
    cancelTodo: getElemet<HTMLInputElement>("#cancel-todo"),
    form: getElemet<HTMLInputElement>("form"),
    todoContainer: getElemet<HTMLInputElement>("#todo-container"),
    itemsLeft: getElemet<HTMLInputElement>("#items-left"),
    clearCompleted: getElemet<HTMLInputElement>("#clear-completed"),
    errorPopup: getElemet<HTMLInputElement>("#error-popup"),
    errorPopupText: getElemet<HTMLInputElement>("#error-message")

}