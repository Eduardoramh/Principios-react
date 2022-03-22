import React from "react";

export default function Saludar(props) {
    const { userInfo, saludarFn } = props;
    const { nombre = "Anonimo", edad } = userInfo;
    console.log(props);
    console.log(userInfo);
    return (
        <div>
            {/* <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Saludar</button> */}
            {/* <button onClick={() => saludarFn(userInfo.nombre)}>Saludar</button> */}
            <button onClick={() => saludarFn(nombre, edad)}>Saludar previamente </button>
        </div>
    );  
} 