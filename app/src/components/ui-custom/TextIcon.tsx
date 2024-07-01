
import * as React from "react";
import './TextIcon.css';

interface TextIconProps {
    text: string
    tsize: number
    children:React.ReactNode

} 

const TextIcon = (props:TextIconProps) => {
    return (
        <div className="text-wrapper">
            <div>{props.children}</div>
            <div style={{fontSize:props.tsize}}>{props.text}</div>
        </div>
    );
}

export default TextIcon;
