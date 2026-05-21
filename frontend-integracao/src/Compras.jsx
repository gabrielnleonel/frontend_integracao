import { useEffect, useState } from "react"

export default function Compras () {
    const [compras, setCompras] = useState([])

    useEffect( () => {
        const buscarCompras = async () => {
            const resposta = await fetch('http://localhost:3000/compras')
            const data = await resposta.json()
            setCompras(data)

            console.log(data);
        }

        buscarCompras()
    }, [])

    return (
        <div>
            <h1>Compras</h1>
            <p>Lista de compras</p>

            <hr />

            <ul>   
            {compras.map( (compra) => (
                <li>
                    Cliente:  {compra.pessoa} Item: {compra.item} - Preço: {compra.preco}
                </li>
            ))}
            </ul>
        </div>
    )
}
