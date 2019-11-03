const htmlFile = require('../../../main/views/course/manage.html') 
const { expect } = require('../../chai') 
const sinon = require('sinon') 

const sandbox = sinon.createSandbox(); 

describe('htmlFile', () => { 
     var htmlTable = document.getElementById('student_learning_outcome_rubric')
     afterEach(() => { 
         sandbox. restore() 
     })
        
        it('returns true when exceeds is blue', async () => {
            // Arrange
            //User.query()
            sandbox.stub(User, "query").returns({
                //User.query().findById()
                findById: sandbox.stub().returns({
                    id: 1,
                    linkblue_username: 'egto222'
                })
            })

            // Act
            const result = await user_lib.is_whitelisted('egto222')

            // Assert
            expect(result).to.true
        })
        
        it('returns false when the color is incorrect', async () => {
            // Arrange
            const User = require('../../../main/models/User')

            // User.query()
            sandbox.stub(User, "query").returns({
                    //User.query().findById()
                    findById: sandbox.stub().returns(null) //no user obj returned
            })

            // Act
            const result = await user_lib.is_whitelisted('egto222')

            // Assert
            expect(result).to.false
        })
    })
})
