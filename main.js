'use strict';
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event){
    // console.log('start',event.target);
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event){
    // event.target.classList.remove('hold', 'hide');
    event.target.className = 'item';
}

function dragover(event){
    // console.log('over');
    event.preventDefault();
}

function dragenter(event){
    // console.log('enter');
    event.target.classList.add('hovered');
}

function dragleave(event){
    // console.log('leave');
    event.target.classList.remove('hovered');
}

function dragdrop(event){
    // console.log('drop');
    event.target.append(item);
    event.target.classList.remove('hovered');
}