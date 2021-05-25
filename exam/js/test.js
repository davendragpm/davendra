var num=1;
var max=50;
function Q_display()
{
	var xhr=new XMLHttpRequest();
	xhr.open('GET',"php/bgtest.php?num="+num+"&type=0",true);
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
				document.getElementById('question_container').innerHTML=xhr.responseText
			}
		}
	};
	xhr.send();
}
var interval=setInterval(function()
{
	var xhr=new XMLHttpRequest();
	xhr.open('GET',"php/bgstatus.php?num="+num+"&type=0",true);
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
				document.getElementById('question_status').innerHTML=xhr.responseText
			}
		}
	};
	xhr.send();
},500);

function Q_update()
{
	var xhr=new XMLHttpRequest();
	var type=document.getElementsByTagName('input')[0].name;
	if(num>max)
	{
		alert("Do You want to go to 1st Question");
		num=1;
	}
	if(type==2)
	{
		xhr.open('GET',"php/bgtest.php?num="+num+"&type="+type+"&value="+document.getElementsByTagName('input')[0].value+"&id="+document.getElementsByTagName('input')[0].id+"",true);
	}
	else
		xhr.open('GET',"php/bgtest.php?num="+num+"&type="+type+"&value1="+document.getElementsByTagName('input')[0].value+"&value2="+document.getElementsByTagName('input')[1].value+"&value3="+document.getElementsByTagName('input')[2].value+"&value4="+document.getElementsByTagName('input')[3].value+"&id1="+document.getElementsByTagName('input')[0].checked+"&id2="+document.getElementsByTagName('input')[1].checked+"&id3="+document.getElementsByTagName('input')[2].checked+"&id4="+document.getElementsByTagName('input')[3].checked+"",true);
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
				document.getElementById('question_container').innerHTML=xhr.responseText
			}
		}
	};
	xhr.send();
}


function Q_Reset()
{
	var xhr=new XMLHttpRequest();
	var type=document.getElementsByTagName('input')[0].name;
	if(type==2)
	{
		xhr.open('GET',"php/bgtest.php?num="+num+"&type="+type+"&value="+null+"&id="+document.getElementsByTagName('input')[0].id+"",true);
	}
	else
		xhr.open('GET',"php/bgtest.php?num="+num+"&type="+type+"&value1="+document.getElementsByTagName('input')[0].value+"&value2="+document.getElementsByTagName('input')[1].value+"&value3="+document.getElementsByTagName('input')[2].value+"&value4="+document.getElementsByTagName('input')[3].value+"&id1="+null+"&id2="+null+"&id3="+null+"&id4="+null+"",true);
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
				document.getElementById('question_container').innerHTML=xhr.responseText
			}
		}
	};
	xhr.send();
}


function Result()
{
	var xhr=new XMLHttpRequest();
	xhr.open('GET',"php/result.php",true);
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
				document.getElementById('question_container').innerHTML=xhr.responseText
			}
		}
	};
	xhr.send();
}
