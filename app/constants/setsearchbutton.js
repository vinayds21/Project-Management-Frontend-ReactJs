import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Style from './style';


export default class SetSearchButton extends React.Component{

	render(){
		return (
			
				<FlatButton
					label="Save Filter" 
					{...this.props}
					backgroundColor={Style.SetSearchButton.SetSearchButtonBackground}
					labelStyle={Style.SetSearchButton.SetSearchButtonLabelStyle}
					buttonStyle={Style.SetSearchButton.SetSearchButtonBtnStyle}
			        style={Style.SetSearchButton.SetSearchButtonStyle}/>
			
		);
	}
}