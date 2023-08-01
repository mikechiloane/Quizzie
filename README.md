<p align="center">
    <img src="https://raw.githubusercontent.com/mikechiloane/Quizzie//master/src/assets/img/angular_firebase.png" alt="Logo" width=400 height=300>

  <h1 align="center">Quizzie</h1>
  <p align="center">This application represents a professionally crafted quiz, meticulously developed with the use of Angular and Firebase technologies. It has been designed to expertly evaluate users' knowledge, foster meaningful engagement, and provide valuable guidance throughout their entire journey. The utilization of Angular and Firebase showcases a sophisticated approach, ensuring a seamless user experience and robust functionality.</p>
</p>

## Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/mikechiloane/Quizzie/master/src/assets/img/login.gif"/>
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/mikechiloane/Quizzie/master/src/assets/img/quiz.gif"/>
</p>

## Technologies Used

For this project, I utilized Angular, Angular Material, and Firebase. Angular Material played a significant role in crafting the user interface, while Firebase served as the backend. The Quiz data was sourced from a cloud Firestore database. Prior to starting the project, it's essential to create a cloud Firestore database in Firebase. Once completed, you'll be able to access the corresponding screen.

Please ensure that you add the Firebase credentials to the environment.ts file as a necessary step.

## Installation

After cloning the repo, do
```bash
npm install
```
## Setting up 

There is a file in assests named quiz-data.json which has all the questions and answers. To populate ur db, uncomment the loadData function in the quiz.service.ts file and call it once to populate the firestore db.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## More Updates

Follow me on [LinkedIn](https://www.linkedin.com/in/mikechiloane)

## Thanks

