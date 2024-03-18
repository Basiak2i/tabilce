const imie = document.querySelector('#Imie');
const miasto = document.querySelector('#Miasto');
const wiek = document.querySelector('#Wiek');
const dodaj = document.querySelector('#dodaj');
const display = document.querySelector('#display');
const wartosc = document.querySelector('#wartosc');
const kryterium = document.querySelector('#kryterium');
const wyszukaj = document.querySelector('#wyszukaj'); 
const lista2 = document.querySelector('#lista2');

display.innerHTML = "";
aktualizujListe(lista);
function aktualizujListe(lista) {
    display.innerHTML = "";
    lista.forEach((el, i) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.classList.add("btn", "btn-outline-danger");
        btn.addEventListener('click', function(){
            usun(el.id);
        });
        btn.innerHTML = 'x';
        li.innerHTML += `<strong>${el.imie}</strong> lat <strong>${el.wiek}</strong> z miasta <strong>${el.miasto}</strong>`;
        li.classList.add("list-group-item");
        li.append(btn);
        display.append(li);
    });
}

function usun(removeByID) {
    lista = lista.filter((user) => user.id !== removeByID);
    aktualizujListe(lista);
}

dodaj.addEventListener('click', evt => {
    let uzytkownik = {
        id: crypto.randomUUID(),
        imie: imie.value,
        miasto: miasto.value,
        wiek: wiek.value
    };
    lista.unshift(uzytkownik);
    aktualizujListe(lista);
    
});

// wyszukaj.addEventListener('click', function(evt){
//     evt.preventDefault();

//     lista2.innerHTML="";
// })