import React from 'react';

class Form extends React.Component{
  render(){
    return(
      <form className="formRow" onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Город"/><br/>
        <button>Узнать погоду</button>
      </form>
    );
  }
}

export default Form;