const { expect } = require('../../chai') 
const sinon = require('sinon') 
const chaiHttp = require('chai-http')

describe('Remote Docs - hosted separately', () => { 
	describe('Web Docs', () => { 
		const host_url = 'https://www.cs.uky.edu/~tlbi226/cs498/about/active_courses.html'
		it('active_courses.html exists and is accessible', async () => {
            // Arrange
			const file = 'active_courses.html'
			//Act
			result = chai.request.get('/' + file)
			//Assert
			const expect(result).to.equal.not(null)
        })
		
		it('archived_courses.html exists and is accessible', async () => {
            // Arrange
			const file = 'archived_courses.html'
			//Act
			result = chai.request.get('/' + file)
			//Assert
			const expect(result).to.equal.not(null)
        })
		
		it('assess_score.html exists and is accessible', async () => {
            // Arrange
			const file = 'assess_score.html'
			//Act
			result = chai.request.get('/' + file)
			//Assert
			const expect(result).to.equal.not(null)
        })
		
		it('slo.html exists and is accessible', async () => {
            // Arrange
			const file = 'slo.html'
			//Act
			result = chai.request.get('/' + file)
			//Assert
			const expect(result).to.equal.not(null)
        })
		
		it('course_summary.html exists and is accessible', async () => {
            // Arrange
			const file = 'course_summary.html'
			//Act
			result = chai.request.get('/' + file)
			//Assert
			const expect(result).to.equal.not(null)
        })
    })
})