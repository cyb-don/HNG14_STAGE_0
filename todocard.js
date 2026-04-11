let editBtn = document.getElementById('editBtn');
let deleteBtn = document.getElementById('deleteBtn');
let description = document.getElementById('description');
let toggleCheck = document.getElementById('toggleCheck');
let statusType = document.getElementById('status');
let timeRemaining = document.getElementById('timeRemaining');
let title = document.getElementById('title');
description.value = `Enter your text here`;

editBtn.addEventListener(`click`, () => {
    if (editBtn.textContent == `Edit`) {
        description.removeAttribute('readonly');
        description.focus();
        editBtn.textContent = `Update`;
    } else if (editBtn.textContent == `Update`) {
        description.readOnly = true;
        editBtn.textContent = `Edit`;
    } else {

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
    const dueDate = new Date(`2026-04-15`);
    const now = new Date();
    const diff = dueDate - now;


    if (Math.sign(diff) === -1) {
        let overdueTime = (diff * (-1));
        if (overdueTime > 86400000) {
            let numberOfDaysOver = Math.floor(overdueTime / 86400000);
            timeRemaining.textContent = `Overdue by ${numberOfDaysOver} days`;
        } else if (overdueTime < 86400000) {
            let hoursOver = Math.floor(overdueTime / 3600000);
            timeRemaining.textContent = `Overdue by ${hoursOver} hours`;
        } else if (overdueTime < 3600000) {
            let minutesOver = Math.floor(overdueTime / 60000);
            timeRemaining.textContent = `Due in ${minutesOver} minutes`;
            return;
        };
    } else {
         if (diff > 86400000) {
        let numberOfDays = Math.floor(diff / 86400000);
        timeRemaining.textContent = `Due in ${numberOfDays} days`;
    } else if (diff < 86400000) {
        let hoursRemaining = Math.floor(diff / 3600000);
        timeRemaining.textContent = `Due in ${hoursRemaining} hours`;
    } else if (diff < 3600000) {
        let minutesRemaining = Math.floor(diff / 60000);
        timeRemaining.textContent = `Due in ${minutesRemaining} minutes`;
        return;
    };
    }

}, 2000);




const body = document.getElementById('body');
deleteBtn.addEventListener(`click`, () => {
    const confirmDelete = confirm('Delete Note?');
    if (confirmDelete) {
        body.style.display = `none`;
    } else {
        
    }
});