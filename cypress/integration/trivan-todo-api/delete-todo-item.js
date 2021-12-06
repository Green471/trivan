describe('QA Interviev Todo Api', () => {
    beforeEach(() => {
        cy.request('https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos')
        .as('userTodos')
    })

    it('delete a todo item', () => {
        cy.get('@userTodos').then((response) => {
            cy.request('DELETE', `https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos/2`)
            .as('deleteTodo')
            cy.get('@deleteTodo').then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

})