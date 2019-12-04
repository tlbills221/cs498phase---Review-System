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
    })
})
