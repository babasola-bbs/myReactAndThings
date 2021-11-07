import React, { Component } from "react";

class Counter extends Component {
    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

  state = {
      imgUrl : "https://picsum.photos/100",
      tags : ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize : 10,
    fontWeight : "bold"
  };

  render() {
    let classes = "badge m-4 bg-";
    classes += (this.props.item.value === 0) ? "warning" : "primary";
    
    return (
      <React.Fragment>
        <h4>{this.props.item.id}</h4>
        <img src={this.state.imgUrl} alt="" />
        <span style={this.styles} className={classes}>{this.counterFormat()}</span>
        <button onClick={() => this.props.onIncrement(this.props.item)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.item.id)} className="btn btn-danger btn-sm m-4">Delete</button>
        { this.state.tags.length === 0 && <p>There Are No Tags</p> }
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </React.Fragment>
    );
  }

  counterFormat(){
    const {value} = this.props.item
    return value === 0 ? "Zero" : value
}
}



export default Counter;
