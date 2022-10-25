"use strict";
// selection des 3 containers
const itemsContainer = document.querySelectorAll('.items-container');
// fonction globale permettant d'agir à l'écoute d'un évènement (event listener)
function addContainerListners(currentContainer) {
    // event clic sur la croix pour enlever un element du DOM
    // 1-je selectionne mon btn concerné
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    // 2 J'applique une action : la fonction delete que je crée juste après
    deleteBtnListeners(currentContainerDeletionBtn);
}
itemsContainer.forEach((container) => {
    addContainerListners(container);
});
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)].remove();
}
