import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Style from './style';

export default class SaveButton extends React.Component{

	render(){
		let bg = this.props.disabled ? '#ed8c50' : Style.saveBackground;
		let label = this.props.disabled ? {color: '#606060',opacity:'0.7'} : {color:'#ffffff'};
		let btnSize = this.props.btnSize === 'lg' ? Style.saveBtnLg : Style.saveBtn
		return(<FlatButton
					label="Save" 
					className="saveBtn"
					{...this.props}
			        style={btnSize}
					backgroundColor={bg}
					hoverColor={bg}
					labelStyle={label}
					rippleColor='none'
			    />
		);
	}
}