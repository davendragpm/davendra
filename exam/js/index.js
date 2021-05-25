var num=288;
function Q_display()
{
	var xhr=new XMLHttpRequest();
	xhr.open('GET',"php/question.php?num="+num+"",true);
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
