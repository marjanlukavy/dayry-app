export const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
