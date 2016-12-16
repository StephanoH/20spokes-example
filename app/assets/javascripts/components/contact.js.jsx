var ContactForm = React.createClass({ 
  displayName: "ContactForm",

  getInitialState: function(){
    return {
      firstname: null,
      lastname: null,
      email: null,
      message: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  },

  handleChange: function(field, word){
    var change={};
    change[field] = word.target.value;
    this.setState(change);
  },

  handleSubmit: function(event){
    event.preventDefault();
    console.warn('submit has been triggered ' + this.state + ' ' + this.state.lastname);
    $.post('/contact', this.state).done(function(response){
      alert(response.message);
    });
    this.setState({
      firstname: null,
      lastname: null,
      email: null,
      message: null
    });
  },

  render: function(){
    return (
      <div className="container">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
            <div className="title form-group">
              <h1>Add a Contact</h1>
            </div>
            <div className="inputs">
              <div className="form-group">
                <label for="firstnameInput">First Name:</label>
                <input type="text" className="form-control" id="firstnameInput" value={this.state.firstname} onChange={this.handleChange.bind(this, "firstname")} />
              </div>
              <div className="form-group">
                <label for="lastnameInput">Last Name:</label>
                <input type="text" className="form-control" id="lastnameInput" value={this.state.lastname} onChange={this.handleChange.bind(this, "lastname")} />
              </div>
              <div className="form-group">
                <label for="emailInput">Email:</label>
                <input type="email" className="form-control" id="emailInput" value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
              </div>

              <div className="form-group">
                <label for="messageInput">Message:</label>
                <textarea className="form-control" id="messageInput" value={this.state.message} onChange={this.handleChange.bind(this, "message")} />
              </div>
            </div>
            <div className="actions">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})
