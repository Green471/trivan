/// <reference types="Cypress"/>
describe('QA Interviev Todo Api', () => {
    beforeEach(() => {
        cy.request('https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos')
        .as('userTodos')
        
    })

    it('Validate status code', () => {
        cy.get('@userTodos')
        .its('status')
        .should('eq', 200)

    })
    it('Validate the body contentType', () => {
        cy.get('@userTodos')
        .its('headers')
        .should('have.property', 'content-type', 'application/json; charset=utf-8')

    })

   


    it('A todo item should have the following fields id: number, text: string, done: boolean', () => {
        cy.get('@userTodos').then((response) => {
            const todo = response.body
            expect(typeof todo[0].id).to.equal('number')
            expect(typeof todo[0].text).to.equal('string')
            expect(typeof todo[0].done).to.equal('boolean')
        })
    })

    it('Get all todo items', () => {
        cy.get('@userTodos').then((response) => {
            const todo = response.body
          
            cy.log(todo[0].id)
            cy.log(todo[0].text)
            cy.log(todo[0].done)
            
        })
     })

        it('Get a todo item by id', () => {
            cy.get('@userTodos').then((response) => {
                const todo = response.body
                cy.request('https://adil-qa-interview-todo-api-3otdz.ondigitalocean.app/todos/'+todo[0].id)
                .as('todo')
                cy.get('@todo').then((response) => {
                    const todo = response.body
                    cy.log(todo.id)
                })
            })
        })

       

    

    
    })
    

    


