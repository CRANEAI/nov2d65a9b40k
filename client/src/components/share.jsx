
/*
share view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the history view has a status bar located at the very-top across the full width of the view
history view has a Label located at the mid-bottom left of the view with text k"
history view has a Label located at the mid-bottom left of the view with text k"
history view has a Label located at the mid-bottom left of the view with text k"
the follow view has a add icon located at the very-top center of the view which on click will trigger the add() action
the follow view has a like icon located at the bottom right of the view which on click will trigger the like() action
the follow view has a like icon located at the  center of the view which on click will trigger the like() action
the follow view has a add icon located at the very-top center of the view which on click will trigger the add() action
the follow view has a like icon located at the bottom right of the view which on click will trigger the like() action
the follow view has a like icon located at the  center of the view which on click will trigger the like() action
the history view has a add icon located at the very-top center of the view which on click will trigger the add() action
the history view has a like icon located at the bottom right of the view which on click will trigger the like() action
the history view has a like icon located at the  center of the view which on click will trigger the like() action
the search view has a add icon located at the very-top center of the view which on click will trigger the add() action
the search view has a like icon located at the bottom right of the view which on click will trigger the like() action
the search view has a like icon located at the  center of the view which on click will trigger the like() action
the history view has a add icon located at the very-top center of the view which on click will trigger the add() action
the history view has a like icon located at the bottom right of the view which on click will trigger the like() action
the history view has a like icon located at the  center of the view which on click will trigger the like() action
the sign up view has a add icon located at the very-top center of the view which on click will trigger the add() action
the sign up view has a like icon located at the bottom right of the view which on click will trigger the like() action
the sign up view has a like icon located at the  center of the view which on click will trigger the like() action
the search view has a add icon located at the very-top center of the view which on click will trigger the add() action
the search view has a like icon located at the bottom right of the view which on click will trigger the like() action
the search view has a like icon located at the  center of the view which on click will trigger the like() action
the sign up view has a add icon located at the very-top center of the view which on click will trigger the add() action
the sign up view has a like icon located at the bottom right of the view which on click will trigger the like() action
the sign up view has a like icon located at the  center of the view which on click will trigger the like() action
the follow view has a add icon located at the very-top center of the view which on click will trigger the add() action
the follow view has a like icon located at the bottom right of the view which on click will trigger the like() action
the follow view has a like icon located at the  center of the view which on click will trigger the like() action
the sign up view has a add icon located at the very-top center of the view which on click will trigger the add() action
the sign up view has a like icon located at the bottom right of the view which on click will trigger the like() action
the sign up view has a like icon located at the  center of the view which on click will trigger the like() action
the search view has a add icon located at the very-top center of the view which on click will trigger the add() action
the search view has a like icon located at the bottom right of the view which on click will trigger the like() action
the search view has a like icon located at the  center of the view which on click will trigger the like() action
the history view has a add icon located at the very-top center of the view which on click will trigger the add() action
the history view has a like icon located at the bottom right of the view which on click will trigger the like() action
the history view has a like icon located at the  center of the view which on click will trigger the like() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import {  }  from '../actions/shareActions.js'; 

        
        
       
        class shareView extends React.Component {

            state = {
                
                like_counts : '', 

            }
    
            
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        			<Col md={12}>
				<p className="label-peach-brown-headline"> k" </p>
			</Col>


                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(shareView);
    
        