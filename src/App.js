import React, {Component} from 'react'
import NavBar from './components/navbar'
import Counters from './components/counters.jsx'



class App extends Component{
    state = {
        items : [
            {id: 1, value: 0},
            {id: 2, value: 64},
            {id: 3, value: 7}
        ]
    };

    handleIncrement = item => {
        const items = [...this.state.items]
        const index = items.indexOf(item)
       // items[index] = [...item]
        items[index].value++
        this.setState({items});
    };

    handleReset = () =>{
       const items = this.state.items.map(c => {c.value = 0; return c;})
       this.setState({items});
    };

    handleDelete = itemsId => {
        const items = this.state.items.filter(c => c.id !== itemsId)
        this.setState({items});
    };

    render(){
        return(
            <React.Fragment>
                <NavBar totalCounters= {this.state.items.filter(i => i.value > 0).length}/>
                <main className='container'>  <Counters
                    items= {this.state.items}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete} /> 
                </main>
            </React.Fragment>
        );
    }
}

export default  App;