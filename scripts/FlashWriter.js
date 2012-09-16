<!--
var flash2Installed = false;    
var flash3Installed = false;    
var flash4Installed = false;   
var flash5Installed = false;    
var flash6Installed = false;
var flash7Installed = false;
var flash8Installed = false;
var maxVersion = 8;
var actualVersion = 0;         
var jsVersion = 1.0;
var gotflash = 0;

// Check the browser...we're looking for ie/win
var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;    
var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false;
	
// This is a js1.1 code block, so make note that js1.1 is supported.
//jsVersion = 1.1; this is not in a js1.1 code block anymore - matt
	
// Write vbscript detection on ie win. IE on Windows doesn't support regular
// JavaScript plugins array detection.
if(isIE && isWin){
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
	document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
	document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
	document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');  
	document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n'); 
	document.write('flash7Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))) \n');
	document.write('flash8Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.8"))) \n');
	document.write('<\/SCR' + 'IPT> \n'); // break up end tag so it doesn't end our script
}

function detectFlash() {  
	// If navigator.plugins exists...
	if (navigator.plugins) {
		// ...then check for flash 2 or flash 3+.
		if (navigator.plugins["Shockwave Flash 2.0"]
			|| navigator.plugins["Shockwave Flash"]) {
		var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
		var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;
		// alert("Flash plugin description: " + flashDescription);
		var flashVersion = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));
		alert('flashVersion = ' + flashVersion);
		flash2Installed = flashVersion == 2;
		flash3Installed = flashVersion == 3;
		flash4Installed = flashVersion == 4;
		flash5Installed = flashVersion == 5;
		flash6Installed = flashVersion == 6;
		flash7Installed = flashVersion == 7;
		flash8Installed = flashVersion >= 8;
		}
	}
		
	// Loop through all versions we're checking, and
	// set actualVersion to highest detected version.
	for (var i = 2; i <= maxVersion; i++) {
		if (eval("flash" + i + "Installed") == true) gotflash = i;
		
	}
}

function writeFlashMovie(flashUrl,width,height)
{
	var requiredVersion = 7;
//	alert(gotflash);
	if (gotflash >= requiredVersion)
	{
		var output = '';
		output += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + width + '" height="' + height + '" VIEWASTEXT>';
		output += '<param name=\"allowScriptAccess\" value=\"sameDomain\" />';
		output += '<param name=\"movie\" value=\"' + flashUrl + '\" />';
		output += '<param name=\"quality\" value=\"high\" />';
		output += '<param name=\"menu\" value=\"false\" />';
		output += '<param name=\"wmode\" value=\"transparent\" />';
		output += '<embed src=\"' + flashUrl + '\" width=\"' + width + '\" height=\"' + height + '\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" menu="false" wmode="transparent"/>';
		output += '</object>';
		document.write(output);
	}
	else // no flash output
	{
		document.write('We have detected that you <u>do not</u> have <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank">Adobe\'s Flash Player</a> installed. Therefore, our video presentation on YouTube is unavailable. &nbsp;Instead, please click on the following link to download the AVI movie of the same video.<br>Thank you...<br><br>');
	}
}

detectFlash();
//-->