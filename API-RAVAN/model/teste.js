var lld = [];  // Lista em Javascript
const str = "Para maiores informações, veja o Capítulo 3.4.5.1";
//const value = 0;
//const re = /(capítulo \d+(\.\d)*)/i;

const re = /(capítulo \d+(\.\d)*)/i;
var matches = str.match(re);


//var matches = value.match(/MESSAGE:\s\w+\s\w+\s(\w+)/gm); // O método match() retorna uma correspondência entre uma string com uma expressão regular.

//const re = /(capítulo \d+(\.\d)*)/i;
//const found = str.match(re);

//console.log(matches);


if (matches && Array.isArray(matches)) { 
	var lines = matches.reduce(function(a, b) { 
		if (a.indexOf(b) < 0) a.push(b); 
		//console.log(b)
		return a; }, []); 
		
var lines_num = lines.length; 
for (var i = 0; i < lines_num; i++) { 
	var row = {}; 
	var match = lines[i].toString().match(/(capítulo \d+(\.\d)*)/i); 
     	// console.log(match)
	   // console.log(match)
//	if (match[1].indexOf("cap") != -1) {
//		  return "contem string";
//	}
	if (match) { 
		if( match[1].indexOf("rst") != -1) {
			console.log("contem")
			row["{#TSM}"] = []; 
			
	    }
	else{ 
		row["{#TSM}"] = match[1]; 
		lld.push(row); 
	} 
		// console.log("lld é",lld[0])
		} 
		
	} 
	console.log("lld é",lld)
} 
console.log(JSON.stringify(lld))
return JSON.stringify(lld); 