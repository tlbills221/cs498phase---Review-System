const pfHelp = require('../../../main/views/course/manage.html')
const indexHelp = require('../../../main/views/course/index.html') 
const { expect } = require('../../chai') 
const sinon = require('sinon') 

const sandbox = sinon.createSandbox(); 

describe('pfHelp', () => { 
     var htmlTable = htmlFile.getElementById('student_learning_outcome_rubric')
     var expected
     var result
     afterEach(() => { 
         sandbox. restore() 
     })
     //exceeds
        it('returns true when exceeds is blue', async () => {
            // Arrange
            expectedColor = "aqua"

            // Act
            if (htmlTable.rows[0].bgColor == "aqua") {
                 result = true
            }
            else result = false;
     
            // Assert
            expect(result).to.true
        })
     
     //meets
        it('returns true when meets is green', async () => {
            // Arrange
            expectedColor = "lime"

            // Act
            if (htmlTable.rows[1].bgColor == "lime") {
                 result = true
            }
            else result = false;
     
            // Assert
            expect(result).to.true
        })
        
     //partially
        it('returns true when partially is yellow', async () => {
            // Arrange
            expectedColor = "gold"

            // Act
            if (htmlTable.rows[2].bgColor == "gold") {
                 result = true
            }
            else result = false;
     
            // Assert
            expect(result).to.true
        })

     //Fails
        it('returns true when fails is red', async () => {
            // Arrange
            expectedColor = "salmon"

            // Act
            if (htmlTable.rows[3].bgColor == "salmon") {
                 result = true
            }
            else result = false;
     
            // Assert
            expect(result).to.true
        })
    })
})
