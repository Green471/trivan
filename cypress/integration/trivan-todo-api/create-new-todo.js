describe('QA Interviev Todo Api', () => {
    beforeEach(() => {
        cy.request('https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos')
        .as('userTodos')
        
    })

    it('Create new todo', () => {
        cy.get('@userTodos').then(response => {
            const todos = response.body
            const lastTodo = todos[todos.length - 1]
            const newTodo = {
                id: lastTodo,
                title: 'New Todo',
                completed: true
            }
            cy.request({
                method: 'POST',
                url: 'https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos',
                body: newTodo,
                failOnStatusCode: false
            }).as('newTodo')
        })
            cy.get('@newTodo').then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq('New Todo')
        })
    })

   

    
})