const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

function createNewEmployee (employee) {
  calculateBonus(employee);
  let bonusPercentage = calculateBonus(employee);
  let totalBonus = bonusPercentage * employee.annualSalary;
  let totalCompensation = totalBonus + Number(employee.annualSalary);
  let newEmployee = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
  return newEmployee;
}
// end createNewEmployee

function calculateBonus(employee) {
  if (employees.reviewRating <= 2) {
    let bonusPercentage = 0;
    return bonusPercentage;
  }
  else if (employees.reviewRating === 3) {
    bonusPercentage = .04;
    return bonusPercentage;
  }
  else if (employee.reviewRating === 4){
    bonusPercentage = .06;
    return bonusPercentage;
  }
  else if (employee.reviewRating === 5){
    bonusPercentage = .1;
    return bonusPercentage;
  }
}

/* function yearsWithCompany(employee) {
  if (employee.employeeNumber.length === 4 ) {
    let extraBonusPercentage = 5;
  }
  else
  return
}*/

