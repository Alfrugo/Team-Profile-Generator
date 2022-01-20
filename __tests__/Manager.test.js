const { TestWatcher } = require('jest')
const Manager = require('../lib/Manager')

//add class object
test('manager class testing', () => {
    const manager = new Manager('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'north')
    expect(manager.office).toEqual(expect.any(String))
})

//gets tests 

test('office get testing', () => {
    const manager = new Manager('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'north')
    expect(manager.getOffice()).toEqual(expect.any(String));
});
test('role get testing', () => {
    const manager = new Manager('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'north');
    expect(manager.getRole()).toEqual(expect.any(String))
});