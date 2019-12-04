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
	<p><br><center><b><font size="7" color="red">
	you are entering student learning outcome evaluations not assignment grades.
	<p>these reports are important to understand how well a course is preparing students and is not an evaluation of the professor.
	</font></b></center><br><br>
	
	<h2>CS498 Course Portfolio</h2>
	<div class="container row">
		Course Summary
		<a href="https://www.cs.uky.edu/~tlbi226/cs498/about/course_summary.html"><b>What's This?</b></a>
	</div>
	<div class="container row">
		{{#student_learning_outcomes}}
		<h3>Student Learning Outcome Rubric {{index}} <a href="https://www.cs.uky.edu/~tlbi226/cs498/about/slo.html"><b>What's This?</b></a> </h3>
		<p>{{description}}</p>
		<table id="student_learning_outcome_rubric">
			<tr>
				<th>Assessment Score
				<a href="https://www.cs.uky.edu/~tlbi226/cs498/assess_score.html">What's This?</a>
				</th>
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
     var expectedColor = 'default'
     var result
     afterEach(() => { 
         sandbox. restore() 
     })
     //exceeds
        it('Rubric is present while filling out evaluations', async () => {
            // Arrange
            var htmlTable = dom.window.document.getElementById('student_learning_outcome_rubric')

            // Act
            result = htmlTable;
     
            // Assert
            expect(result).to.not.equal(null)
        })
})

