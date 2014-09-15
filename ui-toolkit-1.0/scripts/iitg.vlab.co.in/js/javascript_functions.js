function authenticate()
{
	/*var ex;
	if(ex!='expt')
	{		
		ex=0;
	}*/
	//window.open ("login_page.php?page="+ex+"","openwindowname","width=450,height=555,scrollbars=no,resizable=no,toolbar=no,location=no,directories=no,status=no,top=150, left=130,menu  bar=no,copyhistory=no");	
	window.location.href = '?pg=bindex&bsub=login_page';
}
function closewindow() {
	window.close()
	}
function redirAfterLogin() {
	window.opener.location.href = 'index.php?pg=ADMIN_HOME';
	window.close()
}
function validate()
{
	var username=document.getElementById('username');
	var password=document.getElementById('password');
	if(username.value=="")
	{
		alert("Please provide username.");
			username.focus();
			return(false);
	}
	if(password.value=="")
	{
		alert("Please provide password.");
			password.focus();
			return(false);
	}
	return true;
}
function displayMsg(id, msg)
{

	document. getElementById(id). innerHTML = msg;
}

/*Js functions for pop up: CSSPOPUP*/
function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv_height=blanket_height/2-450;
	//150 is half popup's height
	popUpDiv.style.top = popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	window_width=window_width/2-150;
	//150 is half popup's width
	popUpDiv.style.left = window_width + 'px';
}
function popup(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);		
}
/*******************************/

//function for validation during Add Name & Description.

function checkAdd(addName,addDesc){
	var name1 = document.getElementById(addName);
	var desc1 = document.getElementById(addDesc);
	if((name1.value=="") || (name1.value==null)){
		alert("Please fill the name field");
		name1.focus();
		return (false);
	}
	if((desc1.value=="") || (desc1.value==null)){
		alert("Please fill the description field");
		desc1.focus();
		return (false);
	}
}

//function for validation during Edit Name & Description.

function checkEdit(editedName,editedDesc){
	document.getElementById(editedName)
	var name = document.getElementById(editedName);
	var desc = document.getElementById(editedDesc);
	if((name.value=="") || (name.value==null)) {
		alert("Please fill the name field");
		name.focus();
		return false;
	}
	if((desc.value=="") || (desc.value==null)) {
		alert("Please fill the description field");
		desc.focus();
		return false;
	}
}

//function for validation during Add Experiment Name & Description.

function checkAddExp(expname,expdesc){
	var exp_name = document.getElementById(expname);
	var exp_desc = document.getElementById(expdesc);
	if((exp_name.value=="") || (exp_name.value==null)){
		alert("Please fill the Experiment Name");
		exp_name.focus();
		return false;
	}
	if((exp_desc.value=="") || (exp_desc.value==null)){
		alert("Please fill the Experiment Description");
		exp_desc.focus();
		return false;
	}
}

/*******************************/

//function for validation for Experiment Scheduler:Date and email validation.

function checkSchedule(){
	var time = document.scheduleForm.srartTime;
	var mail = document.scheduleForm.email;
	if((time.value=="") || (time.value==null)){
		alert("Please specify the Start time.");
		time.focus();
		return false;
	}
	if((mail.value=="") || (mail.value==null)){
		alert("Please enter the Email id.");
		mail.focus();
		return false;
	}
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(scheduleForm.email.value))
	{
		return (true)
	} else {
		alert("Invalid E-mail Address! Please re-enter.")
		return (false)
	}
}
//function to pop up a page
function popUpFile(fileName)
{
	var fileName;
	window.open (fileName,"openwindowname","width=450,height=400,scrollbars=no,resizable=no,toolbar=no,location=no,directories=no,status=no,top=180, left=130,menu  bar=no,copyhistory=no");	
}
//function to validate tab sequence.
function checkSequenceRepeat()
{
        var chks = document.getElementsByName('selTab[]'); //here tabTxt[] is the name of the textbox 
        for (var i=0; i<chks.length; i++)
        {	
			for(var j=i+1; j<chks.length; j++)
			{
				if (chks[i].value==chks[j].value)
				{
					alert("Please select different order number for each tab.");
					chks[j].focus();
					return false;            
				}
			}
        }
}

//function for check/uncheck all check boxes.
function selectAllCheckbox(allcheck) {
     var checkForm = allcheck.form;
	 z = 0;
	 for(z=0; z<checkForm.length;z++){
		if(checkForm[z].type == 'checkbox' && checkForm[z].name != 'checkall'){
		checkForm[z].checked = allcheck.checked;
		}
    }
}
//
function comboSubmit(combo_name)
{
	document.getElementById("combo1").value=combo_name;	
	document.forms["form1"].submit();
}

