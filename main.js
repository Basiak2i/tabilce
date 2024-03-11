const imie = document.querySelector('#Imie');
const miasto = document.querySelector('#Miasto');
const wiek = document.querySelector('#Wiek');
const dodaj = document.querySelector('#dodaj');
const display = document.querySelector('#display');


display.innerHTML = ""
lista.forEach((el, i) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.classList.add("btn", "btn-outline-danger")
    btn.id = i;
    btn.addEventListener('click',function (evt){
        console.log(this.id)
    })
    btn.innerHTML = 'x'
    li.innerHTML += `<strong>${el.imie}</strong> lat <strong>${el.wiek}</strong> z miasta <strong>${el.miasto}</strong>`
    li.classList.add("list-group-item")
    li.append(btn)
    display.append(li)
    
});

            dodaj.addEventListener('click', evt => {

                let uzytkownik = {
                    imie: imie.value,
                    miasto: miasto.value,
                    wiek: wiek.value
                }
                lista.unshift(uzytkownik)
                console.log(lista)
                
                display.innerHTML = ""
                lista.forEach((el, i) => {
                    const li = document.createElement('li')
                    const btn = document.createElement('button')
                    btn.classList.add("btn", "btn-outline-danger")
                    btn.id = i;
                    btn.addEventListener('click',function (evt){
                        console.log(this.id)
                    })
                    btn.innerHTML = 'x'
                    li.innerHTML += `<strong>${el.imie}</strong> lat <strong>${el.wiek}</strong> z miasta <strong>${el.miasto}</strong>`
                    li.classList.add("list-group-item")
                    li.append(btn)
                    display.append(li)
                    
                });

            })