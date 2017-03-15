/*Author: Abhinav Bhaskar, Bhavya*/
import React from 'react';

/*--------Material components import-------------*/
import {Grid, Cell } from 'react-mdl';
import {hashHistory, Link} from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// import Paper from 'material-ui/Paper';
// import RaisedButton from 'material-ui/RaisedButton';
import SaveButton from './savebutton';
import SecondarySaveButton from './secondarysavebutton';
import ExportETL from './export_etl';
/*-------------Constant files import-----------------*/
import Style from './style';
import Api from './api';

/*--------Store and actions files import-------------*/
import UserInfoStores from '../stores/userInfoStores';

export default class HeaderButton extends React.Component{
	constructor(){
		super();
		this.state = {
			wallet_id: UserInfoStores._getImprestWalletId() || "",
		}
		this._getStoreChanges = this._getStoreChanges.bind(this);
	}
	componentWillMount(){
		UserInfoStores.on('change', this._getStoreChanges);
		let path = this.props.pageName;
		let tempContentType;
		if(Api._getKey('viewType') === 'Privileged'){
			switch(path){				
				case 'expense': tempContentType="transaction";
								break;
				case 'report': tempContentType="report";
								break;
				case 'trf': tempContentType="trf_history";
								break;
				case 'mr': tempContentType="money_request_history";
								break;
				case 'clmr': tempContentType="card_load_history";
								break;
				case 'iclr': tempContentType="card_load_req";
								break;				
				case 'admindashboard': tempContentType="wallet";
								break;
			}
		}else{
			switch(path){
				case 'expense': tempContentType="transaction";
								break;
				case 'report': tempContentType="report_employee";
								break;
				case 'trf': tempContentType="trf";
								break;
				case 'mr': tempContentType="money_request";
								break;
			}
		}		
		this.setState({
			content_type : tempContentType
		});
	}

	componentWillUnmount(){
		UserInfoStores.removeListener('change', this._getStoreChanges);
	}

	_getStoreChanges(){
		let wallet_id;
		let wallets = UserInfoStores.getAllUserInfoStores().wallets || [];
		// console.log('wallet', wallets);
		if(wallets.length){
			for(let i = 0; i < wallets.length; i++){
				if(wallets[i].wallet_type == "Imprest"){
					wallet_id = wallets[i].wallet_id;
				}
			}
			this.setState({
				wallet_id: wallet_id
			});
		}
	}

	_linkBtn(link,event){
		hashHistory.push(link);
	}
	_drawBulkButtons(){
		let path = this.props.pageName;
		return(
			<div style={{float:'right'}}>
				{Api._getKey('viewType') === 'Privileged' ? 
					(path == "admindashboard" ? 
						<IconMenu
							anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		          			iconButtonElement={
		          				<SaveButton
									label="Bulk" 
									style={{fontSize:14, fontFamily:'Roboto-Regular', margin:0}}/>}
			          				onChange={(event,value)=>{
								  		hashHistory.push('/bulk/update/'+value);
								  	}}
						        >
				          	<MenuItem value="1" style={{cursor:'pointer'}} value="walletload" primaryText="Wallet Load" />
				          	<MenuItem value="2" style={{cursor:'pointer'}} value="walletwithdraw" primaryText="Wallet Withdraw" />
				        </IconMenu>
			        :'')
				:					
					(path == "expense" ? 
						<IconMenu
	  						iconButtonElement={
	  							<SaveButton
									label="Bulk" 
									style={{fontSize:14, 
										fontFamily:'Roboto-Regular', 
										margin:0}}
								/>}
							anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
						  	onChange={(event,value)=>{
						  		hashHistory.push('/bulk/'+value+'/expense');
						  	}}
							value={this.state.value}>
							  	<MenuItem value="1" style={{cursor:'pointer'}} value="add" primaryText="Add" />
							  	<MenuItem value="2" style={{cursor:'pointer'}} value="update" primaryText="Edit" />
							</IconMenu>:'')
				}
				{Api._getKey('viewType') !== 'Privileged' ?  
					(path == "userdashboard" ? null : <ExportETL pageType={this.state.content_type}/>) 
				:
					<ExportETL pageType={path=='pending' ? this.props.contentType: this.state.content_type}/>
				}
			</div>
		);
	}
	_makeLabel(src,label){
		if(src){
			return (<span><span style={{color:'#757575',paddingRight:'2px'}}><img src={src} style={{color:'#757575', verticalAlign:'middle', height:'14px', marginBottom:'2px'}}/></span><span>{label}</span></span>)
		}else{
			return (<span><span style={{paddingRight:'2px'}}>+</span><span>{label}</span></span>)
		}
	}
	_drawButtons(arr){
		let btnUI = [];
		let tempArr = [];
		let path = this.props.pageName;
		if(Api._getKey('viewType') !== 'Privileged'){
			for(let i=0;i<arr.length;i++){
				tempArr = arr[i].displayIn;
				for(let j=0;j < tempArr.length;j++){
					if(tempArr[j] === path){
						if(path ==="expense"){
							if(this.props.canReportCreated===true){
								btnUI.push(<SecondarySaveButton label={this._makeLabel(arr[i].image , arr[i].label)} onClick={this._linkBtn.bind(this,arr[i].link)}/>);
							}else{
								if(arr[i].label.indexOf('Report') === -1){
									btnUI.push(<SecondarySaveButton label={this._makeLabel(arr[i].image , arr[i].label)} onClick={this._linkBtn.bind(this,arr[i].link)}/>);
								}else{
									btnUI.push("");
								}
							}
						}
						else{
							btnUI.push(
								<SecondarySaveButton label={this._makeLabel(arr[i].image , arr[i].label)} onClick={this._linkBtn.bind(this,arr[i].link)}/>
							);
						}
					}
				}
			}
		}else{
			btnUI.push("");
		}
		return btnUI;	
	}
	render(){
		const btnListJSON = [
								{
									"label": "Add Expense",
									"key": 10,
									"link": "/expense/addexpense",
									"displayIn":['userdashboard','expense']
								}, {
									"key": 20,
									"label": "New Report",
									"link": "/report/create",
									"displayIn":['userdashboard','expense','report']
								}, {
									"key": 30,
									"label": "Request New Travel",
									"image": "./assets/images/request_trf.svg",
									"link": "/travel/add",
									"displayIn":['userdashboard','trf']
								}, {
									"key": 40,
									"label": "Request Advance",
									"image": "./assets/images/load_money.svg",
									"link": "/raisemoneyrequest/"+this.state.wallet_id,
									"displayIn":['userdashboard','mr']
								}
							];
		return (
			<div style={{margin:'0px 0px 7px 0px', backgroundColor:'#fff',borderRadius:'4px'}} className="clearfix">
				{this._drawButtons(btnListJSON)}
				{this._drawBulkButtons()}
			</div>

			
		);
	}
}