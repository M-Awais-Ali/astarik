
 var n;
function asterik(){
	var n=document.getElementById('num').value;
	document.getElementById('demo').innerHTML=n;
	
	for( var i=1;i<=n;i++)
	{
		for( var j=1;j<=n-i;j++)
		{
			console.log(' '.repeat(j));
		}
		for(var k=1;k<=i*2-1;k++)
		{
			console.log('*'.repeat(k));
		}

		console.log("\n");
	}

};
