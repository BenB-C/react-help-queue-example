export default (state = {}, action) => {
  /*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/
  switch (action.type) {
    case 'SELECT_TICKET': {
      return action.ticketId;
    }
    default:{
      return state;
    }
  }
};
