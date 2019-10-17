// import React from 'react';
//
// class App extends React.Component{
//   render(){
//     return <h2> Hi, I am a {this.props.color} Car! </h2>;
//   }
// }
//
// export default App;

// import React from 'react';
//
// class App extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
//
// export default App;





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// const myelement = (
// <ul>
//   <li>Apples</li>
//   <li>Bananas</li>
//   <li>Cherries</li>
// </ul>
// );
//
// const textInput = <input type="text" />;
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {myelement}
//       {this.props.color}
//     </div>
//   );
// }
//
// export default App;


import React from 'react';
import logo from './logo.svg';
import './App.css';

const myelement = (
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>
);

const textInput = <input type="text" />;

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand.name}!</h2>;
  }
}


var test = "NTU";

class App extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {id:"1",name:"Akhzar"};
  //   this.state = {textValue:''}
  //
  //   this.state = {
  //         error: null,
  //         isLoaded: false,
  //         items: []
  //       };
  //
  // }
  //
  // static getDerivedStateFromProps (props,state){
  // }
  //
  // changeColor = () => {
  //   alert(this.state.textValue);
  //   this.setState({name:"Asif Suryani"});
  // }

  // myChangeHandler = (event) => {
  //   this.setState({textValue:event.target.value});
  // }

  // render() {
  //
  //
  //   // var numbers = [1,2,3,4,5,6,7,8,9,10];
  //
  //
  //   var Obj1 = {id: 1, name: "Khizar",father:"Iftakhar",marks:83};
  //   var Obj2 = {id: 2, name: "Mobeen",father:"Yasin",marks:82};
  //   var Obj3 = {id: 3, name: "Khizar",father:"Iftakhar",marks:81};
  //   var Obj4 = {id: 4, name: "Ali",father:"Umer",marks:80};
  //
  //
  //   var student = [Obj1,Obj2,Obj3,Obj4]
  //
  //
  //   return (
  //     <div>
  //
  //     <li>
  //     <ul> {student[3].marks} </ul>
  //
  //     <ul> {student[3].name} </ul>
  //     </li>
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //     <h1 style={{color:"green",backgroundColor:"black"}}>Who lives in my garage? {this.state.name}</h1>
  //     <button type = "button" onClick = {this.changeColor}>
  //     Click to Change Color
  //     </button>
  //
  //     <h1> Hello How are you </h1>
  //
  //     <input
  //         type="text" onChange = {this.myChangeHandler}
  //       />
  //
  //     <select value="Quran Surah" style = {{color:"red"}}>
  //       <option value="Ford">Surah Baqrah</option>
  //       <option value="Volvo">Aal E Imran</option>
  //       <option value="Fiat">Inaam</option>
  //     </select>
  //     </div>
  //   );
  // }



  // render() {
  //   const { error, isLoaded, items } = this.state;
  //   if (error) {
  //     return <div>API Error is =: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <ul>
  //         {items.map(item => (
  //           <li key={item.name}>
  //             {item.name} {item.age}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  // componentDidMount() {
  //   fetch("https://api.myjson.com/bins/kfa6g")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           this.setState({
  //             isLoaded: true,
  //             items: result
  //           });
  //         },
  //         (error) => {
  //           this.setState({
  //             isLoaded: true,
  //             error
  //           });
  //         }
  //       )
  //   }


  // Mounting Life Cycle



  // static getDerivedStateFromProps (props,state){
  // }




  constructor(props){
    super(props);
    alert("This is Constructor");

    this.state = {name:"Akhzar"};


  }

  static getDerivedStateFromProps (props,state){
    alert("This is getDerivedStateFromProps");
    test = "Yes I am NTU Student";
  }

  render() {

    var items = [
                {id:0,data:
                  [12,
                    {marks:99,location:
                      [{latitude:4.4545,longitude:4.9898}]
                    }
                  ]
                  ,age:38,
                  name:"Akhzar"
                  },
                ];



    // var test = [
    //             {id:0,data:[12,99],age:38,name:"Akhzar"
    //             },
    //             {id:0,data:[12,99],age:19,name:"Ali"
    //             },
    //             ];

      return (

        <div>

        <h1> {this.state.name} </h1>

        // <h1> {items[0].data[1].location[0].latitude} {items[0].data[1].location[0].longitude} </h1>

        <ul>
          {items.map(items => (
            <li key={items.id}>
              {items.name} {items.age}
            </li>
          ))}
        </ul>
        </div>
      );
  }

  componentDidMount(){
    alert("This is componentDidMount");
    test = "Yes I am NTU Student";

    this.setState({name:"Ali"});
  }
}

export default App;
