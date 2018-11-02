
/*
follow view
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
import { Row, Col , Button } from 'reactstrap';
        
        
        import { follow_action, follow_action }  from '../actions/followActions.js'; 

        
        
       
        class followView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // send event
            send = () => {
                
                 send = () => {
                    <!-- ToDo: define what send will do in the send component --> 
                 })
                    
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        			<Col md={12}>
				{/* <!-- TODO: Create unit test for follow button-light-turquoise-block action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-turquoise-block" 
                        onClick={() => this.follow()}>follow</Button> 

			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-very-light-peach-block-headline"> {a </p>
			</Col>

			<Col md={12}>
				<p className="label-brown-light-peach-small"> y louid </p>
			</Col>

			<Col md={12}>
				<p className="label-very-light-peach-block-small"> a _ </p>
			</Col>


                           
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.follow
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ follow_action, follow_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(followView);
    
        