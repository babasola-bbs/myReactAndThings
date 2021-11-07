import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(<App/>, document.getElementById('root'))





//     //using Typescript With React
// npx create-react-app . --template typescript
// npm start

//     //in Header.tsx we created
// export interface Props{
//     title: string
//     color?: string
// }

// const Header = (props: Props) => {
//         return(
//         <header>
//         <h1 style = {{color: props.color ? props.color : 'red'}}>{props.title}</h1>
//         </header>)
// }
// export default 


//     //in App.tsx
// import './App.css';
// import Header from './header';

// function App(){
//     return(
//         <div className='App'>
//             <header title='Hello Dear' color= 'blue'/>
//         </div>
//     )
// }
// export default App
