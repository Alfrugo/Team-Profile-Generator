const { TestWatcher } = require('jest')
const Employee = require('../lib/Employee')

//add class object
test('employee class testing', () => {
    const employee = new Employee('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String));
})

//gets tests 
test('employee name get testing', () => {
    const employee = new Employee('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com')
    expect(employee.getName()).toEqual(expect.any(String));
});

test('id name get testing', () => {
    const employee = new Employee('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com')
    expect(employee.getID()).toEqual(expect.any(String));
});
test('email get testing', () => {
    const employee = new Employee('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String))
});