let editBtn = document.getElementById('editBtn');
let deleteBtn = document.getElementById('deleteBtn');
let saveBtn = document.getElementById('saveBtn');
let cancelBtn = document.getElementById('cancelBtn');
let title = document.getElementById('title');
let descriptionParagraph = document.getElementById('descriptionParagraph');
let titleHeader = document.getElementById('titleHeader');
let collapsibleSect = document.getElementById('collapsibleSect');
let expandColToggle = document.getElementById('expandColToggle');
let priorityIndicator = document.getElementById('priorityIndicator');
let overdueIndicator = document.getElementById('overdueIndicator');
let card = document.querySelector('.card');

let statusType = document.getElementById('status');
let statusControl = document.getElementById('statusControl');
let timeRemaining = document.getElementById('timeRemaining');
let prioritySelect = document.getElementById(`prioritySelect`);
let editDueDate = document.getElementById(`editDueDate`);
let toggleCheck = document.getElementById('toggleCheck');

let previousTitle;
let previousDescription;
let previousPriority;
let previousDueDate;
let isExpanded = false;

title.textContent = `HNG STAGE 1 TASK`;
descriptionParagraph.textContent = `In the bleak midwinter, frosty wind made moan,
Earth stood hard as iron, water like a stone;
Snow had fallen`;
editDueDate.value = `2026-01-20`;
prioritySelect.value = `Medium`;
statusControl.value = `Pending`;

updatePriorityIndicator();

const collapsibleThreshold = 100;
if (descriptionParagraph.textContent.length > collapsibleThreshold) {
    collapsibleSect.style.maxHeight = '60px';
    isExpanded = false;
    expandColToggle.setAttribute('aria-expanded', 'false');
} else {
    collapsibleSect.style.maxHeight = 'none';
    isExpanded = true;
    expandColToggle.setAttribute('aria-expanded', 'true');
    expandColToggle.style.display = 'none';
}

updateCardStyling();

function updatePriorityIndicator() {
    const priority = prioritySelect.value;
    priorityIndicator.classList.remove('high', 'medium', 'low');
    if (priority === 'High') {
        priorityIndicator.classList.add('high');
    } else if (priority === 'Medium') {
        priorityIndicator.classList.add('medium');
    } else if (priority === 'Low') {
        priorityIndicator.classList.add('low');
    }
}

function updateCardStyling() {
    card.classList.remove('in-progress', 'done');
    if (statusControl.value === 'In Progress') {
        card.classList.add('in-progress');
    } else if (statusControl.value === 'Done') {
        card.classList.add('done');
    }
}

editBtn.addEventListener(`click`, () => {
    previousTitle = title.textContent;
    previousDescription = descriptionParagraph.textContent;
    previousPriority = prioritySelect.value;
    previousDueDate = editDueDate.value;
    title.style.display = `none`;
    descriptionParagraph.style.display = `none`;

    let titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'editTitle';
    titleLabel.style.display = 'block';
    titleLabel.style.fontSize = '12px';
    titleLabel.style.fontWeight = '500';
    titleLabel.style.color = '#999';
    titleLabel.style.marginBottom = '4px';
    titleLabel.textContent = 'Title';

    let editTitleInput = document.createElement(`input`);
    editTitleInput.dataset.testid = `test-todo-edit-title-input`;
    editTitleInput.id = `editTitle`;
    editTitleInput.value = previousTitle;
    titleHeader.appendChild(titleLabel);
    titleHeader.appendChild(editTitleInput);

    let descLabel = document.createElement('label');
    descLabel.htmlFor = 'editDescription';
    descLabel.style.display = 'block';
    descLabel.fontSize = '12px';
    descLabel.fontWeight = '500';
    descLabel.color = '#999';
    descLabel.marginBottom = '4px';
    descLabel.marginTop = '12px';
    descLabel.textContent = 'Description';

    let editDescriptionInput = document.createElement(`textarea`);
    editDescriptionInput.dataset.testid = `test-todo-edit-description-input`;
    editDescriptionInput.id = `editDescription`;
    editDescriptionInput.value = previousDescription;
    collapsibleSect.appendChild(descLabel);
    collapsibleSect.appendChild(editDescriptionInput);

    editBtn.style.display = `none`;
    saveBtn.style.display = `block`;
    deleteBtn.style.display = `none`;
    cancelBtn.style.display = `block`;
    expandColToggle.style.display = `none`;
    prioritySelect.disabled = false;
    editDueDate.removeAttribute('readonly');
    editDescriptionInput.focus();
});


