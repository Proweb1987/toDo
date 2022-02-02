let input = document.querySelector('input'),
    btn = document.querySelector('button'),
    list = document.querySelector('ol');

input.addEventListener('keydown', function(enter) {
    if(enter.keyCode === 13) {
        if(input.value != '') {
            todo();
        }
       
    }
})




function todo() {
    let li = document.createElement('li');
    li.textContent = input.value;
    li.style.color = 'white';
    li.style.fontSize = '24px';
    list.append(li);
    input.value = '';
}