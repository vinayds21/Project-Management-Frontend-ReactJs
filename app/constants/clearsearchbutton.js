import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Style from './style';


export default class ClearSearchButton extends React.Component{

	render(){
		return (
			
				<FlatButton
					label="Save Filter" 
					{...this.props}
					backgroundColor={Style.ClearSearchButton.ClearSearchButtonBackground}
					labelStyle={Style.ClearSearchButton.ClearSearchButtonLabelStyle}
					buttonStyle={Style.ClearSearchButton.ClearSearchButtonBtnStyle}
			        style={Style.ClearSearchButton.ClearSearchButtonStyle}/>
			
		);
	}
}