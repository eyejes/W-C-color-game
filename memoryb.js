

document.write('<div align="center"><table cellpadding="0" cellspacing="0" border="0">');
for (var a = 0; a <= 3; a++) {
	document.write('<tr>');
	for (var b = 0; b <= 5; b++) {
		document.write('<td align="center" class="blk" id="t'+((6*a)+b)+'"></td>');
		}
		document.write('<\/tr>');}
		document.write('<\/table><form name="mem"><input type="button" id="cnt" value="0:00" onclick="window.start()" \/><\/form><\/div>');
                    