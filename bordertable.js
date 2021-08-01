var bordersize;
//bordersize=prompt("Select a table border size\n"+"0 (no border) \n"+"1 (1 pixel border) \n"+"4 (4 pixel border) \n"+"8 (8 pixel border) \n");
bordersize=prompt("eneter");
switch(bordersize)
{
	case "0":document.write("<table>");
		break;
	case "1":document.write("<table border='1'>");
		break;
	case "4":document.write("<table border='4'>");
		break;
	case "8":document.write("<table border='8'>");
		break;
	default:document.write("Error - invalid choice:",bordersize,"<br/>");
		break;
}

	document.write("<caption>2006 NFL Divisional","Winners</caption>");
	document.write("<tr><th>American conference</th>",
			"<th>National conference</th>",
			"</tr>",
			"<tr>",
			"<td>New England Pateriots</td>",
			"<td>Philadelphia Engles</td>",
			"</tr>",
			"<tr>",
			"<td>New England Pateriots</td>",
			"<td>Philadelphia Engles</td>",
			"</tr>"
			);
