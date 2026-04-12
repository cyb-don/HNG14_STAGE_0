let editBtn = document.getElementById('editBtn');
let deleteBtn = document.getElementById('deleteBtn');
let description = document.getElementById('description');
let toggleCheck = document.getElementById('toggleCheck');
let statusType = document.getElementById('status');
let timeRemaining = document.getElementById('timeRemaining');
let title = document.getElementById('title');
description.value = `You need to do your HNG Stage Zero task as soon as possible.`;

editBtn.addEventListener(`click`, () => {
    if (editBtn.textContent == `Edit`) {
        description.removeAttribute('readonly');
        description.focus();
        editBtn.textContent = `Update`;
    } else {
        description.readOnly = true;
        editBtn.textContent = `Edit`;
    }
});

toggleCheck.addEventListener(`change`, () => {
    if (toggleCheck.checked) {
        statusType.textContent = `Done`;
        statusType.style.backgroundColor = `#50C878`;
        statusType.style.color = `white`;
        statusType.style.border = `0.5px solid #42b367`;
        title.style.textDecoration = 'line-through';
    } else {
        statusType.textContent = `Pending`;
        statusType.style.backgroundColor = `#FAECE7`;
        statusType.style.color = `#993C1D`;
        statusType.style.border = `0.5px solid #F0997B`;
        title.style.textDecoration = 'none';
    }
})


setInterval(function () {
    const dueDate = new Date(`2026-04-10`);
    const now = new Date();
    const diff = dueDate - now;

    if (diff < 0) {
        let overdueTime = Math.abs(diff);

        if (overdueTime < 3600000) {
            let minutes = Math.floor(overdueTime / 60000);
            timeRemaining.textContent = `Overdue by ${minutes} minutes`;
        } else if (overdueTime < 86400000) {
            let hours = Math.floor(overdueTime / 3600000);
            timeRemaining.textContent = `Overdue by ${hours} hours`;
        } else {
            let days = Math.floor(overdueTime / 86400000);
            timeRemaining.textContent = `Overdue by ${days} days`;
        }

    } else {
        if (diff < 3600000) {
            let minutes = Math.floor(diff / 60000);
            timeRemaining.textContent = `Due in ${minutes} minutes`;
        } else if (diff < 86400000) {
            let hours = Math.floor(diff / 3600000);
            timeRemaining.textContent = `Due in ${hours} hours`;
        } else {
            let days = Math.floor(diff / 86400000);
            timeRemaining.textContent = `Due in ${days} days`;
        }
    }

}, 2000);




const body = document.getElementById('body');
deleteBtn.addEventListener(`click`, () => {
    const confirmDelete = confirm('Delete Note?');
    if (confirmDelete) {
        body.style.display = `none`;
        return;
    };
});