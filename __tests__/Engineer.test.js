const { TestWatcher } = require('jest')
const Engineer = require('../lib/Engineer')

//add class object
test('engineer class testing', () => {
    const engineer = new Engineer('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'alfrugo')
    expect(engineer.github).toEqual(expect.any(String))
})

//gets tests 

test('github get testing', () => {
    const engineer = new Engineer('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'alfrugo')
    expect(engineer.getGihub()).toEqual(expect.any(String));
});
test('role get testing', () => {
    const engineer = new Engineer('AlfrugoTest', 'ID-Test-2022', 'diez_alfredo@TESTmail.com', 'alfrugo');
    expect(engineer.getRole()).toEqual(expect.any(String))
});