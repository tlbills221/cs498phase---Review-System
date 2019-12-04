const CALARCOde_common = require('../../../main/common/CALARCOde')
const { expect } = require('../../chai')
const sinon = require('sinon') 

const sandbox = sinon.createSandbox(); 

describe('common - CALARCOde', () => {

	describe('Purell', () => {

		it('does nothing to good ints', async () => {
			const result = CALARCOde_common.Purell("1", 'i')

			expect(result).to.equal(1)
		})
    
    		it('does nothing to good strings', async () => {
			const result = CALARCOde_common.Purell("yo", 's')

			expect(result).to.equal("yo")
		})

    		it('returns NaN on bad int', async () => {
			const result = CALARCOde_common.Purell("yo", 'i')

			expect(result).to.equal(NaN)
		})
	})
	
	describe('AddUser', () => {
		afterEach(() => { 
            		sandbox. restore() 
        	})
		
		it('adds users', async () => {
            	// Arrange
            	const User = require('../../../main/models/User')
            	CALARCOde_common.AddUser('egto222')
            	// Act
            	const result = await user_lib.is_whitelisted('egto222')

            	// Assert
            	expect(result).to.true
        	})
	})
	
	describe('Randoms', () => {
		it('returns n random ints if n <= 10' async () => {
			const result = CALARCOde_common.randoms(5)

			expect(result.length).to.equal(5)
		})
		it('returns 10 random ints if 10 < n <= 100' async () => {
			const result = CALARCOde_common.randoms(11)

			expect(result.length).to.equal(10)
		})
		it('returns 10 percent of n random ints if 100 < n' async () => {
			const result = CALARCOde_common.randoms(110)

			expect(result.length).to.equal(11)
		})
	})

	describe('Easy', () => {
		it('always returns the proper HTML' async () => {
			const result = CALARCOde_common.easy()

			expect(result.length).to.equal("<p><br><center><b><font size='7' color='red'>you are entering student learning outcome evaluations not assignment grades.<p>these reports are important to understand how well a course is preparing students and is not an evaluation of the professor.</font></b></center><br><br>")
		})
	})

	describe('StressTest', () => {
		afterEach(() => { 
            		sandbox. restore() 
        	})
		
		it('works', async () => {
            	// Arrange
            	const User = require('../../../main/models/User')
            	var i
		for(i =0; i<30; i++)
			CALARCOde_common.AddUser(i)
            	// Act
		for(i =0; i<30; i++)
            		var result = result * await user_lib.is_whitelisted(i)

            	// Assert
            	expect(result).to.true
        	})
	})

})
