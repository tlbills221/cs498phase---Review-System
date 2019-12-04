const { expect } = require('../../chai') 
const sinon = require('sinon') 
const chaiHttp = require('../../chai-http')

describe('Remote Docs - hosted separately', () => { 
	describe('Web Docs', () => { 
		afterEach(() => { 
            sandbox. restore() 
        })
		const host_url = 'https://www.cs.uky.edu/~tlbi226/cs498/about/active_courses.html'
		it('active_courses.html exists and is accessible', async () => {
            // Arrange
			const file = 'active_courses.html'
			//Act
			result = chai.request.get('/' + file)
			//Assert
			const expect(result).to.equal.not(null)
        })
    })