# React Practice using Class-Based Component ![forthebadge](https://badges.aleen42.com/src/react.svg)

## App Screenshot
![image](https://user-images.githubusercontent.com/75917932/205422679-a13251f7-fa6e-42c5-b087-64b6ea0777f9.png)


## What is this Project ?

The concept behind this app (geolocation-detector) is to study react class-based components and react states.

## What did I learned ?

- Using Class-based Component enable Asynchronous Programming
- State Rules in React:
    1.	Only Usable in Class Components
    2.	'State' is a Js Object that contains data relevent to a component
    3.	Updating State on a components causes the component to re-render
    4.	State must be initialized when a component in created
    5.	State can only be updated using the function 'setState'
- Used Conditional Rendering
- Used the Browser's Sensor Developer Tools to put a custom geolocation
- ReactJS Lifecycle Methods:
    1. Constructor -> Good place for one-time setup
    2. Render -> Just returns the JSX
    3. componentDidMount -> Good place for data loading
    4. componentDidUpdate -> Good place to do more data loading when state/props change
    5. componentWillUnmount -> Good place to do clean up
- Showing a Picture in ReactJS

## How to Build ?

All usage instruction and information update on [create-react-app.md](https://github.com/celsodasecond/first-react-app/blob/master/create-react-app.md).

## Development

#### Application Timeline
1. Js File Loaded up by the browser
2. App Component gets created
3. Construction Function gets called
4. 'this.state' property assigned the state object
5. Call the Geolocation Service
6. React calls the components render method 
7. App returns JSX, gets rendered page as HTML
8. Get results from Geolocation Service
9. Update our state object with a 'this.setState'
10. React calls 'render' method second time
11. Render methods returns some JSX.
12. React takes that JSX and updates content on the screen.


#### Built With

- [Node JS](https://nodejs.org/en/) 
- [React (create-react-app)](https://reactjs.org/docs/create-a-new-react-app.html)
- [Semantic UI](https://semantic-ui.com/)
- [HTML Geolocation API](https://www.w3schools.com/html/html5_geolocation.asp)

#### Clone Project

```shell
https://github.com/celsodasecond/react-geolocation-detector
```

This Command will copy a full project to your local environment

