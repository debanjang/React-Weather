var React = require('react');

var ErrorModal = React.createClass({
  /*
  ** Lifecycle method that gets called after the component is rendered.
  ** We have access to the dom at this point. Perfect place for
  ** Initialization that requires dom access,or calls to an external api with ajax.
  */
  componentDidMount: function(){
    //create the modal
    var modal = new Foundation.Reveal($('#error-modal'));
    //show the modal
    modal.open();
  },

  getDefaultProps: function(){
    return{
      title: 'Error'
    };
  },

  /*
  **propTypes are needed for prop validation.
  **We can specify the type of a prop, whether it is required or not among other things
  **For full capabilities, refer official react docs.
  */
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  render: function(){
    var {title, message} = this.props;
    return(
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4> {title} </h4>
        <p> {message}! </p>
        <p>
          <button className="button hollow" data-close="">
            Close
          </button>
        </p>
      </div>
    );
  }

});

module.exports = ErrorModal;
