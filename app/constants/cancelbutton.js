import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Style from './style';

export default class CancelButton extends React.Component{

	render(){
		return(<FlatButton 
					label="Cancel" 
					className="cancelBtn"
					{...this.props}
					style={Style.cancelBtn}
					backgroundColor={Style.cancelBackground}
					rippleColor='none'
				/>			
		);
	}
}