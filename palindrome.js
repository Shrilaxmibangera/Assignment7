var palindrome = prompt("Enter the number to check number is palindrome or not");
 var num=palindrome;
var dig;
var sum=0;
var rev=0;
while(palindrome>0)
{
	dig=palindrome%10;
	sum=sum+dig;
	rev=(rev*10)+dig;
	palindrome=parseInt(palindrome/10);	
}
 if(num==rev)
document.write(num," is palindome","<br/>");
else
document.write(num," Not palindrome","<br/>");
document.write("sum is ",sum);
 