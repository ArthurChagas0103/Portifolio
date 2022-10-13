function mudarCor() {
    if (window.scrollY > 60) {
        document.getElementById('navbar').style.backgroundColor = '#6759c2'
    }
    else{
        document.getElementById('navbar').style.backgroundColor = 'rgba(43, 66, 85, 0)'
    }
}
window.addEventListener('scroll', mudarCor)

var TRange = null;

function findString(str) {
	if (parseInt(navigator.appVersion) < 4) return;
	var strFound;
	if (window.find) {
		strFound = self.find(str);
		if (!strFound) {
			strFound = self.find(str, 0, 1);
			while (self.find(str, 0, 1)) continue;
		}
	}
	else if (navigator.appName.indexOf("Microsoft") != -1) {
		if (TRange != null) {
			TRange.collapse(false);
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
		if (TRange == null || strFound == 0) {
			TRange = self.document.body.createTextRange();
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
	}
	else if (navigator.appName == "Opera") {
		alert("Opera não suportado")
		return;
	}
	if (!strFound) alert("Texto '" + str + "' não encontrado!")
	return;
}

function animacao() {
    if (window.scrollY > 100 && window.scrollY < 1200) {
        document.getElementById('divEu').style.visibility = 'visible';
		document.getElementById('divEu').style.animationName = 'fadeInRightBig'; 
    }
	else{
        document.getElementById('divEu').style.visibility = 'hidden';
		document.getElementById('divEu').style.animationName = 'fadeInLeftBig'; 
    }
}
window.addEventListener('scroll', animacao)
