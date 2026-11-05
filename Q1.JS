const students =[

    {name:"Abel",score:85,subject:"Math"},
    {name:"Sara",score:42,subject:"Math"},
    {name:"Hanan",score:91,subject:"Math"},
    {name:"Dawit",score:67,subject:"Math"}
];
function getGrade(score){
if (score >=80){
    return"A";
}else if (score >=60){
    return"B";
}
else {return "F";
}
}
const formatStudent=(student)=>{
    const {name,score}=student;

    return `${name.toUpperCase()} scored ${score}-> 
    Grade ${getGrade(score)}`;

};


const formattedStudents=
students.map(formatStudent);

for(const line of formattedStudents){
    console.log(line);

}

const passedStudents=
students.filter(student=>student.score>=60)


console.log(`passed: ${passedStudents.length} out of ${students.length}`);

   const total=students.reduce((sum,student)=>{
    return sum+ student.score;
   },0);


   let average = total/students.length;

   console.log(`class average:${average}`);

   const newStudent={
    name: "Marta",
    score:78,
    subject:"math"
   };
   

   const allStudents=[...students,newStudent];


   console.log(`New class size after adding  Marta:$
    {allStudents.length}`);


