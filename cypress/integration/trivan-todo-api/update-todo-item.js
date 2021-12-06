
    describe('QA Interviev Todo Api', () => {
    beforeEach(() => {
        cy.request('https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos')
        .as('userTodos')
    })


    it('update last todo item', () => {
        cy.get('@userTodos').then(response => {
         //   const todos = response.body
            const updateTodo = {
                id: 2,
                title: 'updated item',
                completed: true
            }
            cy.request({
                method: 'PUT',
                url: 'https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos/2',
                body: updateTodo,
                failOnStatusCode: false
            }).as('updateTodo')
        })
        cy.get('@updateTodo').then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('updated item')
            expect(response.body.completed).to.eq(true)
        })
    })
    })
    