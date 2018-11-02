
/*
share view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the sign up view has a status bar located at the very-top across the full width of the view
the sign up view has a Headline Label located at the top left of the view, correct text needs defined
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the mid-top left of the view, text needs identified
sign up view has Label located at the mid-top left of the view, text needs identified
the sign up view has a Input Box with text :l located at the mid-top in the center of the view
sign up view has Label located at the main area left of the view, text needs identified
the sign up view has a Pager located at the main area left of the view, correct text needs defined
sign up view has a Label located at the mid-bottom center of the view with text ﬂ
sign up view has Label located at the bottom center of the view, text needs identified
sign up view has Label located at the bottom center of the view, text needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing

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
    
        