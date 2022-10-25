// selection des 3 containers
const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

// fonction globale permettant d'agir à l'écoute d'un évènement (event listener)
function addContainerListners(currentContainer:HTMLDivElement) {
    
    // event clic sur la croix pour enlever un element du DOM
    // 1-je selectionne mon btn concerné
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    // 2 J'applique une action : la fonction delete que je crée juste après
    deleteBtnListeners(currentContainerDeletionBtn);
}

itemsContainer.forEach((container:HTMLDivElement) => {
    addContainerListners(container)
})

function deleteBtnListeners(btn: HTMLButtonElement){
    btn.addEventListener('click', handleContainerDeletion);
}

function handleContainerDeletion(e: Event){
    const btn = e.target as HTMLButtonElement;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLButtonElement[];
    containers[btnsArray.indexOf(btn)].remove();
}
