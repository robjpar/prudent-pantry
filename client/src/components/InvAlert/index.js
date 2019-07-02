import React, {Component, Modal, Button} from "react";

class InvAlert extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        
         
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            
              
            
            <h6>  Please select ingredients for recipe</h6>
           the switches select items from ? to "use"
            
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            
          </Modal>
        
      );
    }
  }

  export default InvAlert;