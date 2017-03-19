import {orange500} from 'material-ui/styles/colors';

module.exports ={
	ZDEPTH: 0,
	DASHBOARDBACKGROUND: '#F5F5F5',
	mainGridStyle:{
		padding: '5px 0px 0px 0px'
	},
	exampleImageInput:{
		cursor: 'pointer',
	    position: 'absolute',
	    top: 0,
	    bottom: 0,
	    right: 0,
	    left: 0,
	    opacity: 0,
	    width: '100%',
	    zIndex: '10'
	},
	fileSelector:{
		cursor: 'pointer !important',
	    position: 'absolute',
	    top: 0,
	    opacity: 0,
	    zIndex: 10,
	    width: '40%',
    	height: '100%',
    	left: '10%',
	},
	myWalletTitle:{
		fontFamily: 'Roboto-Regular',
		fontSize: 14,
		fontWeight: 'bolder',
		textAlign: 'left',
	  	color: '#4a4a4a',
	},
	myWalletName:{
		fontFamily: 'Roboto-Regular',
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center',
	  	color: '#606060',
	},
	currentBal:{
	    fontFamily: 'Roboto-Regular',
		fontSize: 10,
		fontWeight: 'normal',
		textAlign: 'center',
	  	color: '#4a4a4a'
	},
	currentINR:{
		fontFamily: 'Roboto-Regular',
		fontSize: 12,
		fontWeight: 'normal',
		textAlign: 'center',
	  	color: '#606060',
	},
	myWalletStatus:{
		fontFamily: 'Roboto-Regular',
		fontSize: 10,
		fontWeight: 'normal',
		textAlign: 'center',
		marginBottom:10,
		color: '#606060'
	},
	loginPage:{
		mainContainer:{
			width:'100%',
			height:'100%',
			background:'#ececec',
		},
		leftContainerRegister:{
			top:-60,
			left:10,
			backgroundColor:'#f5f5f5',
			boxShadow:' 0 0 11px 2px rgba(160, 158, 158, 0.5)',
			borderRadius:10,
			width:750,
			margin:'auto',
		},
		leftContainer:{
			top:-60,
			left:10,
			backgroundColor:'#f5f5f5',
			boxShadow:' 0 0 11px 2px rgba(160, 158, 158, 0.5)',
			borderRadius:10,
			height:403,
			width:403,
			margin:'auto',
		},
		logoDivStyle:{
			margin:'auto',
			marginTop:80,
			width:200,
			textAlign:'center'
		},
		userRegDivStyle:{
			margin:'auto',
			marginTop:10,
			width:200,
			textAlign:'center'
		},
		happayLogo:{
			paddingBottom:10,
			borderBottom:'1px solid rgba(74,74,74,0.23)',
			cursor:'pointer',
		},
		textBelowLogo:{
			fontSize:22,
			fontFamily:'Roboto-Light',
			color:'#4a4a4a',
			paddingTop:25
		},
		rightContainer:{
			position:'absolute',
			right:70,
			top:40,
			textAlign:'center',
			color:'#ffffff',
			width:360,
			fontSize:18,
		},
		regRightContainer:{
			position:'absolute',
			right:70,
			top:22,
			textAlign:'left',
			color:'#ffffff',
			width:360,
		},
		floatingTextStyle:{
			fontSize:16,
			fontFamily:'Roboto-Light',
			color:'#4a4a4a',
			opacity:'0.7'
		},
		floatingRegTextStyle:{
			fontSize:14,
			fontFamily:'FuturaStd-Book',
			color:'#4a4a4a'
		},
		savebuttonStyle:{
			margin:'5px',
			textAlign:'center',
			height : '25px',
			lineHeight:'25px',
			overflow:'hidden',
			borderRadius:'100px',
			display:'inline-block',
			cursor:'pointer',
			transition: 'none !important',
			transform: "none !important",
		},
		verificationLink :{
			width: '367px',
			height: '66px',
			fontFamily: 'Roboto-Light',
			paddingLeft: '64px',
    		textAlign: 'initial',
			//fontSize: '16px',
			fontWeight: 300,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.38,
			letterSpacing: 'normal',
			color: '#4a4a4a'
		},
		verifyMailNote: {
			margin: '158px 10px 2px 10px',
			//width: '343px',
  			height: '28px',
  			fontFamily: 'FuturaStd-Book',
  			fontSize: '11px',
  			fontWeight: 'normal',
  			fontStyle: 'normal',
  			fontStretch: 'normal',
  			lineHeight: 1.4,
  			letterSpacing: 'normal',
  			textAlign: 'center',
  			color: '#7e7e7e'
		}
	},
	SearchFieldFontStyling: {
	  	width: '100%',
	  	fontSize: '14px',
	  	padding : '0px',
	  	fontWeight: 'normal',
	},
	ExtraFieldFontStyling: {
	  	width: '92%',
	  	fontSize: '14px',
	  	padding : '0px',
	  	fontWeight: 'normal',
	  	
	},
	sideNavListtyle:{ 
		fontFamily:'Roboto-Regular',
		fontSize:14,
		cursor:'pointer',
		color:'#606060',
	},
	selectableListStyle:{
		selectableStyle	:{
			fontFamily: 'Roboto-Medium,sans-serif',
			border: 10,
			boxSizing: 'border-box',
			display: 'block',
			cursor: 'pointer',
			textDecoration: 'none',
			margin: 0,
			padding: 0,
			outline: 'none',
			fontSize: 14,
			fontWeight: 'inherit',
			transform: 'translate(0px, 0px)',
			verticalAlign: 'middle',
			color: '#ffffff',
			position: 'relative',
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
			backgroundColor: '#5ccf78',
		},
		ListStyle:{
			lineHeight:'34px',
			padding:'0px',
			fontSize:14,
		},
		ListInnerStyle:{
			marginLeft:'10px',
			padding:'0px',
			fontSize:14,
		},
		fontFamily: 'Roboto-Medium,sans-serif',
		border: 10,
		boxSizing: 'border-box',
		display: 'block',
		cursor: 'pointer',
		textDecoration: 'none',
		margin: 0,
		padding: 0,
		outline: 'none',
		fontSize: 14,
		fontWeight: 'inherit',
		transform: 'translate(0px, 0px)',
		verticalAlign: 'middle',
		color: 'rgba(0, 0, 0, 0.870588)',
		position: 'relative',
		transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
		backgroundColor: '#F2F2F2',
	},
	cell10Style:{
		marginLeft:0,
		marginRight:0
	},
	cell2Style:{
		marginLeft:11
	},
	arrowForwardStyle:{
		color: '#237BFB'
	},
	paginationTextBlockStyle:{
		float:'right',
		margin:0,
	},
	saveSearchStyle:{
		fontWeight: 'normal', 
		width : "92%", 
		fontSize:'13px', 
		color: '#606060',
		padding : '0px', 
		fontWeight: 'normal'
	},
	mainLoader:{
	  	display: 'inline-block',
	  	margin: 0,
	  	paddingTop: '15%',
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%',
		zIndex: 3000,
		backgroundColor: '#000000',
		opacity: 0.5,
		textAlign: 'center',
	},
	smallLogoPaperStyle:{
		height: 30,
		width: 30,
		margin: 20,
		boxShadow:'none',
		textAlign: 'center',
		display: 'inline-block',
		border:'2px solid #707070'
	},
	myWalletSaveLabel:'#606060',
	myWalletSaveBackground:'#f8f8f8',
	saveBackground: '#ef6c15',
	secondarySaveBackground: '#ffffff',
	cancelBackground: '#d7d7d7',
	saveLabel: '#ffffff',
	cancelLabel: '#4a4a4a',
	// HeaderButtonStyle: {
	// 	height : '50px',
	// 	lineHeight:'50px',
	// 	borderRadius: '100px',
	// },
	saveBtn: {
		margin:'5px',
		textAlign:'center',
		height : '27px',
		lineHeight:'24px',
		overflow:'hidden',
		borderRadius:'100px',
		display:'inline-block',
		transition: 'none !important',
		transform: "none !important",
	},
	saveBtnLg: {
		margin:'5px',
		textAlign:'center',
		height : '40px',
		width:'100%',
		lineHeight:'25px',
		overflow:'hidden',
		borderRadius:'100px',
		display:'inline-block',
		transition: 'none !important',
		transform: "none !important",
	},
	searchMyWalletBtn:{
		margin:'5px',
		textAlign:'center',
		height : '25px',
		position:'relative',
		bottom:-33,
		right:-8,
		lineHeight:'23px',
		overflow:'hidden',
		color:'#ffffff',
		border:'2px solid #ffffff',
		backgroundColor:'#237bfb',
		borderRadius:'100px',
		display:'inline-block',
		transition: 'none !important',
		transform: "none !important",
		cursor:'pointer',
	},
	saveBtnStyle : {
		height : '20px',
		lineHeight:'20px',
		borderRadius: '0px',
		transition: 'none !important',
		transform: "none !important",
	},
	secondarySaveBtn: {
		// padding:'0px 10px 2px 10px',
		margin:'5px',
		// width:'75px',
		textAlign:'center',
		height : '25px',
		lineHeight:'23px',
		overflow:'hidden',
		color:'#237bfb',
		border:'1px solid #237bfb',
		backgroundColor:'#ffffff',
		borderRadius:'100px',
		display:'inline-block',
	},
	myWalletLabel:{
		fontFamily: 'Roboto-Regular',
		fontSize: '12px',
		fontWeight: 'normal',
		textAlign: 'center',
		color: '#606060'
	},
	myWalletOpening:{
		fontFamily: 'Roboto-Regular',
		fontSize: '12px',
    	/*position: 'relative',
    	right: '-9px',
    	top:'34px',*/
    	paddingTop:30,
		fontWeight: 'normal',
		color: 'white'
	},
	myWalletSaveBtn:{
		borderRadius: 100,
  		backgroundColor: '#f8f8f8',
		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.29)',
		border: '1px solid rgba(96,96,96,0.6)',
		margin:'5px',
		textAlign:'center',
		height : '25px',
		lineHeight:'25px',
		overflow:'hidden',
		color:'#237bfb',
		display:'inline-block',
		cursor:'pointer',
		transition: 'none !important',
		transform: "none !important",	
	},
	myWalletRequestBtn:{
		textAlign:'center',
		marginBottom:-15
	},	
	myWalletDivider:{
		border: 'solid 1px #dadada',
		marginLeft:16,
		width:150,
		marginTop:'-8px'
	},
	saveBtnRippleStyle:{
		transition: 'none !important',
		transform: "none !important",
	},
	secondarySaveBtnStyle : {
		height : '20px',
		lineHeight:'20px',
		borderRadius: '0px',
	},
	myWalletSaveBtnStyle:{
		height : '20px',
		lineHeight:'20px',
	},
	cancelBtn: {
		margin:'5px',
		borderRadius : '100px',
		height : '27px',
		lineHeight:'24px',
		overflow:'hidden',
		color: '#4a4a4a'
	},
	cardAction: {
		textAlign: 'right',
	},
	CardStyle:{
		width: '100%', 
		height: 'auto',
		marginLeft:'0px'
	},
	empWalletPassbookTable:{
		backgroundColor:'#ffffff',position:'absolute',color:'#606060',top:155,padding:'12px 8px',left:30,right:30
	},
	empWalletPassStyle:{
		backgroundColor:'#237bfb',height:180,color:'#ffffff',padding:0,position:'relative',margin:'0 auto',marginTop:12
	},
	empSettlementStyle:{
		backgroundColor:'#237bfb',height:180,color:'#ffffff',padding:0,position:'relative',margin:'0 auto'
	},
	myWalletCardStyle:{
		width: '100%', 
		height: '100%',
		marginLeft:'0px'
	},
	orgWalletCardStyle:{
		'paddingLeft': '50px',
		backgroundColor:'#f5f5f5'		
	},
	cardHeader:{
		fontFamily: 'Roboto',
		fontSize: '14px',
		color: '#4a4a4a',
		paddingLeft:'50px'
	},
	toggle: {
        paddingRight: 450,
    },
    labelToggle:{
		fontFamily: 'Roboto-Regular',
		marginLeft:'10px',
		fontSize: '12px',
		color: '#4a4a4a',
		fontWeight: 'normal',
    },
    labelWalletSummary:{
    	fontFamily: 'Roboto-Regular',
		fontSize: '12px',
		marginLeft:'3px',
		color: '#4a4a4a'
    },
    labelWalletLoad:{
    	fontFamily: 'Roboto-Regular',
		fontSize: '12px',
		color: '#4a4a4a',
		display: "inline-flex"	
    },
    myPassbookLabel:{
    	fontFamily: 'Roboto-Regular',
		fontSize: 14,
		fontWeight: 'bold',
		color: '#ffffff'
    },
    selectFieldWalletLoad:{
    	width:200,fontSize:12,fontFamily:'Roboto-Regular'
    },
    selectFieldMyWalletPass:{
    	width: 150,fontSize:12,fontFamily:'Roboto-Regular'
    },
    fromDateMyWAlletText:{
	  	fontSize: '12px',
	  	width:103,
	  	color:'white',
    },
    fromDateSettlementText:{
	  	fontSize: '12px',
	  	color:'white',
    },
    toDateMyWAlletText:{
    	marginLeft: '6px',
	  	fontSize: '12px',
	  	width:103,
	  	color:'white',
    },
    fromImgMyWallet:{
    	position:'relative',
    	top:-34,
    	left:90
    },
    toImgMyWallet:{
    	position:'relative',
    	top:-34,
    	left:96
    },
    selectMyWalletPassFloat:{
    	fontWeight: 'normal', fontSize: '14x', color:'white',top: 37
    },
    selectSettlementFloat:{
    	fontWeight: 'normal', fontSize: '14x',color:'white', top:38
    },   
    catSumName:{
    	fontSize:12,
    	marginTop:5,
    	paddingLeft:12,
    	fontFamily:'Roboto-Regular',
    	color:'#4a4a4a'
    },
    catSumAmt:{
    	fontSize:12,
    	marginTop:5,
    	fontFamily:'Roboto-Regular',
    	color:'#4a4a4a'
    },
    catSumShowLess:{
    	fontSize:12,
    	fontFamily:'Roboto-Regular',
    	color:'#237bfb',
    	cursor:'pointer'
    },
    toggleHead:{
    	fontFamily: 'Roboto-Medium',
		fontSize: '12px',
		color: '#4a4a4a',
		fontWeight: 500
    },
    linkWallet:{
    	fontFamily: 'Roboto-Regular',
		fontSize: '14px',
		color: '#237bfb',
		cursor:'pointer'
    },
    deleteWallet:{
    	fontFamily: 'Roboto-Regular',
		fontSize: '14px',
		color: 'red',
		marginLeft:'20px',
		cursor:'pointer'
    },
    textStyleWallet:{
    	width: '300px',
        fontSize: 14,
        fontFamily:'Roboto-Regular',
        margin:0
    },
    textWalletPlan:{
    	width: '120px',
        fontSize: 14,
        fontFamily:'Roboto-Regular',
        margin:0
    },
    floatWallet:{
    	fontSize:12,
    	color:'#4a4a4a'
    },
	navBar:{
		marginLeft:'-20px',
		textAlign:'center'
	},
	selectedNavFontStyle:{
		color:'#FFFFFF',
		height:50,
		fontWeight:'bold',
		width:116,
		textAlign:'center',
		marginTop : 15,
		backgroundColor:'blue',
	},
	navFontStyle:{
		color:'#FFFFFF',
		fontWeight:'bold',
		height:50,
		width:116,
	},
	tableStyle: {
		border : 'none',
		margin : '0px',
		fontFamily: 'Roboto-Regular',
	    fontSize: 13,
		whiteSpace: 'normal',
		textAlign: 'left'
	},
	headerStyle: {
		whiteSpace: 'normal',
		border: 'none',
		fontFamily: 'Roboto-Medium',
	    fontSize: 13
	},
	containerStyle: {
		whiteSpace: 'normal',
		border: 'none',
		fontFamily: 'Roboto-Regular',
	    fontSize: 14,
	    fontWeight: 'normal',
	},
	sideNavButtonStyle: {
		whiteSpace: 'normal',
		border: 'none',
		fontFamily: 'Roboto-Regular',
	    fontSize: '12px',
	    color:'#606060',
	    fontWeight: '400',
	    paddingLeft:5,
	},
	minheaderRowStyle:{
		height:25,
		fontSize:12,
		backgroundColor:"#e0e0e0",
		color:'#606060',
		padding: '0px 10px 0px 0px',
	},
	minheaderRowTextStyle:{
		whiteSpace: 'normal',
		lineHeight:'10px',
		border: 'none',
		fontFamily: 'Roboto-Regular',
	    fontSize: 12,
	    color:'#606060',
	    fontWeight: 'normal',
	    padding:'5',
	},
	middleHeaderRowStyle:{
		height:60,
		fontSize:14,
		fontFamily: 'Roboto-Regular',
		fontWeight: 'normal',
		backgroundColor:"#FFFFFF",
		color:'#77ADFC',
	},
	middleRightHeaderStyle:{
		display: 'flex'
	},
	middleRighHeaderContent:{
		margin:'4%',
		marginLeft:'-1%',
		marginLeft:'-4%'
	},
	mainHeaderStyle:{
		height:40,
		fontFamily: 'Roboto-Regular',
		fontWeight: 'bold',
		backgroundColor:"#373737",
		boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.1)',
		padding: '0px 10px 0px 0px',
		fontSize:16,
		position:'relative'
	},
	navLinkStyle:{
		width:130,
		textAlign:'center',
		lineHeight:'40px',
		fontSize:14,
		fontFamily:'Roboto-Regular',
	},
	leftMenu:{
		width:'17%'
	},
	mainDisplay:{
		//width:'80%'
	},
	errorField:{
		borderBottom: '1px solid red',
	    marginBottom: '45px'
	},
	correctField:{
		borderBottom: '1px solid transparent',
		marginBottom: '45px'
	},
	dialogTransaction: {
		padding: '10px',
		height: '100%',
	},
	actionButtonLightBox:{
		height: 35,
		width: 35,
		verticalAlign: 'middle',
		marginTop: 3,
		padding: 5,
		cursor: 'pointer',
		position:'relative'
	},
	actionButtonLightPaginationBox:{
		backgroundColor:'#EFEFEF',
		height: 35,
		width: 35,
		verticalAlign: 'middle',
		marginTop: 3,
		padding: 5,
		cursor: 'pointer'
	},
	actionIconLightBox:{
		height: 35,
		width: 35,
		verticalAlign: 'middle',
		marginTop: 3,
		padding: 5,
	},
	actionIconLightBoxForEmp:{
		height: 35,
		width: 35,
		verticalAlign: 'middle',
		marginTop: 3,
		padding: 5,
		fontSize:20,
	},
	actionButtonPagination:{
		verticalAlign: 'middle',
		padding: '0px 0px 12px 0px',
		cursor: 'pointer'
	},
	actionFlatButton:{
		width:'25px',
		height:'25px',
		minWidth:'0px',
		border:'1px solid #D3D3D3'
	},
	employeeDashboardStyle:{
		iconStyle:{
			width: '24px',
			margin:'8px 0px',
		    top: '-3px',
    		left: '4px',
		},
		fileSelector: {
		    cursor: 'pointer',
		    position: 'absolute',
		    top : '0px',
		    opacity: 0,
		    width : '0px',
		    height : '0px'
	  	},
		dashboardLeftContainer:{
			overflowY: "scroll",
			overflowX: "hidden", 
			height: "100vh",
			width: "200px",
			marginLeft: '11px',
			marginRight: '0px',
		},
		dashboardPaperStyle:{
		    textAlign: 'center',
		    width: "100%",
		},
		dashboardRolesection:{
			textAlign: "left",
			marginLeft: "14px",
			fontSize: "14px",
			fontFamily: "Roboto-Regular",
		},
		dashboardShowMore:{
			backgroundColor: "#E8E8E8", 
			cursor: "pointer",
			fontSize: "12px", 
			color: "blue",
			fontFamily: "Roboto-Light",
			height: '25px',
			paddingTop:'5px',
		},
		detailStatus:{
			display: "inline-block", 
			fontSize: "12px",
		},
		detailComplete:{
			color: "#C9C9C9"
		},
		detailInComplete:{
			color: "#FFBA00"
		},
		dashboardReportSubmission:{
			height: "90px", 
			textAlign: "center", 
			paddingTop: "10px", 
			cursor: "pointer", 
			borderRadius: "10px"
		},
		widgetItems:{
			fontSize: "11px"
		},
		commonRegularStyle:{
			fontFamily: "Roboto-Regular",
			fontSize: "14px",
		},
		commonWishStyle:{
			fontFamily: "Roboto-Regular",
			fontSize: "14px",
			color:'#4a4a4a',
		},
		commonLightStyle:{
			fontFamily: "Roboto-Light",
			fontSize: "14px",
			lineHeight:"20px"
		},
		commonMediumStyle:{
			fontFamily: "Roboto-Medium",
			fontSize: "14px",
			color:'#373737'
		},
		dashboardWidgetHeader:{
			fontFamily: "Roboto-Medium",
			fontSize: "14px",
			marginBottom: '15px',
		},
		dashboardSubmitReport:{
			fontFamily:'Roboto-Regular',
			fontSize:'14px',
		},
	},
	help:{
		commonBtnStyle:{
			color:'#ffffff',
			fontFamily:'Roboto-Medium',
			fontSize:12,
			width:180,
			borderRadius:'8px',
			height:30,
			paddingTop:8,
			textAlign:'center',
			margin:'0 auto',
			cursor:'pointer',
			position:'absolute',
			bottom:12
		},
		eachpageBtnStyle:{
			color:'#ffffff',
			fontFamily:'Roboto-Medium',
			fontSize:14,
			borderRadius:'8px',
			height:40,
			paddingTop:10,
			margin:'0 auto',
			cursor:'pointer'
		},
		selectableHelpStyle	:{
			fontFamily: 'Roboto-Medium,sans-serif',
			border: 10,
			boxSizing: 'border-box',
			display: 'block',
			cursor: 'pointer',
			textDecoration: 'none',
			margin: 0,
			padding: 0,
			outline: 'none',
			fontSize: 12,
			borderRight: '4px solid #237bfb',
			fontWeight: 'inherit',
			transform: 'translate(0px, 0px)',
			verticalAlign: 'middle',
			color: '#4a4a4a',
			position: 'relative',
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
			backgroundColor: '#f6f6f6',
		},
		eachListStyle:{
			fontSize:12,
			fontFamily:'Roboto-Regular',
			color:'#4a4a4a',
			height:50,
			padding:0,
			borderBottom:'1px solid #ccc',
		}
	},
	adminDashboardStyle:{
		iconElementStyle:{
			border: '1px solid white', 
			color:'#ffffff', 
			backgroundColor:'#77ADFC', 
			margin: "20px", 
			borderRadius: '20px', 
			padding: '4px',
			cursor: 'pointer',
		},
		commonMediumStyle:{
			fontFamily: "Roboto-Medium",
			fontSize: "14px",
			color:'#4a4a4a'
		},
		commonRegularStyle:{
			fontFamily: "Roboto-Regular",
			fontSize: "14px",
			color:'#4a4a4a'
		},
		commonLightStyle:{
			fontFamily: "Roboto-Light",
			fontSize: "14px",
			color:'#606060'
		},
		selectableStyle	:{
			fontFamily: 'Roboto-Medium',
			border: 10,
			boxSizing: 'border-box',
			display: 'block',
			cursor: 'pointer',
			textDecoration: 'none',
			margin: 0,
			padding: 0,
			outline: 'none',
			fontSize: 12,
			fontWeight: 'inherit',
			transform: 'translate(0px, 0px)',
			verticalAlign: 'middle',
			color: '#ffffff',
			position: 'relative',
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
			backgroundColor: '#5ccf78',
		},
		selectableTabStyle	:{
			fontFamily: 'Roboto-Medium,sans-serif',
			border: 10,
			boxSizing: 'border-box',
			display: 'block',
			cursor: 'pointer',
			textDecoration: 'none',
			margin: 0,
			padding: 0,
			outline: 'none',
			fontSize: 12,
			borderLeft: '4px solid #5ccf78',
			fontWeight: 'inherit',
			transform: 'translate(0px, 0px)',
			verticalAlign: 'middle',
			color: '#ffffff',
			position: 'relative',
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
			backgroundColor: '#fafafa',
		},
		selectableTabEmpStyle:{
			fontFamily: 'Roboto-Medium,sans-serif',
			border: 10,
			boxSizing: 'border-box',
			display: 'block',
			cursor: 'pointer',
			textDecoration: 'none',
			margin: 0,
			padding: 0,
			outline: 'none',
			fontSize: 12,
			borderLeft: '4px solid #5ccf78',
			fontWeight: 'inherit',
			transform: 'translate(0px, 0px)',
			verticalAlign: 'middle',
			color: '#ffffff',
			position: 'relative',
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
			backgroundColor: '#fafafa',
		},
		adhocButtonStyle:{
			padding:'6px 12px',
			width:200,
			textAlign:'center', 
			backgroundColor:'#ffffff',
			border:'1px solid #237bfb',
			borderRadius:24,
			display:'inline-block',
			marginRight:4,
			fontFamily:'Roboto-Regular',
			color:'#606060',
			fontSize:14,
			cursor:'pointer',
		},
		actionBtn1:{
			padding:3,
			width:100,
			textAlign:'center',
			color:'#ffffff', 
			backgroundColor:'#B9BFCE',
			borderTopLeftRadius:'4em',
			borderBottomLeftRadius:'4em',
			display:'inline-block',
			cursor:'pointer'
		},
		actionBtn2:{
			padding:'3px 12px',
			width:100,
			textAlign:'center',
			color:'#ffffff',
			backgroundColor:'#237bfb',
			borderTopRightRadius:'4em',
			borderBottomRightRadius:'4em',
			display:'inline-block',
			cursor:'pointer'
		}
	},
	etlPageStyle:{
		titleStyle:{
			color:'#237BFB', 
			fontFamily:'Roboto-Medium',
			fontSize:16,
			marginBottom:9
		},
		cardAction:{
			fontFamily:'Roboto-Medium',
			fontSize:14,
			color:'#237BFB',
			cursor:'pointer'
		},
		etlCardText:{
			display:'inline-block',
			borderRight:'1px solid #e3e3e3',
			width:'424px',
			padding:16,
			height:'100%',
		},
		etlCardStyle:{
			height: 'auto',
			marginLeft:'0px',
			width:500,
			marginLeft:25,
			marginBottom:20,
		},
		eachHeading:{
			fontFamily: 'Roboto-Medium',
			fontSize: 14,
			color: '#606060',
			marginBottom:25,
		},
		mailHeader:{
			fontFamily: 'Roboto-Medium',
			fontSize: 14,
			color: '#606060',
			display:'inline-block',
			marginRight:10,
			textTransform:'capitalize',
		},
		subDiv:{
			marginBottom:25
		},
		eachsubDiv:{
			marginLeft:25,
		},
		columnHeader:{
			fontFamily:'Roboto-Medium',
			fontSize:14,
			color:'#606060'
		},
		floatingLabelETL:{
			fontSize:14,
			fontFamily:'Roboto-Light',
			color:'#606060',
		},
		fieldValue:{

		},
		frequencyRadio:{
			fontFamily:'Roboto-Regular',
			fontSize:14,
			color:'#606060'
		},
		footerStyle:{
			position: 'fixed',
			bottom:0,
    		background: '#ffffff',
    		width: 800,
    		height:46,
    		padding:'4px 8px',
   			textAlign: 'right',
   			borderTop:'1px solid #e3e3e3',
   			zIndex:1
		},
	},
	AuthorizeTransaction: {
		padding10: {
			padding: 10,
		},
		height100: {
			height: '100%'
		},
		regular18Font: {
			fontFamily: "Roboto-Regular",
			fontSize: "18px",
		},
		regularLight14Font: {
			fontFamily: "Roboto-Light",
			fontSize: "14px",
		},
		bodyStyle: {
			backgroundColor:'#E9EDEE',
			padding: 0
		},
		actionStyle: {
			backgroundColor: '#E9EDEE',
			padding: '0 4px'
		},
		equalDiv: {
			height: '100%',
			textAlign: 'center'
		}
	},
	floatRight: {
        float: 'right'
    },
    backButton:{
		backgroundColor: '#89B8FC',
		borderRadius: '50%',
	},
	whiteColor: {
		color: '#fff'
	},
	floatingLabelStyle:{
	  	fontSize: '14px',
	  	fontWeight: 'normal',
	  	padding: '0px'
  	},
  	floatingUnderLineStyle: {
  		color:'#237bfb'
  	},
  	hintMsg: {
  		fontStyle: 'italic',
  		color: '',
  		fontSize: 12
  	},
  	chipWrapper: {
	    display: 'flex',
	    flexWrap: 'wrap',
	},
	indvChip:{
		margin: '0px 5px 0px 0px',
		border: '1px solid #77adfc',
		backgroundColor: 'white'
	},
	walletMenuStyle : {
		width: '170px',
		objectFit: 'contain',
		fontFamily: 'Roboto-Regular',
		fontSize: '14px',
		fontStretch: 'normal',
		display:'inline-block',
		color: '#237bfb',
	},
	walletMenuStyle2 : {
		width: '170px',
  		objectFit: 'contain',
  		fontFamily: 'Roboto-Regular',
  		fontSize: '14px',
  		fontStretch: 'normal',
  		color: '#606060',
  		display:'inline-block',
  		marginRight:25,
	},
	walletMenuIconBackGround : {
		width: '260px',
        height: '80px',
        background: '#297ffc',
        borderRadius: '40px',
	},
	walletIconStyle : {
  		fontWeight: '900',
  		color: '#FFFFFF',
	},
	SearchBar:{
		WrapperDiv:{
			margin : '10px 0px 0px 10px',
			fontSize : '12px',
		}
	},
	SetSearchButton:{
		SetSearchButtonBackground:'#f5f5f5',
		SetSearchButtonStyle:{
			color: '#f5f5f5',
			fontSize: '12px',
			height:'22px',
			lineHeight:'18px',
			border:'1px solid #5ccf78',
			borderRight:'0',
			mxWidth:'90px',
			borderRadius:'50px 5px 5px 50px',
			textTransform : 'capitalize'
		},
		SetSearchButtonBtnStyle:{
			color: '#f5f5f5',
			height:'22px',
			lineHeight:'18px',
			border:'1px solid #5ccf78',
			borderRight:'0',
			mxWidth:'90px',
			borderRadius:'50px 5px 5px 50px',
		},
		SetSearchButtonLabelStyle:{
			color:'#000000',
			padding:'0px 8px',
			textTransform : 'capitalize'
		}
	},
	ClearSearchButton:{
		ClearSearchButtonBackground: '#f5f5f5',
		ClearSearchButtonStyle:{
			color: '#f5f5f5',
			fontSize: '12px',
			height:'22px',
			lineHeight:'18px',
			mxWidth:'90px',
			border:'1px solid #4a4a4a',
			borderRadius:'5px 50px 50px 5px',
			textTransform : 'capitalize'
		},
		ClearSearchButtonBtnStyle:{
			color: '#f5f5f5',
			height:'22px',
			lineHeight:'18px',
			mxWidth:'90px',
			border:'1px solid #4a4a4a',
			borderRadius:'5px 50px 50px 5px',
		},
		ClearSearchButtonLabelStyle:{
			color:'#000000',
			padding:'0px 8px',
			textTransform : 'capitalize'
		}
	},
	cardLoadTemplateIcon:{
		width: '36px',height: '76px',padding:0,right:16,bottom:'16px','backgroundColor': '#f9f9f9'
	},
	cardLoadTemplateLabel:{
		fontFamily: 'Roboto-Regular',
		fontSize: '16px',
		color: '#237bfb',
		verticalAlign:'top',
	},
	WFNotification:{
		backgroundColor:'#f9f9f9',
		margin:'12px 12px 0px 0px',
		padding:'5px 12px 5px 26px'
	},
	WfNotifyFloat:{
		height: '13px', fontSize: '14px',color: '#606060', fontWeight:'normal'
	},
	WfNotifyText:{
		width: '170px',fontSize: '16px', color: '#606060'
	},
	cardLoadTemplateDiv:{
		marginLeft:'35px',
		marginTop:'-44px',
		fontFamily: 'Roboto-Regular',
		fontSize: '12px',
		color: '#4a4a4a'
	},
	configDivider:{
		position:'relative',
		marginTop:'10px',
		marginLeft:'-16px' 
	},
	searchMyWalletSubmit:{
		position:'relative',
		bottom:-33,
		right:100,
		borderRadius: 100,
  		backgroundColor: '#237bfb',
  		border: 'solid 1px #ffffff'
	},
	travelConfigCss:{
			chip: {
				margin: 4,
			},
			errorStyle: {
				color: orange500,
			},
			cancelButtonStyle: {
				backgroundColor: '#ffffff',
				color: 'black'
			},
			saveButtonStyle:{
				backgroundColor: '#77ADFC',
				color: 'white'
			}
	},
	FileIcon: {
		display:'table-cell',
		verticalAlign:'middle'
	},
	editUserProfile:
	{
		chip: {
		    margin: 4,
		},
	  	wrapper: {
		    display: 'flex',
		    flexWrap: 'wrap',
		}
	},

	recurringTransfer : {
		headers : {
		  width: '117px',
		  height: '11px',
		  opacity: 0.7,
		  fontFamily: 'Roboto',
		  fontSize: '12px',
		  fontWeight: 'normal',
		  fontStyle: 'normal',
		  fontStretch: 'normal',
		  letterSpacing: '0.3px',
		  textAlign: 'left',
		  color: '#4a4a4a'
		},
		content : {
  			height: '16px',
			fontFamily: 'Roboto',
			fontSize: '14px',
  			fontWeight: 'normal',
  			fontStyle: 'normal',
  			fontStretch: 'normal',
  			letterSpacing: '0.4px',
  			textAlign: 'left',
  			color: '#4a4a4a',
		}
	},
	modifyBtn: {
		style: {
			borderRadius:'100px',
			transition: 'none !important',
			transform: "none !important",
			cursor:'pointer',
			border:'1px solid #ffffff',
			textTransform: 'capitalize',
			lineHeight: '25px',
			height: '27px',
			color: '#ffffff',
			marginRight: 10,
		},
		labelStyle: {
			textTransform: 'capitalize'
		},
		backgroundColor: '#237BFB'
	},
	walletsPage: {
		blueDiv: {backgroundColor: '#237bfb', padding: 20},
		title: {fontFamily: 'Roboto-Regular', fontWeight: 'bold', color: 'white'},
		filterDiv: {marginTop: '-20px', padding: '0 18px'},
		table: {backgroundColor: 'white', border: '1px solid #F3F3F3', borderRadius: 3},
		tableNoBorder: {backgroundColor: 'white', border: '1px solid #F3F3F3'},
		breakdownWrapper:{width: '95%', margin: '0 auto', marginTop: -30},
		paginationDiv: {backgroundColor:'white',height:30,fontSize:12, marginTop: 15},	
		paginationDivEmp:{
			backgroundColor:'white',
			height:30,fontSize:12, padding: '0 5px', 
			borderTopLeftRadius: 3,
			borderTopRightRadius: 3
		},	
	}
};