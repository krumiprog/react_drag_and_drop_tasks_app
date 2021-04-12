import React, { useEffect, useReducer } from 'react';
import boardsReducer from './boardsReducer';

const STORAGE_KEY = 'tasks';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    boardsReducer,
    [],
    initial => JSON.parse(localStorage.getItem(STORAGE_KEY)) || initial
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addCategory = newCategory => {
    dispatch({ type: 'ADD_CATEGORY', payload: newCategory });
  };

  const removeCategory = categoryId => {
    dispatch({ type: 'REMOVE_CATEGORY', payload: categoryId });
  };

  const addTask = (categoryId, task) => {
    dispatch({ type: 'ADD_TASK', payload: { categoryId, task } });
  };

  const removeTask = (categoryId, taskId) => {
    dispatch({ type: 'REMOVE_TASK', payload: { categoryId, taskId } });
  };

  const dragDropTask = (categoryId, taskId, currentCategory, currentTask) => {
    dispatch({
      type: 'DRAG_DROP_TASK',
      payload: { categoryId, taskId, currentCategory, currentTask },
    });
  };

  const dropOnCategory = (categoryId, currentCategory, currentTask) => {
    dispatch({
      type: 'DROP_ON_CATEGORY',
      payload: { categoryId, currentCategory, currentTask },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addCategory,
        removeCategory,
        addTask,
        removeTask,
        dragDropTask,
        dropOnCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
