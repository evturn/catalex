export const createNote = () => {
  return {
    type: 'CREATE_NOTE',
    note: {
      id: uuid.v4(),
      task: '',
      editing: true
    }
  };
};

export const updateNote = () => {
  return {
    type: 'UPDATE_NOTE'
  };
};

export const deleteNote = () => {
  return {
    type: 'DELETE_NOTE'
  };
};