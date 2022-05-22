let dirtyDishes = 10;

console.log('Количество грязной посуды: '+dirtyDishes)

const cleanDishes = (count) => {
    if (count > dirtyDishes) return console.log('Такое количество помыть невозможно')
    dirtyDishes = dirtyDishes - count;
    
    if (dirtyDishes === 0) {
        console.log('Вы помыли всю посуду')
    } else {
        console.log('Количество посуды, которая осталась: '+dirtyDishes)
    }

    return true
}