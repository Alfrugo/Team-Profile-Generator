# Team Profile Generator

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

<img src="https://user-images.githubusercontent.com/36056407/150695746-34adc8c6-a1f6-426d-9a7d-4c2a566bf08a.png">

## Instructions

To run the the application you will need Node JS installed.  Type node index.js to execute the application. 

You can also run Jest test in the application to verify the /lib classes are working properly and pass the test. You will need to install Jest to run the tests. Type npm test to run the test. 

## License
The license used for this project is MIT.

This project was created by [Alfredo Diez](https://alfredo-diez.com)  - Please, [contact me](mailto:diez_alfredo@hotmail.com) if you have further questions. 

Repo link [https://github.com/Alfrugo/Team-Profile-Generator](https://github.com/Alfrugo/Team-Profile-Generator) 
 
