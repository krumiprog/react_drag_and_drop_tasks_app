import React, { useReducer } from 'react';
import boardsReducer from './boardsReducer';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(boardsReducer, []);

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

  return (
    <AppContext.Provider
      value={{ state, addCategory, removeCategory, addTask, removeTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
