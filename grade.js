const marks = 85;

const grade = 
marks >= 80 
? "A+" 
: marks >= 70 
? "A" 
: marks >= 60
? "B" 
: marks >=50
? "C"
: marks >= 40
? "D" : "F";

console.log(`Your grade is: ${grade}`);

const mathMarks = 95;
const scienceMarks = 95;
const englishMarks = 75;
const banglaMarks = 85;
const arabicMarks = 85;
const isPass = true;

const finalGrade = 
mathMarks >= 80 && scienceMarks >= 80 && englishMarks >= 80 && banglaMarks >= 80 && arabicMarks >= 80
? "A+"
: mathMarks >= 70 && scienceMarks >= 70 && englishMarks >= 70 && banglaMarks >= 70 && arabicMarks >= 70
? "A"
: mathMarks >= 60 && scienceMarks >= 60 && englishMarks >= 60 && banglaMarks >= 60 && arabicMarks >= 60
? "B"
: mathMarks >= 50 && scienceMarks >= 50 && englishMarks >= 50 && banglaMarks >= 50 && arabicMarks >= 50
? "C"
: mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40 && banglaMarks >= 40 && arabicMarks >= 40
? "D" : "F";

console.log(`Your final grade is: ${finalGrade}`);

const totalMarks = mathMarks + scienceMarks + englishMarks + banglaMarks + arabicMarks;
const averageMarks = totalMarks / 5;
const finalResult = 
averageMarks >= 80
? "Pass"
: "Fail";

console.log(`Your final result is: ${finalResult}`);
console.log(averageMarks)