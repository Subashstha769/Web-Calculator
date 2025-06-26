import { useState } from "react";
function Calculator() {


    const [display, setDisplay] = useState("");

    const clear = () => {
        setDisplay("");
    };

    const appendToDisplay = (input) => {
        setDisplay((display) => display + input);
    };

    const toggleSign = () => {
        if (display) {
            setDisplay((display) =>
                display.startsWith("-") ? display.slice(1) : "-" + display
            );
        }
    };

    const back = () => {
        setDisplay((display) => display.slice(0, -1));
    };

    const result = () => {
        try {
            setDisplay(eval(display).toString());
        } catch {
            setDisplay("Error");
        }

    };


    return (
        <>
            <div className="calculator w-100  h-[100vh]  p-2 bg-black text-white flex flex-col justify-start items-center gap-2 sm:w-[450px] sm:h-[650px] sm:rounded-[10px] lg:items-   lg:gap-12">
                <section className="display   w-full h-[200px] flex justify-center items-center gap-1  ">
                    <input type="text" value={display} placeholder="0" id="display" className="  outline-none w-full h-full bg-transparent text-white text-7xl text-right placeholder:text-7xl px-1" readOnly />
                    <i class="fa-solid fa-delete-left text-3xl text-gray-400 cursor-pointer" onClick={back} ></i>
                </section>

                <section className="btns  w-full h-[78%] grid grid-cols-4 grid-rows-5 items-center gap-3 sm:h-[520px]" >
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-300 text-black flex justify-center items-center text-2xl font-light sm:w-[90px] sm:h-[90px] sm:text-4xl hover:bg-gray-400" onClick={clear} >AC</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-300 text-black flex justify-center items-center text-2xl font-light sm:w-[90px] sm:h-[90px] sm:text-4xl hover:bg-gray-400" onClick={toggleSign}>+/_</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-300 text-black flex justify-center items-center text-2xl font-light sm:w-[90px] sm:h-[90px] sm:text-4xl hover:bg-gray-400" onClick={() => appendToDisplay('%')}>%</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appendToDisplay('/')}>/</button>

                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl hover:bg-gray-600" onClick={() => appendToDisplay('7')}>7</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl hover:bg-gray-600" onClick={() => appendToDisplay('8')}>8</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl hover:bg-gray-600" onClick={() => appendToDisplay('9')}>9 </button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appendToDisplay('*')}>x</button>

                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl  hover:bg-gray-600" onClick={() => appendToDisplay('4')}>4</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl  hover:bg-gray-600" onClick={() => appendToDisplay('5')}>5</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl  hover:bg-gray-600" onClick={() => appendToDisplay('6')}>6 </button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appendToDisplay('-')}>-</button>

                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl  hover:bg-gray-600" onClick={() => appendToDisplay('1')}>1</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl  hover:bg-gray-600" onClick={() => appendToDisplay('2')}>2</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl  hover:bg-gray-600" onClick={() => appendToDisplay('3')}>3 </button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appendToDisplay('+')}>+</button>

                    <button className="w-[160px] h-[80px] rounded-[4rem] bg-gray-500 text-white col-span-2 flex justify-center items-center text-3xl font-medium sm:text-4xl sm:w-[180px] sm:h-[90px] sm:rounded-[42px]  hover:bg-gray-600" onClick={() => appendToDisplay('0')}>0</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl  hover:bg-gray-600" onClick={() => appendToDisplay('.')}>.</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={result} >=</button>


                </section>
            </div>
        </>
    );
}
export default Calculator;