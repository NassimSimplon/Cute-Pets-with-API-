const cat = document.getElementById('cat');
const dog = document.getElementById('dog');
const cat_btn = document.getElementById('cat_btn'); 
const dog_btn = document.getElementById('dog_btn');
 
cat_btn.addEventListener('click',nassim)
dog_btn.addEventListener('click',khlifi)
function nassim(){
     fetch('https://aws.random.cat/meow')
     .then(res => res.json())
     .then(data => {
         cat.innerHTML = `<img src="${data.file}"/>`
     })
}
function khlifi(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        dog.innerHTML = `<img src="${data.url}"/>`
    })
}
