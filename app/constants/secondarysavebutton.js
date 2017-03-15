import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Style from './style';

export default class SecondarySaveButton extends React.Component{

	render(){
		let bg = this.props.disabled ? '#E5E5E5' : Style.secondarySaveBackground;
		let label = this.props.disabled ? {color: '#606060',opacity:'0.7'} : {color:'#237bfb'};
		return(<FlatButton
					label="Save" 
					className="secondarySaveBtn"
					{...this.props}
					backgroundColor={bg}
					hoverColor={bg}
					labelStyle={label}
					rippleColor='none'
			        style={Style.secondarySaveBtn}
		        />			
		);
	}
}