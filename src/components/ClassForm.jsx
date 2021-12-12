import React from 'react';
import Image from './Image'
import Img from '../images/pic.png'



class ClassForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
  };


  render() {
    return (
      <>
      <div className="container">
        <div className="row no-gutters mt-5">
          <div className="col-md-6">
            <Image pic={Img} />
          </div>
          
          <div className="col-md-6 bg-dark">
            <h1 className="text-center text-white">Login Here</h1>
            
            <form className="mt-2 p-2" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label><h6 className="text-white">Name</h6></label>
                <input type="name" className="form-control" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
              </div>
              
              <div className="form-group">
                <label><h6 className="text-white">Email</h6></label>
                <input type="email" className="form-control" placeholder="Your-Email@abc.com" value={this.state.email} onChange={this.handleEmailChange} />
              </div>
              
              <div className="form-group">
                <label><h6 className="text-white">Password</h6></label>
                <input type="password" className="form-control" placeholder="Your Password" value={this.state.password} onChange={this.handlePasswordChange}/>
              </div>
              
              <div className="form-group">
                <input type="submit" value="Submit" className="form-control mt-4 btn btn-lg btn-success" />
              </div>
            </form>
          </div>
          
        </div>
      </div>
      </>
    );
  };
};

export default ClassForm;