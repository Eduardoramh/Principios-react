import React from "react";

// ↓↓ Los componentes siempre tienen que iniciar en mayusucula al igual que las nombres de sus funciones ↓↓

export default function HolaMundo() {
    const mifuncion = () => {
        console.log("Mi función");
    };
    
    return(
        <div>
            <h1>Hola Mundo</h1>
            <h2>Eduardo Ramirez</h2>
        </div>
    );
}

// Se puede retornar todo en un Fragment 

// export default function HolaMundo() {
//     return(
//         <>
//             <h1>Hola Mundo</h1>
//             <h2>Eduardo Ramirez</h2>
//         </>
//     );
// }



// ↑↑ Un return solo puede retornar una cosa ↑↑

// !!! Un documento solo puede tener una exportacion default !!!

// ↓↓ Lo recomendado es que cada funcion tenga su propio componente pero habran casos que sera necesario hacerlo de esta manera ↓↓

// export function AdiosMundo() {
//     return(
//         <div>
//             <h3>Adios</h3>
//         </div>
//     );
// }

// export default HolaMundo; ← ← Manera de exportar un componente de manera global (todo el archivo pues)