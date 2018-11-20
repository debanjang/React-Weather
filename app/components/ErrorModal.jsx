var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  /*
  ** Lifecycle method that gets called after the component is rendered.
  ** We have access to the dom at this point. Perfect place for
  ** Initialization that requires dom access,or calls to an external api with ajax.
  */
  componentDidMount: function(){
    /* Since a third party should not alter the ReactDOM, we are going to use jQuery to create the 
    DOM for this modal. We do that using $modal= $(ReactDOMServer.renderToString(modalMarkup)); 
    to convert the markup into string and
    then the $(ReactDOM.findDomNode(this)).html($modal); to wrap this component in jQuery selector 
    and use the html method of jquery to render the modal in a seperate DOM. */ 
    
    var {title, message} = this.props;
    
    var modalMarkup = ( 
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

    //Store the String representation of the markup in a variable
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    //Use Html to render this modal separately and not mess with the React DOM
    //We use the ReactDOM to select a node to be wrapped in a jQuery Object and 
    //then we use the html function ofthis object to create a new DOM.
    $(ReactDOM.findDOMNode(this)).html($modal);
    
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
    /* We are returning an empty JSX here because we cant let Foundation 
    alter React DOM. */
    return(
     <div></div>
    );
  }

});

module.exports = ErrorModal;
