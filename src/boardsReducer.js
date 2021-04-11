const boardsReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_CATEGORY':
      return;
    case 'DELETE_CATEGORY':
      return;
    case 'ADD_TASK':
      return;
    case 'DELETE_TASK':
      return;
    default:
      return state;
  }
};

export default boardsReducer;
