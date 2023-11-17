import '../styles/Cart.css'
function Cart() {
    const bierePrice = 5
    const rhumPrice = 50
    const vokdaPrice = 60
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Biere : {bierePrice} e</li>
                <li>Rhum : {rhumPrice} e</li>
                <li>Vodka : {vokdaPrice} e</li>
            </ul>
            Total : {bierePrice + rhumPrice + vokdaPrice} e
        </div>
    )
}

export default Cart