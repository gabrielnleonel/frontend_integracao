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
            <h1>Exercício sobre JOIN - Nível Fácil</h1>
            <p>Abra o console do navegador (F12) para ver o console.log</p>

            <hr />

            <ul>   
            {compras.map( (compra) => (
                <li>
                    Cliente: <b> {compra.pessoa} </b> 
                    Item: {compra.item} - Preço: {compra.preco}
                </li>
            ))}
            </ul>
        </div>
    )
}
