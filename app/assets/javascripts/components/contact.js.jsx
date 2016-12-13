var ContactForm = React.createClass({ 
  displayName: "ContactForm",

  handleSubmit: function(event){
    event.preventDefault();
    console.warn('submit has been triggered');

    //Submit to server and render success message to user
    
  },

  render: function(){
    return (
      <div className="container">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <input type="text" name="contact[firstname]" placeholder="first name" />
              <input type="text" name="contact[lastname]" placeholder="last name" />
              <input type="text" name="contact[email]" placeholder="email" />
              <input type="text" name="concact[message]" placeholder="message" />
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
