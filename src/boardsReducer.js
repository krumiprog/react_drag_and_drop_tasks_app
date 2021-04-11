const boardsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...state, action.payload];

    case 'REMOVE_CATEGORY':
      return state.filter(category => category.id !== action.payload);

    case 'ADD_TASK': {
      let newCategories = [...state];
      newCategories
        .find(category => category.id === action.payload.categoryId)
        .tasks.push(action.payload.task);
      return newCategories;
    }

    case 'REMOVE_TASK': {
      let newCategories = [...state];
      let category = newCategories.find(
        category => category.id === action.payload.categoryId
      );
      let deleteIndex = category.tasks
        .map(task => task.id)
        .indexOf(action.payload.taskId);
      category.tasks.splice(deleteIndex, 1);
      return newCategories;
    }

    default:
      return state;
  }
};

export default boardsReducer;
