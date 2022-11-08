const reducer = (state, {type, payload}) => {

  switch(type) {
    case "COMMON" : {
        return state + payload;
    }

    case "CLEAR" : {
      const str = state.toString();
      return str.slice(0,str.length-1);
    }
    
    case "EVAL" : {      
      const output = eval(state);
      const str = output.toString();
      if (!str.includes('.')) {
        return output.toFixed(0);
      } else {
        return output.toFixed(3);
      }
    }

    default : console.log("calc error");;
  }

  return state;

}

export default reducer;