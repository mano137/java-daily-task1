console.clear();

// 1. Student Data
let students = [
  {
    id: 11,
    name: " Mano",
    course: "JavaScript",
    marks: 95,
    joiningDate: new Date("2025-02-12")
  },
  {
    id: 22,
    name: " Selvi ",
    course: "HTML",
    marks: 85,
    joiningDate: new Date("2025-11-17")
  },
  {
    id: 33,
    name: " Rishi ",
    course: "JavaScript",
    marks: 100,
    joiningDate: new Date("2026-08-20")
  },
  {
    id: 44,
    name: " Guhan ",
    course: "HTML",
    marks: 55,
    joiningDate: new Date("2026-10-05")
  }
];

// Current date and time
let now = new Date();
console.log("Dashboard run at:", now.toLocaleDateString() + " " + now.toLocaleTimeString());

// Helper: show a date in a readable way
function showDate(date) {
  return date.toLocaleDateString();
}
//student list: 
    //"11 - Mano - JavaScript - joined 2/12/2025",
    //"22 - Selvi - HTML - joined 11/17/2025",
    //"33 - Rishi - JavaScript - joined 8/20/2026",
    //"44 - Guhan - HTML - joined 10/5/2026"

// 2. map 
let studentList = students.map(student => student.id + " - " + student.name.trim() + " - " + student.course + " - joined " + showDate(student.joiningDate));
console.log("\n1. Student list:", studentList);

// 3. filter 
let jsStudents = students.filter(student => student.course === "JavaScript");
console.log("\n2. JavaScript students:", jsStudents.map(student => student.name.trim()));
//[ "Mano", "Rishi"]
   
// 4. reduce 
let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;
console.log("\n3. Total marks:", totalMarks, "| Average:", averageMarks);
//Total Marks: 335 Average83.75

// 5. forEach
console.log("\n4. Results:");
students.forEach(student => {
  let result = student.marks >= 50 ? "PASS" : "FAIL";
  let daysSinceJoining = Math.floor((now - student.joiningDate) / (1000 * 60 * 60 * 24));
  console.log("   " + student.name.trim() + " - " + student.marks + " - " + result + " (joined " + daysSinceJoining + " days ago)");
});
// Results:
//style.js:62    Mano - 95 - PASS (joined 621 days ago)//
//style.js:62    Selvi - 85 - PASS (joined 343 days ago)//
//style.js:62    Rishi - 100 - PASS (joined 67 days ago)//
//style.js:62    Guhan - 55 - PASS (joined 21 days ago)//


// 6. find 
let found = students.find(student => student.id === 33);
console.log("\n5. Found:", found.name.trim(),  "-", found.course);

// 7. some 
let hasFailed = students.some(student => student.marks < 50);
console.log("\n6. Any student failed?", hasFailed ? "YES" : "NO");
// Any student failed? NO//

// 8. every 
let allAbove40 = students.every(student => student.marks >= 40);
console.log("\n7. Everyone scored 40 or more?", allAbove40);
// Everyone scored 40 or more? true//
// 9. sort 
let byMarks = students.slice().sort((a, b) => b.marks - a.marks);
console.log("\n8. Ranking by marks:", byMarks.map(student => student.name.trim() + " - " + student.marks));
//Ranking by marks: (4) ['Rishi - 100', 'Mano - 95', 'Selvi - 85', 'Guhan - 55']0: "Rishi - 100"1: "Mano - 95"2: "Selvi - 85"3: "Guhan - 55"length: 4[[Prototype]]: Array(0)

// 10. sort 
let byDate = students.slice().sort((a, b) => b.joiningDate - a.joiningDate);
console.log("\n9. Latest joined first:", byDate.map(student => student.name.trim() + " - " + showDate(student.joiningDate)));

//Latest joined first: (4) ['Guhan - 10/5/2026', 'Rishi - 8/20/2026', 'Selvi - 11/17/2025', 'Mano - 2/12/2025']//