//function for validate user profile form.
function checkUserProfileForm(form1) 
{	
	var phoneNumber=document.getElementById("phoneNumber").value;
	var age=document.getElementById("age");
	var avoidInvalidChars = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if(form1.mailId.value=='')
	{
		alert("Enter Email Address!"); 
		document.form1.mailId.focus();
		return false;
	} 
	else if(form1.mailId.value!='')
	{
		if(avoidInvalidChars.test(form1.mailId.value) == false) 
		{ 
		   alert('Invalid Email Address');
		   form1.mailId.focus();
		   return false;
		}
	}		
	if((phoneNumber!="") || (phoneNumber!=null))
	{
		if(isNaN(phoneNumber))
		{
			alert("Please enter only numbers in phone number field.");			
			document.getElementById("phoneNumber").focus();
			return false;
		}
	}
	
	if(form1.newPassword.value != "" && form1.newPassword.value == form1.confirmPassword.value)
	{ 
		if(form1.newPassword.value.length < 5) 
		{ 
			alert("Password must contain at least five characters!"); 
			document.form1.newPassword.value="";
			document.form1.confirmPassword.value="";
			document.form1.newPassword.focus();
			return false; 
		} 
		else 
		{
			if(confirm("Are you sure, you want to change the email-address and password?"))
			{
			  	return true
			}
			else
			{
			 	return false;
			}
		}
	}
	if(form1.newPassword.value != "" && form1.newPassword.value != form1.confirmPassword.value)
	{ 
		if(form1.newPassword.value != form1.confirmPassword.value) 
		{
			alert("The password you entered do not match!");			
			document.form1.newPassword.value="";
			document.form1.confirmPassword.value="";
			document.form1.newPassword.focus();
			return false; 
		} 
		else 
		{
			if(confirm("Are you sure, you want to change the email-address and password?"))
			{
			  	return true;
			}
			else
			{	
				document.form1.newPassword.value="";
				document.form1.confirmPassword.value="";
				document.form1.newPassword.focus();
			  	return false;
			}			
		} 
	} 
	if(form1.mailId.value!="" && form1.newPassword.value=="" && form1.confirmPassword.value=="")
	{
		if(confirm("Are you sure, you want to change the email-address?"))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
} //function close here.

//sree
function show_image(filePath, fileName)
{
		//alert(fileName);
document.getElementById("select_image").src=filePath;
document.getElementById("selectedImage").value=fileName;
document.getElementById('PopUp').style.display = 'none' ;

}
function show_edit_image(filePath, fileName)
{
		//alert(fileName);
document.getElementById("edit_image").src=filePath;
document.getElementById("editedimage").value=fileName;
document.getElementById('editPopUp').style.display = 'none' ;

}

function setVisibility(id, visibility) {
document.getElementById(id).style.display = visibility;
}

function checkSpecialCharacter(fieldName)
{
	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	for (var i = 0; i < fieldName.value.length; i++) 
	{
		if (iChars.indexOf(fieldName.value.charAt(i)) != -1) {
			alert ("Special characters are not allowed.");
			fieldName.focus();
			return false;
		}
	}
	return true;
}
function checkTab(buttonName)
{
	var buttonName;
	var defaultTabname=document.getElementById("defaultLang").value;
	if(buttonName=='editTabName'+defaultTabname)
	{
		var tabName=document.getElementById(buttonName);
		var specialChar=checkSpecialCharacter(tabName);
		if(!specialChar)
		{
			return false;
		}
		//
		if(tabName.value=="")
		{
			alert("Tab name can not be left blank");
			tabName.focus();
			return(false);
		}
		
	}
	if(buttonName=='addTabName'+defaultTabname)
	{
		
		var tabName=document.getElementById('addTabName'+defaultTabname);
		
		if(tabName.value=="")
		{
			alert("Please provide a new tab name.");
			tabName.focus();
			return(false);
		}
		var specialChar=checkSpecialCharacter(tabName);
		if(!specialChar)
		{
			return false;
		}
		//
		
		
	}
	if(buttonName=='deleteTab')
	{
		var answer = confirm("You have selected to delete this tab. Press 'ok' to continue")
		if(!answer)
		{
			return false;
		}
		
	}
	//	
	return true;
	
}
function show() 
{	
	var fbDiv = document.getElementById('showFeedback');
	var txtDiv = document.getElementById('showText');
	var linkDiv = document.getElementById('showLink');
	var versionComments;
	if(fbDiv.style.display=="block")
	{	
		versionComments = document.getElementById('versionComments1');
	}
	else if(txtDiv.style.display=="block")
	{ 
		versionComments = document.getElementById('versionComments2');
	}
	else if(linkDiv.style.display=="block")
	{ 
		versionComments = document.getElementById('versionComments3');
	}
	
	if(versionComments.value=="" || versionComments.value==null)
	{ 
		var comment = confirm(" Are you sure you want to proceed without entering the Version Comment?")
		if(!comment)
		{			
			versionComments.focus();
			return false;		
		}
	}
	document.form1.action = '#2';
	
}


function deleteTopicConfirm(formName,topicId,topicName,topic)
{
	topicName=topicName.replace(/abc039;/g,"'").replace(/abcquot;/g,'"')
	var answer = confirm ("This will delete the "+ topic +" '" +topicName+"'.Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.deleteData.value=topicId;
		document.form1.submit();			
	}	
}

function deleteSubConfirm(formName,subjectId,subjectName,subject)
{
	subjectName=subjectName.replace(/abc039;/g,"'").replace(/abcquot;/g,'"')
	var answer = confirm ("This will delete the "+ subject+" '" + subjectName+"'.Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.deleteData.value=subjectId;
		document.form1.submit();			
	}
}

function deleteExperimentConfirm(formName,id,name)
{
	
	var answer = confirm ("This will delete the selected experiment. Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.deleteData.value=id;
		document.form1.submit();			
	}	
}

//function for validate user registration form.
function registrationFormValidation(regForm)
{	
	var email = document.regForm.emailId;
	var passwd = document.regForm.paswd;
	var confPwd = document.regForm.confPaswd;
	//var avoidInvalidChars = /^[A-Za-z]+[A-Za-z0-9-]+([\_.][A-Za-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	var avoidInvalidChars = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	emailAddress = email.value;
	//email validation
	if((email.value=="") || (email.value==null))
	{
		alert("Please enter the email address.");
		email.focus();
		return false;
	}	
	else if(avoidInvalidChars.test(emailAddress) == false) 
	{ 
       alert('Invalid Email Address');
	   email.focus();
       return false;
    }
	//Password Validation 
 	else if((passwd.value=="") || (passwd.value==null))
	{
		alert("Please enter a password");
		passwd.focus();
		return false;
	}	
	else if(passwd.value.length < 5) 
	{ 
		alert("Password must contain at least five characters!"); 
		passwd.value="";
		confPwd.value="";
		passwd.focus();
		return false; 
	} 
	
	//Confirm Pasword Validation	
	else if(confPwd.value=="")
	{
		alert("Please enter confirm password");
		confPwd.focus();
		return false;
	}
	
	else if(confPwd.value!=passwd.value)
	{
		alert("The password you entered do not match!");
		passwd.value="";
		confPwd.value="";
		passwd.focus();
		return false;
	}
	if(confirm("Are you sure, you want to register?"))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//this function for user registration form(display value in a text box on another text box's onchange).

function displayTextBoxValue()
{
	document.regForm.userName.value = document.regForm.emailId.value;	
}

function checkPage(buttonName)
{
	var buttonName;
/*	if(buttonName=='editPage')
	{
		var pageName=document.getElementById('editPageName');
		if(pageName.value=="")
		{
			alert("Page name can not be left blank");
			pageName.focus();
			return(false);
		}
		
	}
	if(buttonName=='addMenuPage')
	{*/
		var pageName=document.getElementById(buttonName);
		if(pageName.value=="")
		{
			alert("Please provide a new Page name.");
			pageName.focus();
			return(false);
		}
	/*}
	if(buttonName=='deletePage')
	{
		var answer = confirm("You have selected to delete this Page. Press 'ok' to continue")
		if(!answer)
		{
			return false;
		}
		
	}*/
	return true;
}

//Function for contact us page validation.
function checkContactUs()
{
	var name = document.contact.name;
	var email = document.contact.email;
	var userType = document.contact.userType;
	var contactNumber = document.contact.contactNumber;
	var subject = document.contact.subject;	
	var message = document.contact.message;
	var captcha_code = document.contact.captcha_code;
	var avoidInvalidChars = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;	
	
	//name validation
	if(name.value=="")
	{
		alert("Please enter your name.");
		name.focus();
		return false;
	}
	else if(name.value.length<3)
	{
		alert("Text is too short, it must be at least 3.");
		name.focus();
		return false;
	}
	//email validation
	if((email.value=="") || (email.value==null))
	{
		alert("Please enter your email id.");
		email.focus();
		return false;
	}	
	else if(avoidInvalidChars.test(email.value) == false) 
	{
		alert("Please enter a valid email id.");		
		email.focus();
		return false;
	}	
	if(userType.value=="Select")
	{
		alert("Please select the user type.");
		userType.focus();
		return false;
	}
	if(contactNumber.value!="")
	{
		if(isNaN(contactNumber.value))
		{
			alert("Please enter a valid contact number.");
			contactNumber.value="";
			contactNumber.focus();
			return false;
		}
	}
	if(subject.value=="")
	{
		alert("Please enter the mail subject.");
		subject.focus();
		return false;
	}
	//message validation
	if(message.value=="")
	{
		alert("Please enter the message.");
		message.focus();
		return false;
	}
	//code validation
	if(captcha_code.value=="")
	{
		alert("Please enter the code");
		captcha_code.focus();
		return false;
	}
	else if(captcha_code.value.length<4)
	{
		alert("Text is too short, it must be at least 4.");
		captcha_code.focus();
		return false;
	}
	return true;
	
}
//function for Question Deleting.
function deleteQuestionConfirm(questionId)
{
	var answer = confirm ("This will delete the selected question. Are you sure, you want to proceed?");
	if(answer)
	{
		document.form1.deleteQuestion.value=questionId;
		document.form1.submit();			
	}
}

//function for adding choice.
function addChoice(tableID)
{var mytableId = document.getElementById(tableID);
var rowCount = mytableId.rows.length;
var row = mytableId.insertRow(rowCount);
var answerVal = document.getElementById('ansVal').value;
var assignId = document.getElementById('idAssign').value;
answerVal++;
document.getElementById('ansVal').value=answerVal;
if(assignId=="")
{
document.getElementById('idAssign').value = answerVal;
}
else
{
document.getElementById('idAssign').value = assignId+","+answerVal;
}
var cell3 = row.insertCell(0);
cell3.setAttribute("class","text");
var element2 = document.createElement("textarea");
element2.cols = "50";
element2.name = "choice"+answerVal;
element2.id = "choice"+answerVal;
element2.value = "choice"+answerVal;
element2.onclick = function (){ if(element2.value=="choice"+answerVal)
{ element2.value=""; }}
element2.onmouseout = function(){ 
if(element2.value=="" || element2.value=="choice"+answerVal)
{ element2.value="choice"+answerVal;}}
cell3.appendChild(element2);
var cell4 = row.insertCell(1);
cell4.align = 'center';
var element3 = document.createElement("input");
element3.name = "correctAns";
element3.id = "correctAns";
element3.type = "radio";
element3.value = answerVal;
cell4.appendChild(element3);
var cell5 = row.insertCell(2);
cell5.align = 'center';
var deleteBtn = document.createElement("input");
deleteBtn.type = "image";
deleteBtn.src = "images/delete.png";
deleteBtn.setAttribute("width","20px");
deleteBtn.setAttribute("height","20px");
deleteBtn.setAttribute("title","delete choice");
deleteBtn.onclick = function () { deleteChoice(this,answerVal) } ;
cell5.appendChild(deleteBtn);
}
//function for deleting choice.
function deleteChoice(obj,answerVal) 
{
	var delRow = obj.parentNode.parentNode;
	var tbl = delRow.parentNode.parentNode;
	var rIndex = delRow.sectionRowIndex;
	delRow.parentNode.deleteRow(rIndex);
	var IdAssign = document.getElementById('idAssign').value;
	var idArray = new Array();
	idArray	= IdAssign.split(",");
	for(i in idArray)
	{
		if(idArray[i].indexOf(answerVal)>-1)
		{
			idArray.splice(i, 1);
		}
	}
	var idString = idArray.toString();
	document.getElementById('idAssign').value=idString;		
}

function showAdd(bid)
{ 		
	var ansType = document.getElementById('choiceType').value;
	if(ansType=='fillInBlanks')
	{
		showFillInBlanks('fillInBlanks');		
	}
	else if((document.getElementById('ansVal').value<4))
	{
		addChoice('dataTable');	
		addChoice('dataTable');	
		addChoice('dataTable');	
		addChoice('dataTable');	
	}	
	
	if(ansType=='text')
	{
		bid = 'addDiv';
		document.getElementById('addFillInBlanks').style.display = "none";
	}
	else if(ansType=='image')
	{
		bid = 'addImage';
		document.getElementById('addFillInBlanks').style.display = "none";
	}
	else if(ansType=='sechead')
	{
		bid = 'addSectonHead';
		document.getElementById('addFillInBlanks').style.display = "none";
	}
	
	document.getElementById('addImage').style.display = "none";
	document.getElementById('addDiv').style.display = "none";	
	document.getElementById('addSectonHead').style.display = "none";
	
	if(document.getElementById(bid).style.display == "none") 
	{ 
		document.getElementById(bid).style.display = "block"; 
	} 
	else if (document.getElementById(bid).style.display == "block") 
	{ 
		document.getElementById(bid).style.display = "none"; 
	}	
	return true; 		
}

function hideAddDiv()
{
	document.getElementById('addImage').style.display = "none";
	document.getElementById('addDiv').style.display = "none";	
	document.getElementById('addSectonHead').style.display = "none";	
	document.getElementById('addFillInBlanks').style.display = "none";
}

function imagePopUp(number)
{		
	window.open ("admin/crop_image.php?num="+number+"&fck=0","childWindow",
	"width=650,height=500,scrollbars=1,resizable=no,toolbar=no,location=no,directories=no,status=no,top=150,left=130,menu bar=no,copyhistory=no");
}
function CallAlert(path,num)
{
	if(document.getElementById('imgUpload'+num) && document.getElementById('imgValue'+num)) 
	{
		document.getElementById('imgUpload'+num).src=path;	
		document.getElementById('imgValue'+num).value=path;
	}
	if(document.getElementById('qnimgUpload'+num) && document.getElementById('qnimgValue'+num)) 
	{
		document.getElementById('qnimgUpload'+num).src=path;	
		document.getElementById('qnimgValue'+num).value=path;
	}
	if(document.getElementById('editImage'+num) && document.getElementById('editHid'+num)) 
	{
		document.getElementById('editImage'+num).src=path;
		document.getElementById('editHid'+num).value=path;
	}
	if(document.getElementById('editImgUpload'+num) && document.getElementById('editImgValue'+num)) 
	{
		document.getElementById('editImgUpload'+num).src=path;	
		document.getElementById('editImgValue'+num).value=path;
	}	
	if(document.getElementById('img'+num) && document.getElementById('imgHidVal'+num))
	{
		document.getElementById('img'+num).src=path;
		document.getElementById('imgHidVal'+num).value=path;	
	}
}
function clearcontent(id)
{
	//alert(id)	;
	if(id=='quesnTxt')
	{
		if(document.getElementById(id).value=="Question text")
		{
				document.getElementById(id).value="";
		}
		
	}
	if(id=='hintVal')
	{
		if(document.getElementById(id).value=="Hint")
		{
				document.getElementById(id).value="";
		}
	}
	if(id=='questionTxt')
	{
		if(document.getElementById(id).value=="Question text")
		{
				document.getElementById(id).value="";
		}
	}
	if(id=='hintText')
	{
		if(document.getElementById(id).value=="Hint")
		{
				document.getElementById(id).value="";
		}
	}
	if(id=='fillQuestion')
	{
		if(document.getElementById(id).value=="Question text. Use three underscores (___) to mention the blank part.")
		{
				document.getElementById(id).value="";
		}
		
	}
	if(id=='hintFill')
	{
		if(document.getElementById(id).value=="Hint")
		{
				document.getElementById(id).value="";
		}
		
	}
}

function fillcontent(id)
{
	if(id=='quesnTxt')
	{
		if(document.getElementById(id).value=="")
			{
					document.getElementById(id).value="Question text";
			}	
	}
	if(id=='hintVal')
	{
		if(document.getElementById(id).value=="")
			{
					document.getElementById(id).value="Hint";
			}	
	}
	if(id=='questionTxt')
	{
		if(document.getElementById(id).value=="")
			{
					document.getElementById(id).value="Question text";
			}	
	}
	if(id=='hintText')
	{
		if(document.getElementById(id).value=="")
			{
					document.getElementById(id).value="Hint";
			}	
	}
	if(id=='fillQuestion')
	{
		if(document.getElementById(id).value=="")
		{
				document.getElementById(id).value="Question text. Use three underscores (___) to mention the blank part.";
		}
		
	}
	if(id=='hintFill')
	{
		if(document.getElementById(id).value=="")
		{
				document.getElementById(id).value="Hint";
		}
		
	}
}
function checkRadio (frmName, rbGroupName) 
{
	 var radios = document[frmName].elements[rbGroupName];
	 for (var i=0; i <radios.length; i++) 
	 {
		if (radios[i].checked) 
		{
			return true;
		}
	}
	 return false;
} 
//add choice text validation
function validateAddQuiz(formname)
{	
	//var temp='form1['correctAns']';
	var qntext = document.getElementById('questionTxt');	
	var incVal = document.getElementById('ansVal').value;
	var radAns = document.getElementById('correctAns');
	var assign = document.getElementById('idAssign').value;
	var assignArr	= assign.split(",");	
	
	if(qntext.value==" " || qntext.value=="Question text" || qntext.value=="")
	{
		alert('Please enter the question');
		qntext.value ="";
		qntext.focus();
		return false;
	}
	if(assignArr.length >= 2)
	{			
		var j;
		for (var i = 0; i <= incVal; i++)
		{
			j=i+1;
			if(document.getElementById("choice"+j))
			{
				if (document.getElementById("choice"+j).value ==" " || document.getElementById("choice"+j).value == "choice"+j || document.getElementById("choice"+j).value=="")
				{		   
					alert("Please enter all choices");
					document.getElementById("choice"+j).value="";
					document.getElementById("choice"+j).focus();
					return false;
				}	
			}
		}
	
	}
	else
	{
		alert('Atleast two choices are needed');
		return false;
	}
	if(assignArr.length >= 2)
	{
		if (!checkRadio("form1","correctAns"))
		{
			alert("Please select the correct choice");
			return false;
		}
	}

	return true;
}
//add choice image validation
function addImgQuiz(form1)
{	
	var qtext = document.getElementById('quesnTxt');		
	
	if(qtext.value==" " || qtext.value=="Question text")
	{
		alert('Please enter the question');
		qtext.value ="";
		qtext.focus();
		return false;
	}
	
	for(var j=0; j<4; j++)
	{			
		if(document.getElementById('imgUpload'+j))
		{
			var urlString = document.getElementById('imgUpload'+j).src;
			var lastIndex = urlString.lastIndexOf('/');
			var suburl = urlString.substr(lastIndex+1,urlString.length);
			
			if(suburl=="upload_question.jpg")
			{
				alert('Please upload image choice');
				return false;
			}
		}		
	}
	if (!checkRadio("form1","answer"))
	{
		alert("Please select the correct choice");
		return false;
	}

	return true;	
}
//edit choice image validation
function imgQuizValidate(editQid)
{
	document.getElementById("questnId").value=editQid;
	var qnImgTxt = document.getElementById('quesnImgTxt');	
	if(qnImgTxt.value=="" || qnImgTxt.value==" ")
	{
		alert('Please enter the question');
		qnImgTxt.focus();
		return false;
	}
	return true;
}
//edit text choice validation
function validateEditQuiz(editQid)
{	
	document.getElementById("questnId").value=editQid;
	var quest = document.getElementById('questTxt');
	
	if(quest.value=="" || quest.value==" " || quest.value=="Question text")
	{
		alert('Please enter the question');
		quest.focus();		
		return false;
	}
	
	var chks = document.getElementsByName('choices[]');
 
	for (var i = 0; i < chks.length; i++)
	{        
		if (chks[i].value=="")
		{
			alert("Please fill all the choices");
			chks[i].focus();
			return false;            
		}
	}	
	return true;
}

function checkFeedBack()
{
	var captcha_code = document.form1.captcha_code;
	if(captcha_code.value=="")
	{
		alert("Please enter the code");
		captcha_code.focus();
		return false;
	}
	else if(captcha_code.value.length<4)
	{
		alert("Text is too short, it must be at least 4.");
		captcha_code.focus();
		return false;
	}
	document.form1.subjectId.disabled=false;
	document.form1.topicId.disabled=false;
	document.form1.experimentId.disabled=false;	
	return true;
}
//function for validate user registration form of olab.
function openRegistrationFormValidationOlab(regForm)
{	
	var email = document.regForm.emailId;
	var passwd = document.regForm.paswd;
	var confPwd = document.regForm.confPaswd;
	var confEmailId = document.regForm.confEmailId;
	//var avoidInvalidChars = /^[A-Za-z]+[A-Za-z0-9-]+([\_.][A-Za-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	var avoidInvalidChars = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var address = email.value;
	var phone = document.regForm.phone;	
	var fname = document.getElementById('firstName');
	var lname = document.getElementById('lastName');
	/*var age = document.getElementById('age');
	var role = document.getElementById('profession');
	var schoolName = document.getElementById('collage');
	var subject = document.getElementById('specialization');
	var schoolType = document.getElementById('university');	
	var state = document.getElementById('state');	*/
	//email validation
	if((email.value=="") || (email.value==null))
	{
		alert("Please enter the email id.");
		email.focus();
		return false;
	}	
	else if(avoidInvalidChars.test(address) == false) 
	{ 
       alert('Invalid Email Address');
	   email.focus();
       return false;
    }
	// Confirm Email id
	else if(confEmailId.value=="")
	{
		alert("Please enter confirm email id");
		confEmailId.focus();
		return false;
	}	
	else if(email.value!=confEmailId.value)
	{
		alert("The email id you entered do not match!");
		email.value="";
		confEmailId.value="";
		email.focus();
		return false;
	}			
	//Password Validation 
 	else if((passwd.value=="") || (passwd.value==null))
	{
		alert("Please enter a password");
		passwd.focus();
		return false;
	}	
	else if(passwd.value.length < 5) 
	{ 
		alert("Password must contain at least five characters!"); 
		passwd.value="";
		confPwd.value="";
		passwd.focus();
		return false; 
	}	
	//Confirm Pasword Validation	
	else if(confPwd.value=="")
	{
		alert("Please enter confirm password");
		confPwd.focus();
		return false;
	}	
	else if(confPwd.value!=passwd.value)
	{
		alert("The password you entered do not match!");
		passwd.value="";
		confPwd.value="";
		passwd.focus();
		return false;
	}
	else if(fname.value=="" || fname.value==null)
	{
		alert("Please enter first name.");
		fname.focus();
		return false;
	}
	else if(lname.value=="" || lname.value==null)
	{
		alert("Please enter last name.");
		lname.focus();
		return false;
	}
	/*else if(age.value=="Select")
	{
		alert("Please select your age group.");
		age.focus();
		return false;
	}
	else if(role.value=="Select")
	{
		alert("Please select the role.");
		role.focus();
		return false;
	}
	else if(schoolName.value=="" || schoolName.value==null)
	{
		alert("Please enter the school name.");
		schoolName.focus();
		return false;
	}
	else if(subject.value=="Select")
	{
		alert("Please select the subject.");
		subject.focus();
		return false;
	}
	else if(schoolType.value=="Select")
	{
		alert("Please select the school type.");
		schoolType.focus();
		return false;
	}
	else if(state.value=="Select")
	{
		alert("Please select the state.");
		state.focus();
		return false;
	}*/
	
	if((phone.value!="") || (phone.value!=null))
	{
		if(isNaN(phone.value))
		{
			alert("Please enter only numbers in phone number field.");
			phone.focus();
			return false;
		}
	}
	/*if(confirm("Are you sure, you want to register?"))
	{
		return true;
	}
	else
	{
		return false;
	}*/
}
//function for validate user registration form of vlab.
function openRegistrationFormValidationVlab(regForm)
{	
	var email = document.regForm.emailId;
	var passwd = document.regForm.paswd;
	var confPwd = document.regForm.confPaswd;
	var confEmailId = document.regForm.confEmailId;
	//var avoidInvalidChars = /^[A-Za-z]+[A-Za-z0-9-]+([\_.][A-Za-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	var avoidInvalidChars = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var address = email.value;
	var phone = document.regForm.phone;	
	/*var fname = document.getElementById('firstName');
	var lname = document.getElementById('lastName');
	var age = document.getElementById('age');
	var role = document.getElementById('profession');
	var schoolName = document.getElementById('collage');
	var subject = document.getElementById('specialization');
	var schoolType = document.getElementById('university');	
	var state = document.getElementById('state');*/	
	//email validation
	if((email.value=="") || (email.value==null))
	{
		alert("Please enter the email id.");
		email.focus();
		return false;
	}	
	else if(avoidInvalidChars.test(address) == false) 
	{ 
       alert('Invalid Email Address');
	   email.focus();
       return false;
    }
	// Confirm Email id
	else if(confEmailId.value=="")
	{
		alert("Please enter confirm email id");
		confEmailId.focus();
		return false;
	}	
	else if(email.value!=confEmailId.value)
	{
		alert("The email id you entered do not match!");
		email.value="";
		confEmailId.value="";
		email.focus();
		return false;
	}			
	//Password Validation 
 	else if((passwd.value=="") || (passwd.value==null))
	{
		alert("Please enter a password");
		passwd.focus();
		return false;
	}	
	else if(passwd.value.length < 5) 
	{ 
		alert("Password must contain at least five characters!"); 
		passwd.value="";
		confPwd.value="";
		passwd.focus();
		return false; 
	}	
	//Confirm Pasword Validation	
	else if(confPwd.value=="")
	{
		alert("Please enter confirm password");
		confPwd.focus();
		return false;
	}	
	else if(confPwd.value!=passwd.value)
	{
		alert("The password you entered do not match!");
		passwd.value="";
		confPwd.value="";
		passwd.focus();
		return false;
	}
	/*else if(fname.value=="" || fname.value==null)
	{
		alert("Please enter first name.");
		fname.focus();
		return false;
	}
	else if(lname.value=="" || lname.value==null)
	{
		alert("Please enter last name.");
		lname.focus();
		return false;
	}
	else if(age.value=="Select")
	{
		alert("Please select your age group.");
		age.focus();
		return false;
	}
	else if(role.value=="Select")
	{
		alert("Please select the role.");
		role.focus();
		return false;
	}
	else if(schoolName.value=="" || schoolName.value==null)
	{
		alert("Please enter the school name.");
		schoolName.focus();
		return false;
	}
	else if(subject.value=="Select")
	{
		alert("Please select the subject.");
		subject.focus();
		return false;
	}
	else if(schoolType.value=="Select")
	{
		alert("Please select the school type.");
		schoolType.focus();
		return false;
	}
	else if(state.value=="Select")
	{
		alert("Please select the state.");
		state.focus();
		return false;
	}*/
	
	if((phone.value!="") || (phone.value!=null))
	{
		if(isNaN(phone.value))
		{
			alert("Please enter only numbers in phone number field.");
			phone.focus();
			return false;
		}
	}			
	/*if(confirm("Are you sure, you want to register?"))
	{
		return true;
	}
	else
	{
		return false;
	}*/
}
//For displaying hint in quiz
function showHint(str,id)
{	
	if (str=="")
  	{
  		document.getElementById("textHint"+id).innerHTML="";
  		return;
  	} 
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
	
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{			
    		document.getElementById("textHint"+id).innerHTML="Hint: "+xmlhttp.responseText;
    	}
  	}
	xmlhttp.open("POST","admin/getHint.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("hint="+str);
	document.getElementById('helpUsed'+id).value='Y';
}

//For adding (top)menus.
function addMenus(bid)
{
			
	if(document.getElementById(bid).style.display == "none") 
	{ 
		document.getElementById(bid).style.display = "block";
		document.getElementById('equipName').style.display="";
		document.getElementById('selectEqmt').style.display="none";
	} 
	else if (document.getElementById(bid).style.display = "block") 
	{ 
		document.getElementById(bid).style.display = "none"; 
	}
	document.getElementById('editRTDiv').style.display= "none"; 	
	return true; 
}

//show/hide menu div
function hideMenuDiv()
{
	document.getElementById('addMenuDiv').style.display = "none";
	document.getElementById('addOtherDiv').style.display = "none";	
}
function showMenuPage()
{
	document.getElementById("addPageTable").style.display = ""
}
function hidePageMenuTable(){
	document.getElementById('addPageTable').style.display = "none";
}
function ShowEditMenu(){
	document.getElementById("editMenuTable").style.display="table"
}
function hideEditMenu(){
	document.getElementById("editMenuTable").style.display="none"
}
function checkEditPage(pageName)
{
	var pageName;
		var tabName=document.getElementById(pageName);
		var specialChar=checkSpecialCharacter(tabName);
		if(!specialChar)
		{
			return false;
		}
		//
		if(tabName.value=="")
		{
			alert("Tab name can not be left blank");
			tabName.focus();
			return(false);
		}	
}
function deletePageConfirm(formName,id,delVal)
{	
	if(delVal==1)
	{
		var answer = confirm ("This will delete the selected Page. Are you sure, you want to proceed?")
		if(answer)
		{
			document.frm1.deletePageId.value=id;
			document.frm1.submit();			
		}
	}	
}

function remoteTriggerValidation() 
{	 	
	var selectEquip=document.getElementById('equipment');
	var equipName=document.getElementById('equipNameTextbox');
	var duration = document.getElementById('rtDuration');
	var eqmntUrl = document.getElementById('equipmentURL');
    var tomatch= /http:\/\/[A-Za-z0-9\.-]{1,}\.[A-Za-z]{2}/
	
	if(document.getElementById('selectEqmt').style.display!="none")
	{
		if(selectEquip.value=="Select" || selectEquip.value==null)
		{
			alert("Please select equipment.");
			selectEquip.focus();
			return false; 
		}
	}
	else
	{
		if(equipName.value=="" || equipName.value==null)
		{
			alert("Please enter equipment name.");
			equipName.focus();
			return false; 
		}
	}
	if(eqmntUrl.value=="" || eqmntUrl.value==null)
	{
		alert("Please enter a valid url.");
		eqmntUrl.focus();
		return false; 
	}
	else if(duration.value=="" || duration.value==null)
	{
		 alert("Please enter the duration.");
		 duration.focus();
		 return false;
	}
	else if(duration.value!="" || duration.value!=null)
	{
		if(isNaN(duration.value))
		{
			alert("Please enter only numbers in this field.");
			duration.value="";
		 	duration.focus();
		 	return false;
		}
	}	
}

function deleteRTConfirm(formName,id)
{
	
	var answer = confirm ("This will delete the selected URL. Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.deleteRT.value=id;
		document.form1.submit();			
	}	
}
function editTriggerValidation() 
{
	 var editUrl = document.getElementById('editEqmtURL');	
	 if(editUrl.value=="" || editUrl.value==null)
	 {
		alert("Please enter a valid url.");
		editUrl.focus();
		return false; 
	 }
}
// Forgot password Validation
function emailVerification(form1)
{
	var email = document.form1.email; 
 	if((email.value=="") || (email.value==null))
	{
		alert("Please enter email id");
		email.focus();
		return false;
	}
}
// Forgot password Validation
function forgotPwdValidation(form1)
{
	var password = document.form1.pwd;
	var confPwd = document.form1.confirmPwd;
	//Password Validation 
 	if((password.value=="") || (password.value==null))
	{
		alert("Please enter a password");
		password.focus();
		return false;
	}	
	else if(password.value.length < 5) 
	{ 
		alert("Password must contain at least five characters!"); 
		password.value="";
		confPwd.value="";
		password.focus();
		return false; 
	}
	else if(confPwd.value=="")
	{
		alert("Please enter confirm password");
		confPwd.focus();
		return false;
	}	
	else if(confPwd.value!=password.value)
	{
		alert("The password you entered do not match!");
		password.value="";
		confPwd.value="";
		password.focus();
		return false;
	}
}

function showFckEditor(boxid){
   	document.getElementById(boxid).style.display = "block";
}

function hideFckEditor(boxid){
  	document.getElementById(boxid).style.display = "none";
}

function validateSectionHead()
{	
	var headtext = document.getElementById('sectionHead');
	
	if((headtext.value=="") || (headtext.value==null))
	{
		alert('Please enter the section head.');
		headtext.value ="";
		headtext.focus();
		return false;
	}	
}

function validateEditHead(editQid)
{	
	document.getElementById("questnId").value=editQid;
	var heading = document.getElementById('headTxt');
	
	if((heading.value=="") || (heading.value==null))
	{
		alert('Please enter the section head.');
		heading.value ="";
		heading.focus();
		return false;
	}	
}
function subDisplayOnOff(formName,subjectId,subjectName,changeDisplayOnOff)
{
	subjectName=subjectName.replace(/abc039;/g,"'").replace(/abcquot;/g,'"')
	if(changeDisplayOnOff=='Y')
	{
		displayOnOff='Off';
		newStatus='N';
	}
	else
	{
		displayOnOff='On';
		newStatus='Y';
	}
	var answer = confirm ("This will turn '"+displayOnOff+"' the display of '"+subjectName+"' .Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.subDisplayOnOff.value=subjectId;
		document.form1.subDisplayOnOffStatus.value=newStatus;
		document.form1.submit();
	}
}
function topicDisplayOnOff(formName,topicId,topicName,changeDisplayOnOff)
{	
	topicName=topicName.replace(/abc039;/g,"'").replace(/abcquot;/g,'"')
	if(changeDisplayOnOff=='Y')
	{
		displayOnOff='Off';
		newStatus='N';
	}
	else
	{
		displayOnOff='On';
		newStatus='Y';
	}
	var answer = confirm ("This will turn '"+displayOnOff+"' the display of '"+topicName+"' .Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.topicDisplayOnOff.value=topicId;
		document.form1.topicDisplayOnOffStatus.value=newStatus;
		document.form1.submit();			
	}
}
function expDisplayOnOff(formName,expId,expName,changeDisplayOnOff)
{	
	expName=expName.replace(/abc039;/g,"'").replace(/abcquot;/g,'"')
	if(changeDisplayOnOff=='Y')
	{
		displayOnOff='Off';
		newStatus='N';
	}
	else
	{
		displayOnOff='On';
		newStatus='Y';
	}
	var answer = confirm ("This will turn '"+displayOnOff+"'  the display of '"+expName+"' .Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.expDisplayOnOff.value=expId;
		document.form1.expDisplayOnOffStatus.value=newStatus;
		document.form1.submit();			
	}
}

//fill in the blanks functions.

function showFillInBlanks(bid)
{ 		
	ansType = document.getElementById('choiceType').value;
	if((document.getElementById('answerVal').value<1))
	{
		addFillInTheBlanks('fillTable');
	}
	
	if(ansType=='fillInBlanks')
	{
		bid = 'addFillInBlanks';		
	}
	
	document.getElementById('addFillInBlanks').style.display = "none";
	document.getElementById('addImage').style.display = "none";
	document.getElementById('addDiv').style.display = "none";	
	document.getElementById('addSectonHead').style.display = "none";
	
	if(document.getElementById(bid).style.display == "none") 
	{ 
		document.getElementById(bid).style.display = "block"; 
	} 
	else if (document.getElementById(bid).style.display = "block") 
	{ 
		document.getElementById(bid).style.display = "none"; 
	}	
	return true; 	
}
//function for deleting choice.
function deleteFillInTheBlanks(obj,answerVal) 
{
	var delRow = obj.parentNode.parentNode;
	var tbl = delRow.parentNode.parentNode;
	var rIndex = delRow.sectionRowIndex;
	delRow.parentNode.deleteRow(rIndex);
	var IdAssign = document.getElementById('idAssigned').value;
	var idArray = new Array();
	idArray	= IdAssign.split(",");
	for(i in idArray)
	{
		if(idArray[i].indexOf(answerVal)>-1)
		{
			idArray.splice(i, 1);
		}
	}
	var idString = idArray.toString();
	document.getElementById('idAssigned').value=idString;	
}	
function addFillInTheBlanks(tableID)
{	
	var mytableId = document.getElementById(tableID);
	var rowCount = mytableId.rows.length;
	var row = mytableId.insertRow(rowCount);
	var answerVal = document.getElementById('answerVal').value;
	answerVal++;
	var assignId = document.getElementById('idAssigned').value;
	document.getElementById('answerVal').value=answerVal;
	if(assignId=="")
	{
		document.getElementById('idAssigned').value = answerVal;
	}
	else
	{
		document.getElementById('idAssigned').value = assignId+","+answerVal;
	}
	
	var cell3 = row.insertCell(0);
	cell3.setAttribute("class","text");
	var element2 = document.createElement("textarea");
	element2.cols = "50";
	element2.name = "objective"+answerVal;
	element2.id = "objective"+answerVal;
	element2.value = "answer"+answerVal;
	element2.onclick = function (){ if(element2.value=="answer"+answerVal)
	{ element2.value=""; }}
	element2.onmouseout = function(){ 
	if(element2.value=="" || element2.value=="answer"+answerVal)
	{ element2.value="answer"+answerVal;}}
	cell3.appendChild(element2);
		
	var cell4 = row.insertCell(1);
	cell4.align = 'center';
	var deleteBtn = document.createElement("input");
	deleteBtn.type = "image";
	deleteBtn.src = "images/delete.png";
	deleteBtn.setAttribute("width","20px");
	deleteBtn.setAttribute("height","20px");
	deleteBtn.setAttribute("title","delete answer");
	deleteBtn.onclick = function () { deleteFillInTheBlanks(this,answerVal) } ;
	cell4.appendChild(deleteBtn);	
}

//validate adding fill in the blanks type.
function validateFillInTheBlanks(formname)
{	
	//var temp='form1['correctAns']';
	var qntext = document.getElementById('fillQuestion');	
	var incVal = document.getElementById('answerVal').value;	
	var assign = document.getElementById('idAssigned').value;
	var assignArr	= assign.split(",");	
	
	if(qntext.value==" " || qntext.value=="Question text. Use three underscores (___) to mention the blank part." || qntext.value=="")
	{
		alert('Please enter the question');
		qntext.value ="";
		qntext.focus();
		return false;
	}
	if(assignArr.length >= 1)
	{		
		var j;
		for (var i = 0; i <= incVal; i++)
		{
			j=i+1;
			if(document.getElementById("objective"+j))
			{
				if (document.getElementById("objective"+j).value ==" " || document.getElementById("objective"+j).value == "answer"+j || document.getElementById("objective"+j).value=="")
				{		   
					alert("Please enter all answers");
					document.getElementById("objective"+j).value="";
					document.getElementById("objective"+j).focus();
					return false;
				}	
			}
		}
	
	}
	else
	{
		alert('Atleast one choice needed');
		return false;
	}
	return true;
}

//edit text choice validation
function validateUpdateFillInTheBlanks(editQid)
{
	document.getElementById("questnId").value=editQid;		
	var question = document.getElementById('editQuestionTxt');
	var incVal = document.getElementById('objectiveVal').value;	
	var assign = document.getElementById('idFillBlanks').value;
	var assignArr	= assign.split(",");
	
	if(question.value=="" || question.value==" " || question.value=="Question text")
	{
		alert('Please enter the question');
		question.focus();		
		return false;
	}
	
	var chks = document.getElementsByName('answer[]');
	for (var i = 0; i < chks.length; i++)
	{        
		if (chks[i].value=="" || chks[i].value==null || chks[i].value==" ")
		{
			alert("Please fill all the answers");
			chks[i].focus();
			return false;            
		}
	}
	if(assignArr[0]!="")
	{			
		var j;
		for (var i = 0; i <= incVal; i++)
		{
			j=i+1;
			if(document.getElementById("answer"+j))
			{
				if (document.getElementById("answer"+j).value ==" " || document.getElementById("answer"+j).value == "answer"+j || document.getElementById("answer"+j).value=="")
				{		   
					alert("Please fill all the answers");
					document.getElementById("answer"+j).value="";
					document.getElementById("answer"+j).focus();
					return false;
				}	
			}
		}
	}
	else
	{
		if((assignArr[0]=="") && (chks.length==0))
		{
			alert('Atleast one answer is needed');
			return false;
		}
	}
	return true;
}

function editFillInTheBlanks(tableID)
{	
	var mytableId = document.getElementById(tableID);		
	var rowCount = mytableId.rows.length;	
	var row = mytableId.insertRow(rowCount);	
	var objVal = document.getElementById('objectiveVal').value;
	objVal++;
	var newEntry = document.getElementById('idFillBlanks').value;
	document.getElementById('objectiveVal').value=objVal;
	if(newEntry=="")
	{
		document.getElementById('idFillBlanks').value = objVal;
	}
	else
	{
		document.getElementById('idFillBlanks').value = newEntry+","+objVal;
	}
	
	var cell3 = row.insertCell(0);
	cell3.setAttribute("class","text");
	var element2 = document.createElement("textarea");
	element2.cols = "50";
	element2.name = "answer"+objVal;
	element2.id = "answer"+objVal;
	element2.value = "answer"+objVal;
	element2.onclick = function (){ if(element2.value=="answer"+objVal)
	{ element2.value=""; }}
	element2.onmouseout = function(){ 
	if(element2.value=="" || element2.value=="answer"+objVal)
	{ element2.value="answer"+objVal;}}
	cell3.appendChild(element2);
		
	var cell4 = row.insertCell(1);
	cell4.align = 'center';
	var deleteBtn = document.createElement("input");
	deleteBtn.type = "image";
	deleteBtn.src = "images/delete.png";
	deleteBtn.setAttribute("width","20px");
	deleteBtn.setAttribute("height","20px");
	deleteBtn.setAttribute("title","delete answer");
	deleteBtn.onclick = function () { deleteEditQuiz(this,objVal,'') } ;
	cell4.appendChild(deleteBtn);	
}
//function for deleting answers during editing.
function deleteEditQuiz(obj,objVal,exist) 
{
	if(exist) //if existing answers deleted
	{
		var delRow = obj.parentNode.parentNode;
		var tbl = delRow.parentNode.parentNode;
		var rIndex = delRow.sectionRowIndex;
		delRow.parentNode.deleteRow(rIndex);
		
		var deletedIds = document.getElementById('deletedId').value;
		if(deletedIds=="")
		{
			document.getElementById('deletedId').value = exist;
		}
		else
		{
			document.getElementById('deletedId').value = deletedIds+','+exist;
		}
	}
	else
	{	
		var delRow = obj.parentNode.parentNode;
		var tbl = delRow.parentNode.parentNode;
		var rIndex = delRow.sectionRowIndex;
		delRow.parentNode.deleteRow(rIndex);
		
		var IdAssigned = document.getElementById('idFillBlanks').value;
		var newIdArray = new Array();
		newIdArray	= IdAssigned.split(",");
		for(i in newIdArray)
		{
			if(newIdArray[i].indexOf(objVal)>-1)
			{
				newIdArray.splice(i, 1);
			}
		}
		var newIdString = newIdArray.toString();
		document.getElementById('idFillBlanks').value=newIdString;
	}
}	
//function using in fill in the blanks (<tr mouseover>)
function fillMouseOver(obj,id)
{
	document.getElementById('quizDiv'+id).style.display = 'block';	
}
//function using in fill in the blanks (<tr mouseout>)
function fillMouseOut(obj,id)
{
	document.getElementById('quizDiv'+id).style.display = 'none';
}
function addAdvHtmlShowDiv() 
{		
	document.getElementById('addAdvHtml').style.display = "block";
	document.getElementById('addNorHtml').style.display = "none";
	document.getElementById('addExpAdvOption').value = "advanced";
}
function addNorHtmlShowDiv() 
{		
	document.getElementById('addNorHtml').style.display = "block";
	document.getElementById('addAdvHtml').style.display = "none";
	document.getElementById('addExpAdvOption').value = "normal";
}
function editAdvHtmlShowDiv() 
{		
	document.getElementById('editAdvHtml').style.display = "block";
	document.getElementById('editNorHtml').style.display = "none";
	document.getElementById('editExpAdvOption').value = "advanced";
}
function editNorHtmlShowDiv() 
{		
	document.getElementById('editNorHtml').style.display = "block";
	document.getElementById('editAdvHtml').style.display = "none";
	document.getElementById('editExpAdvOption').value = "normal";
}

//For adding worksheet.
function addWorksheet(bid)
{ 		
	if(document.getElementById(bid).style.display == "none") 
	{ 
		document.getElementById(bid).style.display = "block"; 
	} 
	else if (document.getElementById(bid).style.display = "block")
	{ 
		document.getElementById(bid).style.display = "none"; 
	}	
	return true; 	
}

//show/hide worksheet div
function hideWorksheet()
{
	document.getElementById('worksheetDiv').style.display = "none";
}

//For adding worksheet.
function validateAddWorksheet()
{ 		
	var colCount = document.getElementById('columnCnt');
	var wsname = document.getElementById('worksheetName');
	if((wsname.value=="") || (wsname.value==null))
	{
		alert('Enter Worksheet Name');
		wsname.focus();
		return false;
	}
	else if((colCount.value=="") || (colCount.value==null))
	{
		alert('Enter Number of columns');
		colCount.focus();
		return false;
	}
	else if(isNaN(colCount.value))
	{
		alert('This field accepts numbers only.');
		colCount.value="";
		colCount.focus();
		return false;
	}
	else if(colCount.value<2)
	{
		alert('Enter atleast 2 columns');
		colCount.value="";
		colCount.focus();
		return false;
	}
}

//delete worksheet
function deleteWorksheet(formName,id)
{	
	var answer = confirm ("This will delete the selected Worksheet. Are you sure, you want to proceed?")
	if(answer)
	{
		document.form1.worksheetID.value=id;
		document.form1.submit();			
	}
}

function worksheetMgmt(bid)
{ 		
	document.getElementById('editHeading').style.display = "none";
	//document.getElementById('editEqn').style.display = "none";
	document.getElementById('editCustomHead').style.display = "none";
	document.getElementById('editColInChart').style.display = "none";
	document.getElementById('addNewColumn').style.display = "none";
	//document.getElementById('editDataType').style.display = "none";	
		
	if(document.getElementById(bid).style.display == "none") 
	{ 
		document.getElementById(bid).style.display = "block"; 
	} 
	else if (document.getElementById(bid).style.display = "block")
	{ 
		document.getElementById(bid).style.display = "none"; 
	}	
	return true; 	
}
//show/hide worksheet div
function hideUpdate(divId)
{
	if(document.getElementById(divId).style.display == "block")
	{
		document.getElementById(divId).style.display = "none";
	}
}
//validate add new column
function validateAddColumn()
{
	var headingTxt = document.getElementById('colHeading');
	
	if((headingTxt.value == "") || (headingTxt.value == null))
	{
		alert("Enter Heading Text");
		headingTxt.focus();
		return false;
	}
	return true;
}
//Advanced option in edit experiment link page
function advOptDivShow()
{
	var divStyle=document.getElementById('widthHeight');
	if(divStyle.style.display=="none")
	{
		divStyle.style.display="block";
	}
	else if(divStyle.style.display="block")
	{
		divStyle.style.display="none";	
	}
}
//Checking of maximum width in edit experiment link page
function checkWidthHeightVal()
{
	var widthVal=document.getElementById('iframeWidth').value;
	var heightVal=document.getElementById('iframeHeight').value;
	if(widthVal>1300)
	{
		alert('Sorry! Maximum allowed page width is 1300px');
		document.getElementById('iframeWidth').value=1300;
	}
	if(heightVal>6000)
	{
		alert('Sorry! Maximum allowed page height is 6000px');
		document.getElementById('iframeHeight').value=6000;
	}
}
function chartDisplay(divid)
{
	document.getElementById('chart1').style.display = "none"; 
	document.getElementById('chart2').style.display = "none"; 
	
	if(document.getElementById(divid).style.display == "none") 
	{ 
		document.getElementById(divid).style.display = "block"; 
	} 
	else if (document.getElementById(divid).style.display = "block")
	{ 
		document.getElementById(divid).style.display = "none"; 
	}	
	return true; 

}
//Advanced option in edit experiment link page
function advOptDivShow()
{
	var divStyle=document.getElementById('widthHeight');
	if(divStyle.style.display=="none")
	{
		divStyle.style.display="block";
	}
	else if(divStyle.style.display="block")
	{
		divStyle.style.display="none";	
	}
}
//Checking of maximum width in edit experiment link page
function checkWidthHeightVal()
{
	var widthVal=document.getElementById('iframeWidth').value;
	var heightVal=document.getElementById('iframeHeight').value;
	if(widthVal>1300)
	{
		alert('Sorry! Maximum allowed page width is 1300px');
		document.getElementById('iframeWidth').value=1300;
	}
	if(heightVal>6000)
	{
		alert('Sorry! Maximum allowed page height is 6000px');
		document.getElementById('iframeHeight').value=6000;
	}
}
//Checking of the value is number in edit experiment advanced option
function checkValIsNum(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field accepts numbers only."
        return false
    }
    status = ""
    return true
}
/* validate add/edit chart1 */
function validateAddChart1()
{
	if(checkRadio("form1","chart1axis1"))
	{
		if (!checkRadio("form1","chart1axis2"))
		{
			alert("Please select Y-axis1");
			return false;
		}
	}
	
	if(checkRadio("form1","chart1axis2") || (checkRadio("form1","chart1axis3")))
	{ 
		if (!checkRadio("form1","chart1axis1"))
		{
			alert("Please select X-axis");
			return false;
		}
	}
	if(checkRadio("form1","chart1axis3"))
	{
		if ( (!checkRadio("form1","chart1axis1")) && (!checkRadio("form1","chart1axis1")) )
		{
			alert("Please select X-axis and Y-axis1");
			return false;
		}
		
	}	
}
/* validate add/edit chart2 */
function validateAddChart2()
{
	if(checkRadio("form1","chart2axis1"))
	{
		if (!checkRadio("form1","chart2axis2"))
		{
			alert("Please select Y-axis1");
			return false;
		}
	}
	
	if(checkRadio("form1","chart2axis2") || (checkRadio("form1","chart2axis3")))
	{
		if (!checkRadio("form1","chart2axis1"))
		{
			alert("Please select X-axis");
			return false;
		}
	}
	if(checkRadio("form1","chart2axis3"))
	{
		if ( (!checkRadio("form1","chart2axis1")) && (!checkRadio("form1","chart2axis1")) )
		{
			alert("Please select X-axis and Y-axis1");
			return false;
		}
		
	}	
}
/* Reset Radio buttons */
function resetRadioButtonChart1()
{
	var radio1 = document['form1'].elements['chart1axis1'];
	for (var i=0; i <radio1.length; i++) 
	{
		if (radio1[i].checked) 
		{
			radio1[i].checked = false;
		}
	}
	var radio2 = document['form1'].elements['chart1axis2'];
	for (var j=0; j <radio2.length; j++) 
	{
		if (radio2[j].checked) 
		{
			radio2[j].checked = false;
		}
	}
	var radio3 = document['form1'].elements['chart1axis3'];
	for (var k=0; k <radio3.length; k++) 
	{
		if (radio3[k].checked) 
		{
			radio3[k].checked = false;
		}
	}
}
function resetRadioButtonChart2()
{
	var radio1 = document['form1'].elements['chart2axis1'];
	for (var i=0; i <radio1.length; i++) 
	{
		if (radio1[i].checked) 
		{
			radio1[i].checked = false;
		}
	}
	var radio2 = document['form1'].elements['chart2axis2'];
	for (var j=0; j <radio2.length; j++) 
	{
		if (radio2[j].checked) 
		{
			radio2[j].checked = false;
		}
	}
	var radio3 = document['form1'].elements['chart2axis3'];
	for (var k=0; k <radio3.length; k++) 
	{
		if (radio3[k].checked) 
		{
			radio3[k].checked = false;
		}
	}
}

// Function for div hide and unhide in remote trigger report
function displayUserDetailsScheduled(divId,type)
{
	if(type=='used')
	{
		document.getElementById('active').style.display = "none";
		document.getElementById('scheduledToday').style.display = "none";
		document.getElementById('scheduled7Days').style.display = "none";	
	}
	else if (type=='unUsed')
	{
		document.getElementById('unUsedToday').style.display = "none";
		document.getElementById('last7Days').style.display = "none";
		document.getElementById('last30Days').style.display = "none";
	}
	document.getElementById(divId).style.display = "block";	
}

// Function for enable/disable share equipment in remote trigger
function disableShareEquip()
{
	equipType=document.getElementById('equipment').value;
	if(equipType=='New')
	{
		document.getElementById('equipName').style.display='table-row';
	}
}
// Function for knowing the equipment is shared or not.
function ShowTxtOnChked(chk,rowid,nameTxt)
{
	if(document.getElementById(chk).checked) 
	{ 
		document.getElementById(rowid).style.display='';
		document.getElementById(nameTxt).style.display='none';
		document.getElementById('equipment').style.display='block';
	}
	else
	{
		document.getElementById(rowid).style.display='none';
		document.getElementById(nameTxt).style.display='';
	}
}
//functions used in user profile page
function dispAddInstuctor()
{
	document.getElementById("addInstContainer").style.display= "inline";  
	document.getElementById("message").innerHTML="";
}
function hideAddInstructor()
{
	
	document.getElementById("addInstContainer").style.display= "none"; 
	document.getElementById("message").innerHTML=""; 
}
function remove()
{
  document.getElementById("instructorEmailId").value="";
}
function checkAddInstructor(i){
	if(i=" ")
	{
		alert("Please enter a Email id");
	}
}
function instructorDelete(instId)
{
	var deleteInstructor=confirm("This will delete the selected instructor. Are you sure, you want to proceed?")
	if(deleteInstructor)
	{
		document.getElementById("deleteInstructor").value=instId;
		document.form1.submit();
	}
	else
	{
		document.getElementById("deleteInstructor").value=" ";	
	}
}
function checkAddInstEmptyTextBox(){
	var user_name = document.form1.instructorUserName;
	if((user_name.value=="") || (user_name.value==null)){
		alert("Please fill the User Name");
		user_name.focus();
		return false;
	}
}

//functions for version difference
function displayRevisions()
{
	if(document.getElementById('compareDiv').style.display=='none')
	{
		document.getElementById('compareDiv').style.display = 'block';
		document.getElementById('arrowDiv').style.display = 'block';
	}
	document.getElementById('compVersionId').disabled=false;
	document.getElementById('compareVersions').style.display='block';
	document.getElementById('compare').style.display='none';
}

//functions used in manage student page
function checkAddStudEmptyTextBox(){
	var user_name = document.form1.studUserName;
	if((user_name.value=="") || (user_name.value==null)){
		alert("Please fill the User Name");
		user_name.focus();
		return false;
	}

}
function dispAddStudentTable()
{
	document.getElementById("addStudentTable").style.display="block";
	document.getElementById("editStudentTable").style.display="none";
	document.getElementById("titlehead").innerHTML="Add Student";
	document.getElementById("studUserName").value="";
	document.getElementById("message").innerHTML="";
}

function cancelAddStudTable()
{
	document.getElementById("addStudentTable").style.display= "none"; 
	document.getElementById("titlehead").innerHTML="";
	document.getElementById("message").innerHTML="";
}
function editStudentGroup(i,j,k,gId)
{
	var groupArr=new Array();
	$("#groupNameList").multiselect("uncheckAll");
	groupArr=j.split(",");
	for(var a=0;a<groupArr.length;a++){
		
		$("#groupNameList").multiselect("widget").find(":checkbox[value="+groupArr[a]+"]").each(function() 
		{
			this.click();
		}); 
	}
	document.getElementById("currentGroupId").value=gId;
	document.getElementById("studentId").value=k;
	document.getElementById("editStudentTable").style.display="block";
	document.getElementById("addStudentTable").style.display="none";
	document.getElementById("edithead").innerHTML="Edit Group";
	document.getElementById("editUserName").value=i;
	document.getElementById("editUserName").disabled=true;
	document.getElementById("groupNamehid").value=groupArr;
	document.getElementById("message").innerHTML="";

}
function cancelEditStudTable()
{
	document.getElementById("editStudentTable").style.display= "none"; 
	document.getElementById("edithead").innerHTML="";
	document.getElementById("message").innerHTML="";
}
// functions used in admin home page
function acceptRequestbtn(accptInstId,acceptInviId)
{

	document.getElementById("acceptInstructorId").value=accptInstId;
	document.getElementById("acceptInvitationId").value=acceptInviId;
	document.form1.submit();
}
function ignoreRequestbtn(ignoreInstId)
{
	document.getElementById("ignoreInstInviId").value=ignoreInstId;
	document.form1.submit();
	
}
function acceptStudentRequestbtn(accptStdId,acceptInviId)
{
	document.getElementById("acceptStudentId").value=accptStdId;
	document.getElementById("acceptStudentInviId").value=acceptInviId;
	document.form1.submit();
}
function ignoreStudentRequestbtn(ignrStdId)
{
	document.getElementById("ignoreStudnetInviId").value=ignrStdId;
	document.form1.submit();
}
// functions used in ManageGroup.php
function checkAddGroupEmptyTextBox(refreshChk){
	document.getElementById("refreshCheck").value=refreshChk;
	var user_name = document.form1.groupName;
	if((user_name.value=="") || (user_name.value==null)){
		alert("Please fill the Group Name");
		user_name.focus();
		return false;
	}
	
}
function checkeditGroupEmptyTextBox(){
	var user_name = document.form1.editGroupName;
	if((user_name.value=="") || (user_name.value==null)){
		alert("Please fill the Group Name");
		user_name.focus();
		return false;
	}
}
function dispAddGroup()
{
	document.getElementById("addGroupTable").style.display= "block"; 
	document.getElementById("editGroupTable").style.display= "none"; 
	document.getElementById("AddTitleHead").innerHTML="Add Group";
	document.getElementById("message").innerHTML="";
}
function cancelAddGroup()
{
	document.getElementById("addGroupTable").style.display= "none"; 
	document.getElementById("AddTitleHead").innerHTML="";
}
function groupEdit(i,j,k)
{
	document.getElementById("editGroupId").value=j;
	document.getElementById("editGroupTable").style.display= "block";
	document.getElementById("addGroupTable").style.display= "none"; 
	document.getElementById("editTitlehead").innerHTML="Edit";
	document.getElementById("editGroupName").value=decodeURIComponent(i).replace(/\+/g, ' ');
	document.getElementById("editGroupDesc").value=decodeURIComponent(k).replace(/\+/g, ' ');
	document.getElementById("message").innerHTML="";
	
}
function cancelEditGroup()
{
	document.getElementById("editGroupTable").style.display= "none"; 
	document.getElementById("editTitlehead").innerHTML="";
}
function groupDelete(gId)
{
	document.getElementById("message").innerHTML="";
	var deletegroup=confirm("This will delete the selected group. Are you sure, you want to proceed?")
	if(deletegroup)
	{
		document.getElementById("deleteGroup").value=gId;
		document.form1.submit();
	}
	
}
//functions used in lmsManageQuestionPapers.php page
function dispAddQustPapr()
{
	document.getElementById("addQuesPaperTable").style.display="block";
	document.getElementById("editQuesPaperTable").style.display= "none";
	document.getElementById("AddTitleHead").innerHTML="Add Question Paper";
	
}
function checkAddQuestionPaperTextBox(){
	var questPaprName = document.form1.questionPaperName;
	if((questPaprName.value=="") || (questPaprName.value==null)){
		alert("Please fill the Question Paper Name");
		questPaprName.focus();
		return false;
	}
}
function cancelAddQustPapr()
{
	document.getElementById("addQuesPaperTable").style.display="none";	
}
function QpEdit(name,id,desc)
{
	document.getElementById("editQuesPaperTable").style.display= "block";
	document.getElementById("addQuesPaperTable").style.display="none";
	document.getElementById("editTitlehead").innerHTML="Edit";
	document.getElementById("editQusPaperName").value=decodeURIComponent(name).replace(/\+/g, ' ');
	document.getElementById("editQusPaperId").value=id;
	document.getElementById("editQusPaperDesc").value=decodeURIComponent(desc).replace(/\+/g, ' ');
	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
}
function cancelEditQuespaper()
{
	document.getElementById("editQuesPaperTable").style.display= "none"; 
	document.getElementById("editTitlehead").innerHTML="";
}
function deleteQuestionPapr(i)
{
	document.getElementById("deleteQusPaperId").value=i;
	document.form1.submit();
		
}
function checkEditQpEmptyTextBox()
{

	var user_name = document.getElementById("editQusPaperName").value;
	if((user_name=="") || (user_name==null)){
		alert("Please fill the Question Paper name");
		document.getElementById("editQusPaperName").focus();
		return false;
	}
}
//function used in lms assiggn question paper

function dispAssignAssignment()
{
	document.getElementById("assignmentAssign").style.display= "block";
	document.getElementById("editTitlehead").innerHTML="Add Assignment";
	document.getElementById("message").innerHTML="";
	
}
function pulish(assignmentId)
{
document.getElementById("pulishAssignment").value=	assignmentId;

}

//functions used in lmsManageQuestionPapers.php page
function dispAddQustPapr()
{
	document.getElementById("addQuesPaperTable").style.display="block";
	document.getElementById("editQuesPaperTable").style.display= "none";
	document.getElementById("AddTitleHead").innerHTML="Add Question Paper";
	
}
function checkAddQuestionPaperTextBox(){
	var questPaprName = document.form1.questionPaperName;
	if((questPaprName.value=="") || (questPaprName.value==null)){
		alert("Please fill the Question Paper Name");
		questPaprName.focus();
		return false;
	}
}
function cancelAddQustPapr()
{
	document.getElementById("addQuesPaperTable").style.display="none";	
}
function cancelEditQuespaper()
{
	document.getElementById("editQuesPaperTable").style.display= "none"; 
	document.getElementById("editTitlehead").innerHTML="";
}
function deleteQuestionPapr(i)
{
	document.getElementById("deleteQusPaperId").value=i;
	document.form1.submit();
		
}
//functions used in assign question paper.php
function groupComboSubmit(combo_name)
{
	document.getElementById("combo1").value=combo_name;
	
}
function placeAssignmentName()
{
	var e = document.getElementById("qpId");
	var strUser = e.options[e.selectedIndex].text;
	document.getElementById("selAssignmentName").value=strUser;
}
function checkAssignAssignmentTextBox(){

	var questionPaperName = document.getElementById("qpId").value;
	var assignmentName = document.getElementById("selAssignmentName").value;
	var groupName = document.getElementById("groupId").value; 
	var startTime = document.getElementById("assignmentStartTime").value;
	startTime=new Date(startTime);
	var endTime = document.getElementById("assignmentEndTime").value;
	endTime=new Date(endTime);// converted to ti
	if((questionPaperName=="") || (questionPaperName==null)){
		alert("Please select Question Paper Name");
		document.getElementById("qpId").focus();
		return false;
	}
	if((assignmentName=="") || (assignmentName==null)){
		alert("Assignment Name should not be null");
		document.getElementById("selAssignmentName").focus();
		return false;
	}	
	if((groupName=="") || (groupName==null)){
		alert("Please select Group Name");
		document.getElementById("selAssignmentName").focus();
		return false;
	}
		if((startTime=="") || (startTime==null)){
		alert("Please select start Time");
		document.getElementById("assignmentStartTime").focus();
		return false;
	}
		if((endTime=="") || (endTime==null)){
		alert("Please select End Time");
		return false;
	}
	if(startTime >= endTime){
		alert("End date should  be greater than  start date");
		return false;
	}
}
function cancelAssignQuespaper()
{
	document.getElementById("assignmentAssign").style.display= "none"; 
	document.getElementById("editTitlehead").innerHTML="";
	document.getElementById("groupName").value="";
	document.getElementById("assignmentName").value="";
	document.getElementById("assignmentStartTime").value="";
	document.getElementById("assignmentEndTime").value="";
	
}
//functions used in lmsQuestionPool.php
function dispToNewAddQustPapr()
{
	document.getElementById("addQuesPaperTable").style.display="block";
	document.getElementById("addExistingQPTable").style.display= "none";
	document.getElementById("AddTitleHead").innerHTML="Add Question Paper";
	
}
function dispExisQp()
{
	document.getElementById("addExistingQPTable").style.display="block";
	document.getElementById("addQuesPaperTable").style.display= "none";
	document.getElementById("AddExistingHead").innerHTML="Add To Existing Question Paper";
}
function cancelExisQPTable()
{
	document.getElementById("addExistingQPTable").style.display= "none";
}
// Function for deleting assignment last attempt
function deleteAssignmentAttempt(i)
{
	var del = confirm("Are you sure you want to delete the last attempted assignment?")
	if(del)
	{
		document.getElementById("deleteAttemptId").value=i;
		document.form1.submit();
	}
}
// Function for deleting assignment
function deleteAssignmentAllAttempts(i,j)
{
	
	var delAttempts = confirm("Are you sure you want to delete the assignment details?")
	if(delAttempts)
	{
		document.getElementById("deleteAssignment").value=i;
		document.getElementById("deleteAssignmentUser").value=j;
		document.form1.submit();
	}
}
//Image pop up for 
function imagePopUpFck(number)
{		
	window.open ("../../../../admin/crop_image.php?num="+number+"&fck=1","childWindow",
	"width=650,height=500,scrollbars=1,resizable=no,toolbar=no,location=no,directories=no,status=no,top=150,left=130,menu bar=no,copyhistory=no");
}

function assignQnId(qnId)
{ 
	document.getElementById('editQid').value = qnId;	
	document.form1.submit();	
}
function hideEditQuizDiv()
{ 
	document.getElementById('quizTabDiv').style.display = 'none';
	
}
function popUpImg(num)
{
	var srcValue = document.getElementById('quizSrc').value;
	if(srcValue=='plugin')
	{
		imagePopUpFck(num);
	}
	else
	{
		imagePopUp(num);
	}
}
//function calling on edit role
function roleEdit(userId,userName,emailId,roleId,subRoleArray,userSubject)
{	
	window.location.hash = "";
	window.location.hash = '#2'; //location redirect to edit part
	document.getElementById("editRoleTable").style.display= "block";
	document.getElementById("userEditId").value=userId;
	document.getElementById("editUserName").value=decodeURIComponent(userName).replace(/\+/g, ' ');
	document.getElementById("editEmailId").value=decodeURIComponent(emailId).replace(/\+/g, ' ');
	document.getElementById("messageSave").innerHTML="";
	var userRole = document.getElementById("userRole");	
	for(var i, j = 0; i = userRole.options[j]; j++) 
	{
        if(i.value == roleId) 
		{
            userRole.selectedIndex = j;
            break;
		}
    }
	
	var roleArray = JSON.parse(subRoleArray);
	var arraySearchRes=arraySearch(roleArray,userRole.value);		
	var boxes = document.getElementsByName('subjectChecked[]');
	if(arraySearchRes==true)
	{
		document.getElementById("subject1").style.display= "block";
		document.getElementById("subject2").style.display= "block";		
	}
	else
	{
		document.getElementById("subject1").style.display= "none";
		document.getElementById("subject2").style.display= "none";
	}
	for (var i = 0; i < boxes.length; i++) 
	{
		boxes[i].checked = false;		 
	}
	var userArray = JSON.parse(userSubject);
	for (var i = 0; i < boxes.length; i++) 
	{	      
	  	if (arraySearch(userArray,boxes[i].value)==true ) 
	  	{		  
			boxes[i].checked = true;
		}
	}
	
}
//function for checking array(passed value exist in array or not, if exist, function return true)
function arraySearch(arr, obj) 
{
    for(var i=0; i<arr.length; i++) 
	{
        if (arr[i] == obj)
		{
			return true;
		} 
    }
}
//function calling on onchange of role in edit role
function selectSubject(subRoleArray)
{	
	var selectedRole = document.getElementById("userRole").value;	
	var roleArray = JSON.parse(subRoleArray);	
	var arraySearchRes=arraySearch(roleArray,selectedRole);	
	if(arraySearchRes==true)
	{
		document.getElementById("subject1").style.display= "block";
		document.getElementById("subject2").style.display= "block";
	}
	else
	{
		document.getElementById("subject1").style.display= "none";
		document.getElementById("subject2").style.display= "none";
	}
}
function cancelEditRole()
{
	window.location.hash = "";
	document.getElementById("userEditId").value="";
	document.getElementById("editUserName").value="";
	document.getElementById("editEmailId").value="";
	document.getElementById("editRoleTable").style.display= "none"; 	
}
//newly added function used in edit experiment page
function showEditTabTable()
{
	document.getElementById("editTabTable").style.display="table";
	document.getElementById("addNewTabName").style.display="none";
	
}
function closeEditTab(){
	document.getElementById("editTabTable").style.display="none";
}
function langUrlProvider(url,newlang,defaultLang)
{
	var param='lan';
	var val =/(\?|\&)lan=.*?(?=(&|$))/;
	qstring = /\?.*.+$/;
	if (newlang!==defaultLang)
	{
		if (val.test(url))
		{
			// whene url has value &/? lan= aaa
		   window.location.href = url.replace(val, '$1' + param + '=' + newlang);
		}
		else if (qstring.test(url))
		{
			//when url dosent have lan parameter and have some other parameter
			window.location.href = url + '&' + param + '=' + newlang;
		}
		else
		{
			//when current url dosent even have any paramets in url
			window.location.href = url + '?' + param + '=' + newlang;
		}
	}
	else
	{
		
		window.location.href = url.replace(/(&|\?)(lan)(=)([a-z]{2})(-)([A-Z]{2})/,"");
	}

}
//
function showUniversityUserCnt()
{
	document.getElementById("showDetails").style.display = "none";
	document.getElementById("showGraph").style.display = "block";
	document.getElementById("universityUserTab").style.display = "block";
	document.getElementById("adminGraph").style.display = "none";
}
function showGraphData()
{
	document.getElementById("showGraph").style.display = "none";
	document.getElementById("showDetails").style.display = "block";
	document.getElementById("adminGraph").style.display = "block";
	document.getElementById("universityUserTab").style.display = "none";	
}

function showLanguage()
{
	var dis =document.getElementById("langPopup").style.display;
	if(dis=='none')
	{
		document.getElementById("langPopup").style.display="block";
	}
	else
	{
		document.getElementById("langPopup").style.display="none";	
	}
	
}

