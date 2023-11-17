const alcoolList = [
    'aguardiente',
    'vodka',
    'rhum',
    'ron',
    'chivas'
]

function ShoppingList() {
    return (
        <ul>
            {alcoolList.map((alcool, index) => (
                <li key={`${alcool}-${index}`}>{ alcool }</li>
            ))}
        </ul>
    )
}

export default ShoppingList
