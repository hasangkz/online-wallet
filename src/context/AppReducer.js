export default (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return {
        balance: state.balance.filter((item) => item.id !== action.payload),
      };
    case 'ADD':
      return {
        balance: [action.payload, ...state.balance],
      };
    default:
      return state;
  }
};
