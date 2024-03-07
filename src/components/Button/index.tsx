import React, { ReactNode } from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{children?: ReactNode}> { 
    render() {
        // const isActive = true 
        // const styles = {
        //     backgroundColor: isActive ? "green" : "red"
        // }
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;