const container = document.querySelectorAll("#grid-item")

const hijo = document.querySelector('#child')

console.log(container)
for (let index = 0; index < container.length; index++) {
    container[index].addEventListener('dragover', e => {
        e.preventDefault()
        console.log('over')

    container[index].addEventListener('drop', function() {
        container[index].appendChild(hijo)
    })
    })
    
}








