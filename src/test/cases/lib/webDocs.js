const { expect } = require('../../chai') 
const sinon = require('sinon') 
const chai = require('chai')
	, chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Remote Docs - hosted separately', () => { 
	describe('Web Docs', () => { 
		const host_url = 'https://www.cs.uky.edu/~tlbi226/cs498/about'
		it('active_courses.html exists and is accessible', async () => {
            		// Arrange
			const file = 'active_courses.html'
			//Act
			chai.request(host_url)
				.get('/' + file)
				.then(function(res) {
			//Assert
			expect(res).to.not.have.status(404);
			})
        })
		
		it('archived_courses.html exists and is accessible', async () => {
            		// Arrange
			const file = 'archived_courses.html'
			//Act
			chai.request(host_url)
				.get('/' + file)
				.then(function(res) {
			//Assert
			expect(res).to.not.have.status(404);
			})
        })
		
		it('assess_score.html exists and is accessible', async () => {
            		// Arrange
			const file = 'assess_score.html'
			//Act
			chai.request(host_url)
				.get('/' + file)
				.then(function(res) {
			//Assert
			expect(res).to.not.have.status(404);
			})
        })
		
		it('slo.html exists and is accessible', async () => {
            		// Arrange
			const file = 'slo.html'
			//Act
			chai.request(host_url)
				.get('/' + file)
				.then(function(res) {
			//Assert
			expect(res).to.not.have.status(404);
			})
        })
		
		it('course_summary.html exists and is accessible', async () => {
            		// Arrange
			const file = 'course_summary.html'
			//Act
			chai.request(host_url)
				.get('/' + file)
				.then(function(res) {
			//Assert
			expect(res).to.not.have.status(404);
			})
        })
    })
})
