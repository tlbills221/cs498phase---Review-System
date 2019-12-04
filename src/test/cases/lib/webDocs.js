const { expect } = require('../../chai') 
const sinon = require('sinon') 
const chaiHttp = require('../../chai-http')

describe('Remote Docs - hosted separately', () => { 
	describe('Web Docs', () => { 
		afterEach(() => { 
            sandbox. restore() 
        })
		
		it('active_courses.html exists and is accessible', async () => {
            // Arrange
			const url = "https://www.cs.uky.edu/~tlbi226/cs498/about/active_courses.html"
			//Act
			const result = 
			//Assert
			const expect(result).to.equal(expectedNum)
        })
    })