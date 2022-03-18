import React from "react";

export default function Saludar(props) {
    // const { userInfo, saludarFn } = props;
    const { nombre } = userInfo;
    console.log(props);
    console.log(userInfo);
    return (
        <div>
            {/* <button onClick={() => saludarFn(userInfo.nombre)}>Saludar</button> */}
            <button onClick={() => saludarFn(nombre)}>Saludar</button>
        </div>
    );  
}