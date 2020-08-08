import React from 'react'
import products from '../../data/products'
import './ProductsTable.css'

export default props => {

    const productsElements = products.map((product) => {
        return (
            <tr key={product.id} style={product.id % 2 === 0 ? { backgroundColor: '#D0A3FF' } : { backgroundColor: '#B36BFF' }}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price},00</td>
            </tr>
        )
    })

    return (
        <table>
            <thead style={{ backgroundColor: '#8c1eff', textColor: 'white' }}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {productsElements}
            </tbody>
        </table>
    )
}