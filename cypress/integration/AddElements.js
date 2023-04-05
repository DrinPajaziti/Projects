const url = 'https://the-internet.herokuapp.com/add_remove_elements/';
const addButton = 'button';
const removeButton = 'button.added-manually';


function buttonTest() {
    cy.visit(url);
    cy.get(addButton).then(($addButton) => {
        for (let i = 0; i < 5; i++) {
            cy.wrap($addButton).click();
        }
    });
    cy.get(removeButton).then(($removeButton) => {
        for (let i = 0; i < 5; i++) {
            cy.wrap($removeButton).click({ multiple: true });
            break;
        }
    });
    cy.contains(removeButton).should('not.exist');
}


export default {
    url,
    addButton,
    removeButton,
    buttonTest
}