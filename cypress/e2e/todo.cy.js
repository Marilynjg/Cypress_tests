describe('Agregar tareas', () => {
    it('Agregar tarea a la lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
})

    it('Marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    cy.get('[data-testid="todo-item-toggle"]').click()
})
    it('Desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    cy.get('[data-testid="todo-item-toggle"]').click()  
    cy.get('[data-testid="todo-item-toggle"]').click() 
})
    it('Editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.focused().clear().type("Tarea 1 modificada{enter}")

})

     it('Borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get ('button.destroy').click({force:true})
    })

    it('Filtrar tareas', () => {
     cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    cy.get('.new-todo').type('Tarea 2{enter}')
    cy.get('.todo-list').contains('Tarea 2')
    cy.get('.new-todo').type('Tarea 3{enter}')
    cy.get('.todo-list').contains('Tarea 3')
    cy.get('.new-todo').type('Tarea 4{enter}')
    cy.get('.todo-list').contains('Tarea 4')
    cy.get('.new-todo').type('Tarea 5{enter}')
    cy.get('.todo-list').contains('Tarea 5')
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get(':nth-child(2) > a').click()
    cy.get(':nth-child(1) > a').click()
    

    


        })
})