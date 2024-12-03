//const str = "Para maiores informações, veja o Capítulo 3.4.5.1";
//const re = /(capítulo \d+(\.\d)*)/i;
//const found = str.match(re);

console.log(found);

var lld = []; 
var matches = value.match(/MESSAGE:\s\w+\s\w+\s(\w+)/gm); 
if (matches && Array.isArray(matches)) { 
	var lines = matches.reduce(function(a, b) { 
		if (a.indexOf(b) < 0) a.push(b); 
		return a; }, []); 
var lines_num = lines.length; 
for (var i = 0; i < lines_num; i++) { 
	var row = {}; 
	var match = lines[i].toString().match(/MESSAGE:\s\w+\s\w+\s(\w+)/); 
	if (match) { 
		row["{#TSM}"] = match[1]; 
		lld.push(row); 
		} 
	} 
} 
return JSON.stringify(lld); 