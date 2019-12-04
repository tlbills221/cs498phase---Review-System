const { expect } = require('../../chai') 
const sinon = require('sinon') 
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var dom;
var htmlTable;
const options = {
    contentType: 'text/html',
};

const sandbox = sinon.createSandbox(); 
describe('Portfolio Colors', () => { 
    /*beforeEach(function(done) {
        //JSDOM.fromFile('src/main/views/course/manage.html')
        .then((dom) => {
            var htmlTable = dom.window.document.querySelector('student_learning_outcome_rubric')
        })
        .then(done, done);
    })*/
    var dom = new JSDOM(`<section id="course_manage_page" class="container">
	<h2>CS498 Course Portfolio</h2>
	<div class="container row">
		Course Summary
	</div>
	<div class="container row">
		{{#student_learning_outcomes}}
		<h3>Student Learning Outcome {{index}}</h3>
		<p>{{description}}</p>
		<table id="student_learning_outcome_rubric">
			<tr>
				<th>Assessment Score</th>
				{{#metrics}}
				<th>{{name}}</th>
				{{/metrics}}
			</tr>
			<tr bgcolor="aqua">
				<td>Exceeds Standards</td>
				{{#metrics}}
				<td>{{exceeds}}</td>
				{{/metrics}}
			</tr>
			<tr bgcolor="lime">
				<td>Meets Standards</td>
				{{#metrics}}
				<td>{{meets}}</td>
				{{/metrics}}
			</tr>
			<tr bgcolor="gold">
				<td>Partially Meets Standards</td>
				{{#metrics}}
				<td>{{partially}}</td>
				{{/metrics}}
			</tr>
			<tr bgcolor="salmon">
				<td>Does Not Meet Standards</td>
				{{#metrics}}
				<td>{{not}}</td>
				{{/metrics}}
			</tr>
		</table>
		{{#artifacts}}
		<div class="container row">
			<h3>Artifact 1: {{name}}</h3>
			<form id="edit_course_form" target="_self" method="POST">
				<table>
					<tr>
						<th>Student Index</th>
						{{#metrics}}
						<th>{{name}}</th>
						{{/metrics}}
						<th>Student Submission</th>
					</tr>
					{{#evaluations}}
					<tr>
						<td>{{index}}</td>
						{{#evaluation}}
						<td>
							<select name="student-{{index}}-category-{{metric}}">
								<option value="6">Exceeds</option>
								<option value="7">Meets</option>
								<option value="8">Partially</option>
								<option value="9">Not</option>
								<option value="10">Does Not Apply</option>
							</select>
							<script>$('[name=student-{{index}}-category-{{metric}}]').val('{{value}}')</script>
						</td>
						{{/evaluation}}
						<td>
							<input name="student-1-submission" type="file"></input>
							attach <i class="material-icons">attachment</i>
						</td>
					</tr>
					{{/evaluations}}
				</table>
				<input type="submit" />
			</form>
		</div>
		{{/artifacts}}
		{{/student_learning_outcomes}}
	</div>
</section>`)
     var htmlTable = dom.window.document.getElementById('student_learning_outcome_rubric')
     var expectedColor = 'default'
     var result
     afterEach(() => { 
         sandbox. restore() 
     })
     //exceeds
        it('exceeds is blue', async () => {
            // Arrange
            expectedColor = 'aqua'

            // Act
            result = htmlTable.rows[1].bgColor;
     
            // Assert
            expect(result).to.equal(expectedColor)
        })
     
     //meets
        it('meets is green', async () => {
            // Arrange
            expectedColor = 'lime'

            // Act
            result = htmlTable.rows[2].bgColor;
     
            // Assert
            expect(result).to.equal(expectedColor)
        })
        
     //partially
        it('partially is yellow', async () => {
            // Arrange
            expectedColor = 'gold'

            // Act
            result = htmlTable.rows[3].bgColor;
     
            // Assert
            expect(result).to.equal(expectedColor)
        })

     //Fails
        it('doesn\'t is red', async () => {
            // Arrange
            expectedColor = 'salmon'

            // Act
            result = htmlTable.rows[4].bgColor;
     
            // Assert
            expect(result).to.equal(expectedColor)
        })
})

