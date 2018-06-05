function secretMap(num, map1, map2){
	var binMap1 =[];
	var binMap2 = [];
	var mergeMap = [];
	var mapResult = [];
	for(var i=0; i<length; i++){
		var numMap1 = map1[i];
		var numMap2 = map2[i];
		var binaryMap1 = convertBinary(numMap1);
		var binaryMap2 = convertBinary(numMap2);
	
		binMap1.push(binaryMap1);
		binMap2.push(binaryMap2);
		mergeMap.push( mapSetting(binMap1[i],binMap2[i]));
	}
	console.log(makeMap(mergeMap));
}
function makeMap(mergeMap){
	var result = [];
	for(var i=0; i<mergeMap.length; i++){
		var stringMap = "";
		var len = mergeMap[i].length;
		for(var j=0; j<len; j++){
			var value = mergeMap[i][j];
			if(value ===1){
				stringMap +="#";
			}else{
				stringMap += " ";
			}
		}
		result.push(stringMap);
	}
	return result;
}
function mapSetting(map1, map2){
	var result = [];
	for(var i=0; i<map1.length; i++){
		if(map1[i] === 1 || map2[i] === 1){
			result.push(1);
		}else {
			result.push(0);
		}
	}
	return result;
	
}
function convertBinary(num){
		var binary = [];
		var division = num;
		for(var i=0; i<length; i++){
			var qutient = Math.floor(division/2);
			var remainder = Math.floor(division%2);
			if( i == 0){
				division = qutient;
				binary.push(remainder);
				continue;
			}
			if(qutient == 0 || qutient == 1){
				binary.unshift(remainder);
				binary.unshift(qutient);
				var binLen = binary.length;
				if(binLen<length){
					var defference = length - binLen;
					for(var i =0; i<defference; i++){
						binary.unshift(0);
					}
				}
				return binary; 
			}else{
				division = qutient;
				binary.unshift(remainder);
			}
		}
		return binary;
}
var length = 5;
var map1 = [9,20,28,18,11];
var map2 = [30,1,21,17,28];
secretMap(5, map1, map2);