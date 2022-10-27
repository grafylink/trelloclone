// selection des 3 containers
const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

//déclaration de variable pour pouvoir cibler les éléments
let actualContainer: HTMLDivElement,
    actualBtn: HTMLButtonElement,
    actualUL: HTMLUListElement,
    actualForm: HTMLFormElement,
    actualTextInput: HTMLInputElement,
    actualValidation: HTMLSpanElement

// fonction globale permettant d'agir à l'écoute d'un évènement (event listener)
function addContainerListners(currentContainer:HTMLDivElement) {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
   const currentAddItemBtn = currentContainer.querySelector('.add-item-btn') as HTMLButtonElement
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
}

itemsContainer.forEach((container:HTMLDivElement) => {
    addContainerListners(container);
})

function deleteBtnListeners(btn: HTMLButtonElement){
    btn.addEventListener('click', handleContainerDeletion);
}

function addItemBtnListeners(btn: HTMLButtonElement){
    btn.addEventListener('click', handleAddItem)
}

function handleContainerDeletion(e: MouseEvent){
    const btn = e.target as HTMLButtonElement;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLButtonElement[];
    containers[btnsArray.indexOf(btn)].remove();
}

function handleAddItem(e: MouseEvent){
    const btn = e.target as HTMLButtonElement;
    if(actualContainer) toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true)
}

function toggleForm(btn: HTMLButtonElement, form: HTMLFormElement, action: Boolean){
    if(!action){
        form.style.display = "none";
        btn.style.display = "block";
    } else if (action){
        form.style.display = "block";
        btn.style.display = "none";
    }
}



function setContainerItems(btn: HTMLButtonElement){
    actualBtn = btn;
    actualContainer = btn.parentElement as HTMLDivElement;
    actualUL = actualContainer.querySelector('ul') as HTMLUListElement;
    actualForm = actualContainer.querySelector('form') as HTMLFormElement;
    actualTextInput = actualContainer.querySelector('input') as HTMLInputElement;
    actualValidation = actualContainer.querySelector('.validation-msg') as HTMLSpanElement;
}
