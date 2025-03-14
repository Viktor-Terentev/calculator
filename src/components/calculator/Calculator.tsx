import "./Calculator.css";
import Button from "../button/Button.tsx";

const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ",", "="],
];

const Calculator = () => {
    const getClass = (btn: string) => {
        if (btn === "AC") return "AC";
        if (btn === "+/-") return "plus-minus";
        if (btn === "%") return "percent";
        if (btn === "÷") return "divide";
        if (btn === "×") return "multiply";
        if (btn === "-") return "subtract";
        if (btn === "+") return "add";
        if (btn === "=") return "equal";
        if (btn === "0") return "zero";
        return "number";
    };

    return (
        <div className="calculator">
            <div className="display"></div>
            <div className="buttons">
                {buttons.map((row, rowI) =>  (
                    <div key={rowI} className="row">
                        {row.map((btn) => (
                            <Button key={btn} text={btn} onClick={() => {}} className={`btn ${getClass(btn)}`} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calculator;