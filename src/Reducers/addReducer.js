import { v4 as uuidv4 } from 'uuid';

const addReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, {id:uuidv4(),value:action.value}];
      case "REMOVE_TODO":
        return state.filter(element=> element.id !== action.id)
    default:
      return state;
  }
};
export default addReducer;
