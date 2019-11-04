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
	})})