saveBtn.addEventListener(`click`, () => {
    let editTitle = document.getElementById('editTitle');
    let editDescription = document.getElementById('editDescription');
    title.textContent = editTitle.value;
    descriptionParagraph.textContent = editDescription.value;

    let titleLabel = titleHeader.querySelector('label');
    if (titleLabel) titleLabel.remove();
    editTitle.remove();

    let descLabel = collapsibleSect.querySelector('label');
    if (descLabel) descLabel.remove();
    editDescription.remove();

    title.style.display = `block`;
    descriptionParagraph.style.display = `block`;
    prioritySelect.disabled = true;
    editDueDate.readOnly = true;
    editBtn.focus();
    editBtn.style.display = `block`;
    saveBtn.style.display = `none`;
    deleteBtn.style.display = `block`;
    cancelBtn.style.display = `none`;

    if (descriptionParagraph.textContent.length > collapsibleThreshold) {
        collapsibleSect.style.maxHeight = '60px';
        isExpanded = false;
        expandColToggle.setAttribute('aria-expanded', 'false');
        expandColToggle.style.display = 'block';
    } else {
        collapsibleSect.style.maxHeight = 'none';
        isExpanded = true;
        expandColToggle.setAttribute('aria-expanded', 'true');
        expandColToggle.style.display = 'none';
    }

    updatePriorityIndicator();
    updateCardStyling();
});


cancelBtn.addEventListener(`click`, () => {
    title.textContent = previousTitle;
    descriptionParagraph.textContent = previousDescription;
    prioritySelect.value = previousPriority;
    editDueDate.value = previousDueDate;

    let titleLabel = titleHeader.querySelector('label');
    if (titleLabel) titleLabel.remove();
    let editTitle = document.getElementById('editTitle');
    if (editTitle) editTitle.remove();

    let descLabel = collapsibleSect.querySelector('label');
    if (descLabel) descLabel.remove();
    let editDescription = document.getElementById('editDescription');
    if (editDescription) editDescription.remove();

    title.style.display = `block`;
    descriptionParagraph.style.display = `block`;
    editBtn.style.display = `block`;
    saveBtn.style.display = `none`;
    cancelBtn.style.display = `none`;
    deleteBtn.style.display = `block`;
    prioritySelect.disabled = true;
    editDueDate.readOnly = true;
    editBtn.focus();

    if (descriptionParagraph.textContent.length > collapsibleThreshold) {
        collapsibleSect.style.maxHeight = '60px';
        isExpanded = false;
        expandColToggle.setAttribute('aria-expanded', 'false');
        expandColToggle.style.display = 'block';
    } else {
        collapsibleSect.style.maxHeight = 'none';
        isExpanded = true;
        expandColToggle.setAttribute('aria-expanded', 'true');
        expandColToggle.style.display = 'none';
    }

    updatePriorityIndicator();
    updateCardStyling();
})


expandColToggle.addEventListener(`click`, () => {
    isExpanded = !isExpanded;
    if (isExpanded) {
        collapsibleSect.style.maxHeight = 'none';
        expandColToggle.textContent = 'Collapse';
        expandColToggle.setAttribute('aria-expanded', 'true');
    } else {
        collapsibleSect.style.maxHeight = '60px';
        expandColToggle.textContent = 'Expand';
        expandColToggle.setAttribute('aria-expanded', 'false');
    }
});

toggleCheck.addEventListener(`change`, () => {
    if (toggleCheck.checked) {
        statusControl.value = `Done`;
        title.style.textDecoration = 'line-through';
    } else {
        statusControl.value = `Pending`;
        title.style.textDecoration = 'none';
    }
    updateCardStyling();
});

statusControl.addEventListener(`input`, () => {
    if (statusControl.value == `Pending` || statusControl.value == `In Progress`) {
        toggleCheck.checked = false;
        title.style.textDecoration = 'none';
    } else {
        toggleCheck.checked = true;
        title.style.textDecoration = 'line-through';
    }
    updateCardStyling();
    updatePriorityIndicator();
});

prioritySelect.addEventListener(`change`, () => {
    updatePriorityIndicator();
});


setInterval(function () {
    const dueDate = new Date(`${editDueDate.value}`);
    const now = new Date();
    const diff = dueDate - now;

    if (statusControl.value === 'Done') {
        timeRemaining.textContent = 'Completed';
        timeRemaining.classList.remove('overdue');
        timeRemaining.classList.add('completed');
        overdueIndicator.classList.remove('overdue');
        return;
    }

    timeRemaining.classList.remove('completed');

    if (diff < 0) {
        let overdueTime = Math.abs(diff);
        overdueIndicator.classList.add('overdue');
        timeRemaining.classList.add('overdue');

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
        overdueIndicator.classList.remove('overdue');
        timeRemaining.classList.remove('overdue');

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

}, 800);




const body = document.getElementById('body');
deleteBtn.addEventListener(`click`, () => {
    const confirmDelete = confirm('Delete Note?');
    if (confirmDelete) {
        body.style.display = `none`;
        return;
    };
});
