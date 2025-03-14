import "./Calculator.css";
import Button from "../button/Button.tsx";
import {useState} from "react";

const buttons = [
    ["AC", "+/-", "√", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ",", "="],
];

const Calculator = () => {
    const getClass = (btn: string) => {
        if (btn === "AC") return "AC";
        if (btn === "+/-") return "plus-minus";
        if (btn === "√") return "sqrt";
        if (btn === "÷") return "divide";
        if (btn === "×") return "multiply";
        if (btn === "-") return "subtract";
        if (btn === "+") return "add";
        if (btn === "=") return "equal";
        if (btn === "0") return "zero";
        return "number";
    };

    const [input, setInput] = useState("0");

    const roundTo = (n: number, places: number) => {
        const factor = Math.pow(10, places);
        return Math.round(n * factor) / factor;
    }

    const handleClick = (value: string) => {
    if (value === "AC") {
        setInput("0");
    } else if (value === "=") {
        const result = new Function(`return ${input.replace("×", "*").replace("÷", "/")}`)();
        setInput(String(roundTo(result, 6)));
    } else if (value === "+/-") {
        setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else if (value === "√") {
        setInput((prev) => {
            const operators = /[+\-×÷]/g;
            const parts = prev.split(operators);
            const lastNumber = parts[parts.length - 1];

            if (!lastNumber) return prev;


            const lastOperatorIndex = Math.max(prev.lastIndexOf("+"), prev.lastIndexOf("-"), prev.lastIndexOf("×"), prev.lastIndexOf("÷"));
            const isNegative = lastOperatorIndex !== -1 && prev[lastOperatorIndex] === "-" && lastOperatorIndex === prev.length - lastNumber.length - 1;

            const number = parseFloat(lastNumber);
            if (isNegative || number < 0) {
                return "Ошибка";
            }

            const sqrtValue = Math.sqrt(number);
            return prev.replace(lastNumber, String(roundTo(sqrtValue, 6)));
        });
    } else {
        setInput((prev) => (prev === "0" ? value : prev + value));
    }
};

    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
                {buttons.map((row, rowI) =>  (
                    <div key={rowI} className="row">
                        {row.map((btn) => (
                            <Button key={btn} text={btn} onClick={() => handleClick(btn)} className={`btn ${getClass(btn)}`} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calculator;