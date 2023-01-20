// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Max", { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.4],
//   [-4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints);
//   }
// }

// const hobbies = ["Cooking", "Sports"];
// hobbies.push("Reading"); // 마지막 추가
// hobbies.unshift("Coding"); // 첫번째 추가
// const poppedValue = hobbies.pop(); // 마지막 삭제
// hobbies.shift(); // 첫번쨰 삭제
// hobbies[1] = 'Coding'

// console.log(hobbies);

// hobbies.splice(1,0, 'Good Food')
// console.log(hobbies);

// hobbies.splice(0,1)
// console.log(hobbies);

const testResults = [1, 5.1, 3, 25, -12, 10.44, 5];
// const storedResults = testResults.slice(0, 2);
const storedResults = testResults.concat([3.99, 10])

testResults.push(5.91)

console.log(storedResults,testResults);