var num=160;
function Q_upload()
{
	var xhr=new XMLHttpRequest();
	if(document.getElementById('type').value==1)
	{
		xhr.open('GET',"../php/upload.php?question="+document.getElementById('question').value+"&type="+document.getElementById('type').value+"&subject="+document.getElementById('subject').value+"&topic="+document.getElementById('topic').value+"&source="+document.getElementById('source').value+"&year="+document.getElementById('year').value+"&choice1="+document.getElementById('choice1').value+"&correct1="+document.getElementById('correct1').checked+"&choice2="+document.getElementById('choice2').value+"&correct2="+document.getElementById('correct2').checked+"&choice3="+document.getElementById('choice3').value+"&correct3="+document.getElementById('correct3').checked+"&choice4="+document.getElementById('choice4').value+"&correct4="+document.getElementById('correct4').checked+"",true);
	}
	if(document.getElementById('type').value==2)
	{
		xhr.open('GET',"../php/upload.php?question="+document.getElementById('question').value+"&type="+document.getElementById('type').value+"&subject="+document.getElementById('subject').value+"&topic="+document.getElementById('topic').value+"&source="+document.getElementById('source').value+"&year="+document.getElementById('year').value+"&start="+document.getElementById('start').value+"&end="+document.getElementById('end').value+"",true);
	}
	if(document.getElementById('type').value==3)
	{
		xhr.open('GET',"../php/upload.php?question="+document.getElementById('question').value+"&type="+document.getElementById('type').value+"&subject="+document.getElementById('subject').value+"&topic="+document.getElementById('topic').value+"&source="+document.getElementById('source').value+"&year="+document.getElementById('year').value+"&choice1="+document.getElementById('choice1').value+"&correct1="+document.getElementById('correct1').checked+"&choice2="+document.getElementById('choice2').value+"&correct2="+document.getElementById('correct2').checked+"&choice3="+document.getElementById('choice3').value+"&correct3="+document.getElementById('correct3').checked+"&choice4="+document.getElementById('choice4').value+"&correct4="+document.getElementById('correct4').checked+"",true);
	}
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState==4&&xhr.status==200)
		{
			if(xhr.responseText==0)
			{
				alert('Server Error!');
			}
			else
			{
				alert('Data Uploaded Successfully');
				//alert(xhr.responseText);
			}
		}
	};
	xhr.send();
}

function option()
{
	var type=document.getElementById('type').value;
	if(type==1)
	{
		document.getElementById('choice').innerHTML="Choice:<br/><input id='choice1' type='text'/><input id='correct1' name='correct' type='radio'/><br/><input id='choice2' type='text'/><input id='correct2' name='correct' type='radio'/><br/><input id='choice3' type='text'/><input id='correct3' name='correct' type='radio'/><br/><input id='choice4' type='text'/><input id='correct4' name='correct' type='radio'/><br/>";
	}
	if(type==2)
	{
		document.getElementById('choice').innerHTML="Range:<br/><input id='start' type='number'/><br/><input id='end' type='number'/><br/>";
	}
	else if(type==3)
	{
		document.getElementById('choice').innerHTML="Choice:<br/><input id='choice1' type='text'/><input id='correct1' type='checkbox'/><br/><input id='choice2' type='text'/><input id='correct2' type='checkbox'/><br/><input id='choice3' type='text'/><input id='correct3' type='checkbox'/><br/><input id='choice4' type='text'/><input id='correct4' type='checkbox'/><br/>";
	}

}



