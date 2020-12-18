export const add = (e) => {
  return { type: "CREATE_TODO", value: e };
};
export const remove = (e) => {
    return { type: "REMOVE_TODO", id: e };
  };

