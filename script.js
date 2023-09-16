const list = document.getElementById("list");
const input = document.getElementById("inputbox");

input.addEventListener('keydown' ,(event) => {

    if (event.key === 'Enter') { 
        const task = input.value;
        console.log(task);
        let listItem = document.createElement('li');
        listItem.innerHTML = `${task}<i></i>`;
        listItem.style.color= 'white';

        list.appendChild(listItem);
        input.value = "";

        listItem.addEventListener("click", () => {
            listItem.classList.toggle("done");
        })

        listItem.querySelector("i").addEventListener("click" ,() => {
            listItem.remove();
        })
        
    }
})