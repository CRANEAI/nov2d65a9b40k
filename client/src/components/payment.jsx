
/*
payment view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the payment view has a status bar located at the very-top across the full width of the view
the payment view has a status bar located at the very-top left of the view
payment view has a Concept located at the very-top left of the view with text payment
payment view has a Label located at the top left of the view with text credit card number
the payment view has a Input Box located at the top across the full width of the view, correct text needs defined
payment view has a Label located at the mid-top center of the view with text exp. date cvc number
payment view has Label located at the mid-top left of the view, text needs identified
payment view has a Label located at the main area left of the view with text cardholder name
the payment view has a Input Box located at the main area across the full width of the view, correct text needs defined

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Input, InputGroup, InputGroupText, Button } from 'reactstrap';
        
        
        import {  }  from '../actions/paymentActions.js'; 

        
        
       
        class paymentView extends React.Component {

            state = {
                
                exp._date : '', 
cardholder_name : '', 

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
				<p className="label-block-light-sky-blue-small"> credit card number </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> exp. date cvc number </p>
			</Col>

			<Col md={12}>
				<InputGroup>					<Input 
                                        className="form-group input-white-block" 
                                        value={this.state.exp._date}
                                        onChange={this.handleChange}
                                        name="exp._date"
                                        placeholder="exp. date" />				</InputGroup>			</Col>

			<Col md={12}>
				<InputGroup>					<Input 
                                        className="form-group input-block-light sky blue" 
                                        value={this.state.cardholder_name}
                                        onChange={this.handleChange}
                                        name="cardholder_name"
                                        placeholder="cardholder name" />				</InputGroup>			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for pay_i button-block-sky-blue action --> */}
				<Button 
                        className="btn btn-lg btn-block button-block-sky-blue" 
                        onClick={() => this.pay_i()}>pay i</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for ﬂ button-light-sky-blue-light-sky-blue action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-sky-blue-light-sky-blue" 
                        onClick={() => this.ﬂ()}>ﬂ</Button> 

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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(paymentView);
    
        