import React, { useRef } from 'react';

const Calculator = () => {

  const inputOne =  useRef();
  const inputTwo =  useRef();

  return (
    <>
      <section className="calculator">
        <div className="wrapper">
          <h2 className="section-title">react calculator with react hooks</h2>
          <div className="calc">
            <form action="#FIXME">
              <div className="input-box">
                <input type="text" name="inputOne" ref={inputOne} value='' placeholder="0" readOnly />
                <input type="text" name="inputTwo" ref={inputTwo} value='0' readOnly />
              </div>
              <div className="operator-box">
                <button>/</button>
                <button>*</button>
                <button>+</button>
                <button>-</button>
                <button>C</button>
              </div>
              <div className="number-box">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>.</button>
                <button>0</button>
                <button>=</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calculator;