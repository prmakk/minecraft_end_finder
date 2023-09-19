'use strict';

//INPUTS FOR THROW 1
let firstX = document.querySelector('.first__input-x');
let firstZ = document.querySelector('.first__input-z');
let firstAngle = document.querySelector('.first__input-angle');

//INPUTS FOR THROW 2
let secondX = document.querySelector('.second__input-x');
let secondZ = document.querySelector('.second__input-z');
let secondAngle = document.querySelector('.second__input-angle');

//BUTTON
let btn = document.querySelector('.result');

//ANSWERS
let answerX = document.querySelector('.result-x');
let answerZ = document.querySelector('.result-z');



btn.onclick = () =>{
    const p = Math.PI/180;
    let a1 = firstAngle.value;
    let a2 = secondAngle.value;
    let x1 = firstX.value;
    let x2 = secondX.value;
    let z1 = firstZ.value;
    let z2 = secondZ.value;
    //EMPTY CHECK
    if(x1 == "" || x2 == "" || a1 == "" || z1 == "" || z2 == "" || a2 == ""){
        alert('Заполните все поля.');
    }
    else{
        console.log(x1, z1, a1, z1, z2, a2);
        //ANGLES CHECK
        if (Math.abs(a1 - a2) < 1){
            alert('Углы не могут быть равны.');
        }
        else if (a1 > 360 || a2 > 360){
            alert('Углы не могут быть больше 360 градусов.')
        }
        else{
            function cot (x){
                return 1 / Math.tan(x);
            }
            switch(Math.round(a1)) {
				case -180:
				case 0:
				case 180:
					answerX.value = Math.round(x1);
					answerZ.value = Math.round(cot(-a2 * p) * x1 - (x2 * cot(-a2 * p) - z2));
					break;
				case -90:
				case 90:
					answerZ.value = Math.round(z1);
					answerX.value = Math.round(Math.round(x2 * cot(-a2 * p) - z2 + z1) / cot(-a2 * p));
					break;
				default:
                    console.log('че смотришь, дракона убивай');
			switch(Math.round(a2)){
				case -180:
				case 0:
				case 180:
					answerX.value = Math.round(x2);
					answerZ.value = Math.round(cot(-a1 * p) * x2 - (x1 * cot(-a1 * p) - z1));
					break;
				case -90:
				case 90:
					answerZ.value = Math.round(z2);
					answerX.value = Math.round((x1 * cot(-a1 * p) - z1 + z2) / cot(-a1 * p));
					break;
				default:
                console.log('я сказал крепость ищи!!!');
					answerX.value = Math.round(((x1 * cot(-a1 * p) - z1) - (x2 * cot(-a2 * p) - z2)) / (cot(-a1 * p) - cot(-a2 * p)));
					answerZ.value = Math.round(cot(-a1 * p) * answerX.value - (x1 * cot(-a1 * p) - z1));
                    answerX.innerHTML = 'X: ' + answerX.value;
                    answerZ.innerHTML = 'Z: ' + answerZ.value;
				}
			}
        }
    }
}