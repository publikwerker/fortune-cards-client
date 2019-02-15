Jason Hoffman React Capstone Project for Thinkful Engineering Immersion course.

## "Fortune Cards" tarot reading app

The user is invited to ask a question of the cards, choose the number of cards to be dealt, and click Deal.
An image and description of each card is displayed, and the user may devine whatever wisdom they may glean.


deployed version available at: 
https://damp-hamlet-47102.herokuapp.com/

Landing Page:
![react-capstone-landing](https://user-images.githubusercontent.com/42702189/52884666-7222a400-3123-11e9-8ff0-57e356c5ec26.png)

Typing in a query:
![react-capstone-query](https://user-images.githubusercontent.com/42702189/52884727-a39b6f80-3123-11e9-941e-fa9bd90b5859.png)

The displayed results:
![react-capstone-reading](https://user-images.githubusercontent.com/42702189/52884755-b615a900-3123-11e9-9022-e25ef114ac27.png)

Member Log in:
![react-capstone-member-login](https://user-images.githubusercontent.com/42702189/52884792-e0676680-3123-11e9-8481-67da49798583.png)

Member Screen:
![react-capstone-member-screen](https://user-images.githubusercontent.com/42702189/52884802-eb21fb80-3123-11e9-96da-6f0ae9b6e08e.png)


The app uses react-redux on the frontend, mongodb for the database, and uses express and node on the backend.
Testing was done using enzyme.

The deck itself and the associated descriptions are located on the server side, and the frontend shuffles and deals from it.
Each element on the screen is rendered as a separate component.
