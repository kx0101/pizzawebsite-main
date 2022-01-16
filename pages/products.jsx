import styles from "../styles/PizzaList.module.css"

const Products = () => {
    return (
        <div>
            <h2>Menu</h2>
            <table>
                <thead>All</thead>
                <tbody>
                    <tr>
                        <td>Pizza 1</td>
                        <td>12€</td>
                    </tr>
                    <tr>
                        <td>Pizza 2</td>
                        <td>15€</td>
                    </tr>
                    <tr>
                        <td>Pizza 3</td>  
                        <td>18€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products
