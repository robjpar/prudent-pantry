import React from 'react';
import './style.css';
import { Switch } from 'react-foundation';



class Login extends React.Component {


  
    //var showClass = 'show';

    // $('input').on('checkval', function () {
    //     var label = $(this).prev('label');
    //     if(this.value !== '') {
    //     label.addClass(showClass);
    //     } else {
    //     label.removeClass(showClass);
    //     }
    // }).on('keyup', function () {
    //     $(this).trigger('checkval');
    // });
   
      
render () {  

return ( 
<div>
  <button class="button" type="button" data-toggle="example-dropdown">Toggle Dropdown</button>
<div class="dropdown-pane" id="example-dropdown" data-dropdown>
  Just some junk that needs to be said. Or not. Your choice.
</div>

<div className="switch-basics-example">
  <Switch/>
</div>

</div>
  

)

}
}

export default Login;