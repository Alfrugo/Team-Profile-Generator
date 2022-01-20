const { TestWatcher } = require('jest')
const Intern = require('../lib/Intern')

//add class object
test('intern class testing', () => {
    const intern = new Intern('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'SLU')
    expect(intern.school).toEqual(expect.any(String))
})

//gets tests 

test('school get testing', () => {
    const intern = new Intern('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'SLU')
    expect(intern.getSchool()).toEqual(expect.any(String));
});
test('role get testing', () => {
    const intern = new Intern('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'SLU');
    expect(intern.getSchool()).toEqual(expect.any(String))
});