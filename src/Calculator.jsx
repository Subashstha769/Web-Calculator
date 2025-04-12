function Calculator() {


    function clear()
    {
        display.value = "";
    }

    function appentToDisplay(input) {
        let display = document.querySelector("#display");
        display.value += input;

    }

    function toggleSign() {
        let display = document.querySelector("#display");
        if (display.value) {
            display.value = display.value.startsWith("-")
                ? display.value.slice(1)
                : `-${display.value}`;
        }
    }

    function result() {

        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value ="Error";
        }

    }


    return (
        <>
            <div className="calculator w-100 h-[100vh] p-2 bg-black text-white flex flex-col justify-start items-center gap-2 sm:w-[450px] sm:h-[650px] sm:rounded-[10px] ">
                <section className="display  w-full h-[20%] flex justify-center items-center sm:h-[100px] ">
                    <input type="text" placeholder="0" id="display" className="  outline-none w-full h-full bg-transparent text-white text-7xl text-right placeholder:text-7xl px-1" readOnly />
                </section>

                <section className="btns  w-full h-[78%] grid grid-cols-4 grid-rows-5 items-center gap-3 sm:h-[520px]" >
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-300 text-black flex justify-center items-center text-2xl font-light sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={clear} >AC</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-300 text-black flex justify-center items-center text-2xl font-light sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={toggleSign}>+/_</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-300 text-black flex justify-center items-center text-2xl font-light sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('%')}>%</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('/')}>/</button>

                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('7')}>7</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('8')}>8</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('9')}>9 </button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('*')}>x</button>

                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('4')}>4</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('5')}>5</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('6')}>6 </button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('-')}>-</button>

                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('1')}>1</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('2')}>2</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('3')}>3 </button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('+')}>+</button>

                    <button className="w-[160px] h-[80px] rounded-[4rem] bg-gray-500 text-white col-span-2 flex justify-center items-center text-3xl font-medium sm:text-4xl sm:w-[180px] sm:h-[90px]" onClick={() => appentToDisplay('0')}>0</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-gray-500 text-white flex justify-center items-center text-3xl font-medium sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={() => appentToDisplay('.')}>.</button>
                    <button className="w-[80px] h-[80px] rounded-[50%] bg-[#fe9c2b] text-white flex justify-center items-center text-3xl font-normal sm:w-[90px] sm:h-[90px] sm:text-4xl" onClick={result} >=</button>


                </section>
            </div>
        </>
    );
}
export default Calculator;