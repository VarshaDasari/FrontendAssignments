// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
const results=()=>{
    const studentsList=[
        {name:'Varsha', subjects:[{subject:'Grammer',marks:80},{subject:'Accounts',marks:79}]},
        {name:'Megha', subjects:[{subject:'Grammer',marks:45},{subject:'Accounts',marks:98}]},
        {name:'Manu', subjects:[{subject:'Grammer',marks:100},{subject:'Accounts',marks:79}]},
        {name:'Abhi', subjects:[{subject:'Grammer',marks:60},{subject:'Accounts',marks:69}]},
        {name:'Akhil', subjects:[{subject:'Grammer',marks:28},{subject:'Accounts',marks:53}]},
        {name:'Arun', subjects:[{subject:'Grammer',marks:35},{subject:'Accounts',marks:44}]},
        {name:'Akshaya', subjects:[{subject:'Grammer',marks:43},{subject:'Accounts',marks:90}]}
    ]
    const result=()=>
    studentsList.reduce((obj,item)=>{
        let percenRes=item.subjects.reduce(()=>{
            return (item.subjects[0].marks+item.subject[1].marks)/item.subjects.length;
        },{})
        console.log({'name':item.name,'percentage':percenRes});
    },{})
    const finResult=result(studentsList);
    return finResult;
    }
    results();s
        
