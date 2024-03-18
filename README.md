Design and Implement an Automation Framework for Login Functionality.

Objective: The objective of this assignment is to assess your ability to design and implement an automation framework for testing the login functionality of a web application. The automation framework should demonstrate best practices in test automation, maintainability, and scalability.

Task: You are tasked with designing and implementing an automation framework to automate the login functionality of a web application. Please list the test scenarios you would want to cover for this functionality.

Below are the details:

1. Web Application Details:

You are free to use any generic website or test sites such as: https://practice.expandtesting.com/login
2. Automation Framework Requirements:

Choose a suitable test automation framework.
Implement a Page Object Model (POM) or a similar design pattern for your automation framework.
3. Submission Guidelines:

JavaScript/TypeScript is preferred, but you are free to use any programming language and test automation tools/frameworks of your choice.
Submit your automation framework code along with instructions, if any.
Include a brief explanation of your framework design decisions and any additional features you have implemented.

------------------------------------------------------------------------------------------------------

1. Used the test site provided : https://practice.expandtesting.com/login
2. Chose cypress for test automation framework. Implemented POM.
3. Used JavaScript as it is preffered.
---------------------------------------------------------------------------------------------------------

Instructions : 
To run your Cypress tests, follow these short instructions:

1. Install Dependencies: First, make sure you're in your project directory, then run: npm install
2. Open Cypress GUI: To open the Cypress Test Runner (GUI), run: npm run cy:cli
3. Run Tests Headlessly: To run tests headlessly in Chrome, use: npm run cy:headless

----------------------------------------------------------------------------------------------------------------

Test cases for Login functionality : 
1. User is able to login with valid credentials
2. Password input should be hidden on login
3. Input fields should be empty after fail to login
4. User should see invalid username alert when username is not registered or empty
5. User should see invalid username alert with valid password and wrong username
6. User should see invalid password with valid username and empty/wrong password
(Login Functionality for logged user)
7. User is able to logout from Secure Area
8. User remains logged in after navigating in the app
9. User sees the alert when trying to navigate to login again

-------------------------------------------------------------------------------------------------------------------

Framework desciption : 
-'package.json' - no big changes in scripts
-'cypress.config.js' - some changes for the configuration of cypress
-utilities package with utils.js - for reusable functions in the frameworks
-support/pages - Navigation.js for navigation fucntions in the project
               - Login.js : where POM is implemented. Started with creating a Base Class and extending it to other classes to inherit elements and functions out of it.
               All the elements used and functions for specific pages are implemented in this file in related classes.
-fixtures - used for user data and Alert messages texts for easy future refractor and easy manage in the testing script, as well to avoid hard-coding.
-e2e/integration- - Tests developed and implemented. Used elements and fuctions from classes created before. Total 9 test cases for Login functionality. 
                    Used a Sub Test Suite as I saw it more reliable and cleaner code to have a beforeEach() hook for an user already logged in.
