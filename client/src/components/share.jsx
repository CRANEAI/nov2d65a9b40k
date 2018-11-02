
/*
share view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the search view has a status bar located at the very-top across the full width of the view
search view has Navigation Bar located at the very-top in the center of the view
search view has Label located at the very-top center of the view, text needs identified
the search view has a Input Box located at the very-top in the center of the view, correct text needs defined
the search will appear on focus with state is set
search view has a Label located at the bottom left of the view with text 123
search view has a Label located at the bottom center of the view with text space
the follow view has a back icon located at the very-top left of the view which on click will trigger the back() action
the follow view has a search icon located at the very-top left of the view which on click will trigger the search() action
the follow view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the sign up view has a back icon located at the very-top left of the view which on click will trigger the back() action
the sign up view has a search icon located at the very-top left of the view which on click will trigger the search() action
the sign up view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the history view has a back icon located at the very-top left of the view which on click will trigger the back() action
the history view has a search icon located at the very-top left of the view which on click will trigger the search() action
the history view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the search view has a back icon located at the very-top left of the view which on click will trigger the back() action
the search view has a search icon located at the very-top left of the view which on click will trigger the search() action
the search view has a notification icon located at the bottom right of the view which on click will trigger the notification() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import {  }  from '../actions/shareActions.js'; 

        
        
       
        class shareView extends React.Component {

            state = {
                
                
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
    
        