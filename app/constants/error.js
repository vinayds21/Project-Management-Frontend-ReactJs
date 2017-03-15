module.exports = {
//PERMISSION
NO_PERMISSION: 'You don\'t have the privilege to see this.Please contact your admin to get the permission',
INVALID_CONTENT: 'You don\'t have the privilege to see this.',
NO_EXPENSE_TYPE: 'No expense type is configured.Please contact your admin',

//AUTOLOAD
AUTOLOAD_THRESHOLD_AMOUNT_MONEY_REQUEST_VALIDATION : 'Please enter a threshold amount.',
AUTOLOAD_LOAD_AMOUNT_MONEY_REQUEST_VALIDATION : 'Please enter a load amount.',
AUTOLOAD_THRESHOLD_AMOUNT_AUTO_LOAD_VALIDATION : 'Please enter a threshold amount.',
AUTOLOAD_LOAD_AMOUNT_AUTO_LOAD_VALIDATION : 'Please enter a load amount.',
//BALANCELIMIT
COMPANY_BALANCE_VALIDATION: 'Please enter the company balance.',
VENDOR_BALANCE_VALIDATION: 'Please enter the vendor balance.',
PRIMARY_EMAIL_VALIDATION: 'Please enter a primary email-id.',
//CATEGORY
CATEGORY_NAME :'Please provide a name to the category.',
//ONBOARDING
ONBOARDING_MOBILE_NO_MANDATORY:'Enter a valid mobile number.',
ONBOARDING_MOBILE_NO_CORRECT:'Enter a valid mobile number.',
ONBOARDING_EMAIL_MANDATORY:'Enter a valid mail id.',
ONBOARDING_EMAIL_CORRECT:'Enter a valid mail id.',
ONBOARDING_CARD_MANDATORY:'Select a card.',
//ROle
ROLE_NAME_MANDATORY:'Please enter a name for role.',
//GROUP
GROUP_NAME_MANDATORY:'Please enter a group name.',
//ASSIGN_CARD
ASSIGN_CARD_USER_CARD: 'Please choose user and card.',
//TRANSACTION_TYPE
TRANSACTION_TYPE:'Please enter a type of transaction.',
TRANSACTION_TYPE_STATUS:'Please select a status of transaction.',
TRANSACTION_TYPE_IDENTIFIER:'Please enter an identifier.',
//REPORT_CONFIG
SET_REPORT_CONFIG:'Please fill all the fields.',
//TRAVEL_CONIG
SET_TRAVEL_CONFIG:'Please fill all the fields.',
//STATUS
STATUS_NAME_MANDATORY:'Please enter a status name.',
STATUS_TYPE_MANADATORY:'Please enter a status type.',
//EXTRA_FIELD
EXTRA_FIELD_NAME_MANDATORY:'Please provide a name.',
EXTRA_FIELD_MAX_FILE_SIZE_MANDATORY:'Please provide an attachment number.',
EXTRA_FIELD_DROPDOWN_VALUE_MANDATORY:'Please provide values for dropdown.',
EXTRA_FIELD_NEW_FIELD_TYPE_MANDATORY:'Please add an override field.',
EXTRA_FIELD_PRE_POST_FIX_STATE_MANDATORY:'Please provide the text.',
//PASSWORD
EXISTING_PASSWORD:'Please enter your existing password.',
NEW_PASSWORD:'Please enter your new password.',
CONFIRM_PASSWORD:'Please enter your confirm password.',
NEW_CONFIRM_PASSWORD_MATCH:'Your confirm password should be same as new password.',
VALID_OTP:'Enter a valid OTP',
passwordCorrectFormat:'Please give password in correct format',
//EXPENSES
EXPENSES_SPENT_VALIDATION:'Enter a valid name.',
EXPENSES_WALLET_VALIDATION:'Enter a valid wallet name.',
EXPENSES_AMOUNT_VALIDATION:'Enter a valid amount.',
NO_EXPRESSION: 'Please create some expression first',
EXPENSES_EXPRESSION_VALIDATION:'Cannot create this because there is no expression configured for this calculated type of expense',
//REPORTS
REPORT_NAME_VALIDATION:"Enter a valid Name.",
REPORT_DESCP_VALIDATION:"Enter a valid Description.",
NO_SUCCESS_STATE_TRF: "No final state has been created for TRF",
//TRAVEL
TRAVEL_NAME_VALIDATION:'Enter a valid name.',
TRAVEL_DESCP_VALIDATION:'Enter a valid Purpose of Travel.',
//WORKFLOW
WORKFLOW_MR_AMOUNT_VALIDATION:'Please give proper amount which needs to be approved',
WORKFLOW_MR_REASON_VALIDATION:'Please give the reason for ',
wfNotifyMonthDay:'Please select either individual day of month or last day of month',
pDays:'Please give pending days',
pFreq:'Please give pending frequency',
pAcceptableAction:'Please select acceptable action',
commonNotify:"Please select either pending days,frequency or month day",

WORKFLOW_AUTO_AA_ERROR: 'Only one action is allowed for each lineitem status when auto configuration is ON',
WORKFLOW_CONTAINER_STATUS_MANDATORY: 'Please select some container status for the setting',
WORKFLOW_ALI_DUPLICATION_ERROR: 'The allowed action mapping is already present for the selected status',
WORKFLOW_ALI_ERROR: 'Please provide the lineitem status',
WORKFLOW_IAM_ERROR: 'Please select something',
WORKFLOW_IAM_DUPLICATION_ERROR: 'The item action mapping is already present for the selected allowed action',
WORKFLOW_ROLE_MANDATORY: 'Please select a role',
DELETE_ALI: 'The mapping of the action is present in item action map.So please remove that first.',
CREATE_STATE_SETTING: 'There is no mapping of allowed actions in item action map for those defined in acceptable line item',
ENTRY_STATE_REQUIRED: 'Please select some entry states', 
EXIT_STATE_REQUIRED:'Please select some exit states',
EXIT_STATE_CANNOT_BE_ENTRY_STATE: 'Exit state(s) cannot be included in entry state',


WORKFLOW_STATE_CONDITION_INVALID_EXPRESSION: 'Please provide a valid logic',
WORKFLOW_STATE_CONDITION_NO_EXPRESSION: 'Please provide a logic before submitting',
WORKFLOW_STATE_CONDITION_FROM_STATE: 'Please provide a from state',
WORKFLOW_STATE_CONDITION_TO_STATE: 'Please provide a to state',

//Logical Unit
NO_OPERAND_TYPE: 'Please provide any operand type',
NO_OPERAND_VALUE: 'Please provide any operand',
NO_OPERATOR: 'Please provide an operator',
NO_ITEM_TYPE: 'Please provide any item name',
NO_AGGREGATOR: 'Please provide an aggregator',


//POLICY
SELECT_CRITERIA: 'Please select a criteria',
SPECIFIC_AMOUNT : 'Please enter specific amount',
SELECT_WEEKDAY : 'Please select week day',
SELECT_MONTHDAY: 'Please select month day',

//Wallet configuration

cardLoadText:'Please give template name',
cardLoadDesc:'Please give description',
wallet_action:'Please select wallet action',
cardLoadAllEmp:'Please select either all employee or individually',
allEmpWalletVal:'Please select list of employee individually',
amount:'Please give amount',
period:'Please select period',
repeatEveryChangeVal:'Please select period value',
repeatOnChangeTimeVal:'Please select time',
repeatOnChangeVal:'Please select day of month',
monthCheck:'Please select either last day of month or individual date',
repeatOnChangeVal1:'Please select day of week',
endsOnRadioVal:'Please select ends on',
end_on_occurances:'Please give Occurences value',
end_date:'Please give date',
notifyRadioVal:'Please select either notify or auto load',
notify_to:'Please select notify to',
notifyActionVal:'Please select action',
cut_off_amount:'Please give cut off amount',
floor_off_amount:'Please give floor limit amount',
absoluteAmtval:'Please give absolute amount',
roundOffVal:'Please give round off amount',
conditionDateVal:'Please select date of month',
transferAmtToVal:'Please select transfer to',
configWallet:'Please Select Organization Wallet .',
configAmt:'Please enter a numeric value.',
// WALLETS
SELECT_WALLET:'Please Select Wallet',
TRY_AGAIN:'Please try again',
ENTER_PASSWORD:'Please enter password',
INVALID_CITY:'Please select a valid city from the list.',
INVALID_COUNTRY:'Please select a valid country from the list.',
}