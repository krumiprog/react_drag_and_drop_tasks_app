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

    case 'DRAG_DROP_TASK': {
      const {
        categoryId,
        taskId,
        currentCategory,
        currentTask,
      } = action.payload;

      let newCategories = [...state];

      const currentTaskIndex = newCategories
        .find(category => category.id === currentCategory)
        .tasks.findIndex(task => task.id === currentTask);

      const currentCategoryIndex = newCategories.findIndex(
        category => category.id === currentCategory
      );

      const task = {
        ...newCategories[currentCategoryIndex].tasks.find(
          task => task.id === currentTask
        ),
      };

      newCategories
        .find(category => category.id === currentCategory)
        .tasks.splice(currentTaskIndex, 1);

      const dropIndex = newCategories
        .find(category => category.id === categoryId)
        .tasks.findIndex(task => task.id === taskId);

      newCategories
        .find(category => category.id === categoryId)
        .tasks.splice(dropIndex, 0, task);

      return newCategories;
    }

    case 'DROP_ON_CATEGORY': {
      const { categoryId, currentCategory, currentTask } = action.payload;

      let newCategories = [...state];

      const currentTaskIndex = newCategories
        .find(category => category.id === currentCategory)
        .tasks.findIndex(task => task.id === currentTask);

      const currentCategoryIndex = newCategories.findIndex(
        category => category.id === currentCategory
      );

      const task = {
        ...newCategories[currentCategoryIndex].tasks.find(
          task => task.id === currentTask
        ),
      };

      newCategories
        .find(category => category.id === categoryId)
        .tasks.push(task);

      newCategories
        .find(category => category.id === currentCategory)
        .tasks.splice(currentTaskIndex, 1);

      return newCategories;
    }

    default:
      return state;
  }
};

export default boardsReducer;
