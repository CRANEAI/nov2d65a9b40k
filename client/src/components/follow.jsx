
/*
follow view
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
import { Row, Col , Button } from 'reactstrap';
        
        
        import { follow_action, follow_action }  from '../actions/followActions.js'; 

        
        
       
        class followView extends React.Component {

            state = {
                 show_loading_indicator: false,
                like_counts : '', 

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

                        let follow_data      =  {};
				follow_data.like_counts   = this.state.like_counts 


                        //Dispatch action mapped to redux
                        follow_action(follow_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        let follow_data      =  {};
				follow_data.like_counts   = this.state.like_counts 


                        //Dispatch action mapped to redux
                        follow_action(follow_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
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
    
        