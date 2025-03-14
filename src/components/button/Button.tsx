import * as React from "react";
import cl from "./Button.module.css";


interface ButtonProps {
    className: string;
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
    return (
        <div className={`${cl.button} ${className}`} onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;