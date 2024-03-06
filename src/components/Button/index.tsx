import React from "react";
import "./style.scss";

class Button extends React.Component { 
    render(): React.ReactNode {
        // const isActive = true 
        // const styles = {
        //     backgroundColor: isActive ? "green" : "red"
        // }
        return (
            <button className="botao">
                Botão
            </button>
        )
    }
}

export default Button;