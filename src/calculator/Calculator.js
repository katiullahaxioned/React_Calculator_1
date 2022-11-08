import React, { useReducer, useRef } from 'react';
import Button from './Button';
import reducer from './reducer';

const Calculator = () => {
  const [stateValue, dispatch] = useReducer(reducer, '');
  const inputOne =  useRef();
  const inputTwo =  useRef();

  const operators = ["/","*","+","-","C"];
  const numbers = ["1","2","3","4","5","6","7","8","9",".","0","="];

  const addValue = (e) => {
    if(e.target.value === "=" ) {
      dispatch({type: "EVAL"});
      return;
    } else if(e.target.value === "C" ) {
      dispatch({type: "CLEAR"});
      return;
    } else {
      dispatch({type: "COMMON", payload: e.target.value});
    }
  }

  return (
    <>
      <section className="calculator">
        <div className="wrapper">
          <h2 className="section-title">react calculator with react hooks</h2>
          <div className="calc">
            <form action="#FIXME">
              <div className="input-box">
                <input type="text" name="inputOne" ref={inputOne} value={stateValue} placeholder="0" readOnly />
                <input type="text" name="inputTwo" ref={inputTwo} value='' readOnly />
              </div>
              <div className="operator-box">
                {
                  operators.map((operator, idx) => {
                    return <Button key={idx} type="button" value={operator} addValue={addValue} />
                  })
                }
              </div>
              <div className="number-box">
                {
                  numbers.map((number, idx) => {
                    return <Button key={idx} type="button" value={number} addValue={addValue} />
                  })
                }
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calculator;


























// import React, { useReducer, useRef, useState } from 'react';
// import Button from './Button';
// import reducer from './reducer';

// const Calculator = () => {
//   // const [stateValue, setStateValue] = useState('');
//   const [stateValue, dispatch] = useReducer(reducer, '');
//   const inputOne =  useRef();
//   const inputTwo =  useRef();

//   const operators = ["/","*","+","-","C"];
//   const numbers = ["1","2","3","4","5","6","7","8","9",".","0","="];

//   const addValue = (e) => {
//     if(e.target.value === "=" ) {
//       dispatch({type: "EVAL"});
//       return;
//     }
//     dispatch({type: "COMMON", payload: e.target.value});
//   }

//   // const addValue = (e) => {
//   //   if(e.target.value === "=" ) {
//   //     setStateValue((prev) => eval(prev));
//   //     return;
//   //   }
//   //   setStateValue((prev) => (prev + e.target.value));
//   // }

//   return (
//     <>
//       <section className="calculator">
//         <div className="wrapper">
//           <h2 className="section-title">react calculator with react hooks</h2>
//           <div className="calc">
//             <form action="#FIXME">
//               <div className="input-box">
//                 <input type="text" name="inputOne" ref={inputOne} value={stateValue} placeholder="0" readOnly />
//                 <input type="text" name="inputTwo" ref={inputTwo} value='' readOnly />
//               </div>
//               <div className="operator-box">
//                 {
//                   operators.map((operator, idx) => {
//                     return <Button key={idx} type="button" value={operator} addValue={addValue} />
//                   })
//                 }
//               </div>
//               <div className="number-box">
//                 {
//                   numbers.map((number, idx) => {
//                     return <Button key={idx} type="button" value={number} addValue={addValue} />
//                   })
//                 }
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Calculator;
















// import React, { useRef } from 'react';

// const Calculator = () => {

//   const inputOne =  useRef();
//   const inputTwo =  useRef();

//   return (
//     <>
//       <section className="calculator">
//         <div className="wrapper">
//           <h2 className="section-title">react calculator with react hooks</h2>
//           <div className="calc">
//             <form action="#FIXME">
//               <div className="input-box">
//                 <input type="text" name="inputOne" ref={inputOne} value='' placeholder="0" readOnly />
//                 <input type="text" name="inputTwo" ref={inputTwo} value='0' readOnly />
//               </div>
//               <div className="operator-box">
//                 <input type="button" value="/" />
//                 <input type="button" value="*" />
//                 <input type="button" value="+" />
//                 <input type="button" value="-" />
//                 <input type="button" value="C" />
//               </div>
//               <div className="number-box">
//                 <input type="button" value="1" />
//                 <input type="button" value="2" />
//                 <input type="button" value="3" />
//                 <input type="button" value="4" />
//                 <input type="button" value="5" />
//                 <input type="button" value="6" />
//                 <input type="button" value="7" />
//                 <input type="button" value="8" />
//                 <input type="button" value="9" />
//                 <input type="button" value="." />
//                 <input type="button" value="0" />
//                 <input type="button" value="=" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Calculator;