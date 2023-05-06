const input = document.querySelector('input')
const addBtn = document.getElementById('add-btn')
const clearBtn = document.getElementById('clear-btn') 
const box = document.querySelector('.box')
const h1 = document.querySelector('h1')

addBtn.addEventListener('click', () =>{

    if(input.value != 0){

        let newItem = document.createElement('div');
        newItem.classList.add('items')
        box.appendChild(newItem);
        
        let newP = document.createElement('p')
        newP.innerText = input.value;
        newItem.appendChild(newP)

        let newDiv = document.createElement('div')

        let icon1 = document.createElement('i')
        icon1.innerHTML = `<i class="fa-regular fa-circle-check" style="color: #00ff04;"></i>`;
        newDiv.appendChild(icon1)

        let icon2 = document.createElement('i')
        icon2.innerHTML = `<i class="fa-regular fa-pen-to-square" style="color: #7abaff;"></i>`;
        newDiv.appendChild(icon2)

        let icon3 = document.createElement('i')
        icon3.innerHTML = `<i class="fa-regular fa-circle-xmark" style="color: #eb0000;"></i>`;
        newDiv.appendChild(icon3)

        newItem.appendChild(newDiv)

        clearBtn.addEventListener('click', () =>{
            newItem.remove();
        })

        icon1.addEventListener('click', () => {
            if(newP.style){
                newP.style.textDecoration = 'line-through';
                newP.style.color = 'rgb(190, 190, 190)'
            }else{
                newP.style.textDecoration = 'none';
                newP.style.color = 'white'
            }
        })

        icon2.addEventListener('click', () => {
            input.value = newP.innerText
            newItem.remove()
        })

        icon3.addEventListener('click', () => {

            newItem.remove()

            h1.innerText = 'Item Deleted'
            h1.style.color = 'rgb(103, 253, 103)'

            setTimeout(() => {
                h1.innerText = 'To Do List'
                h1.style.color = 'white'
            }, 1500); 
        })
    }

    if(input.value == 0){
        h1.innerText = 'Please Enter Valid Value'
        h1.style.color = 'red'

        setTimeout(() => {
            h1.innerText = 'To Do List'
            h1.style.color = 'white'
        }, 2000); 
    }

    input.value = ''

})