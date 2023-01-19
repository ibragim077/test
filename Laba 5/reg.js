let login = document.querySelector("#login");
login.addEventListener('input', function () {
    let re = /^[а-яА-Яa-zA-Z0-9\-@.+_]+$/.test(this.value);

    if (re) {
        document.querySelector('#conl1').style.color= 'rgba(60, 162, 85, 0.9)';
        document.querySelector('#img1').src="materials/ok-icon.png";
    } else {
        document.querySelector('#conl1').style.color= 'rgba(238, 34, 34, 0.9)';
        document.querySelector('#img1').src="materials/x-icon.png";
    }

    if ((this.value.length > 4)&&(this.value.length <150) ) {
        document.querySelector('#conl2').style.color= 'rgba(60, 162, 85, 0.9)';
        document.querySelector('#img2').src="materials/ok-icon.png";
    } else {
        document.querySelector('#conl2').style.color= 'rgba(238, 34, 34, 0.9)';
        document.querySelector('#img2').src="materials/x-icon.png";
    }
});



let password = document.querySelector("#password");
password.addEventListener('input', function () {
    let reg = /^\d+$/.test(this.value);

    if (this.value.length > 8) {
        document.querySelector('#conp1').style.color= 'rgba(60, 162, 85, 0.9)';
        document.querySelector('#img3').src="materials/ok-icon.png";
    } else {
        document.querySelector('#conp1').style.color= 'rgba(238, 34, 34, 0.9)';
        document.querySelector('#img3').src="materials/x-icon.png";
    }

    if (!reg) {
        document.querySelector('#conp2').style.color= 'rgba(60, 162, 85, 0.9)';
        document.querySelector('#img4').src="materials/ok-icon.png";
    } else {
        document.querySelector('#conp2').style.color= 'rgba(238, 34, 34, 0.9)';
        document.querySelector('#img4').src="materials/x-icon.png";
    }

    if (this.value !== '') {

        if (this.value !== login.value) {
            document.querySelector('#conp3').style.color= 'rgba(60, 162, 85, 0.9)';
            document.querySelector('#img5').src="materials/ok-icon.png";
        } else {
            document.querySelector('#conp3').style.color= 'rgba(238, 34, 34, 0.9)';
            document.querySelector('#img5').src="materials/x-icon.png";
        }

    }
});

let sec_password = document.querySelector("#sec_password");
sec_password.addEventListener('input', function () {
    if (this.value !== '' && password.value !== '') {

        if (this.value !== password.value) {
            document.querySelector('#consp1').style.color= 'rgba(60, 162, 85, 0.9)';
            document.querySelector('#img7').src="materials/ok-icon.png";
        } else {
            document.querySelector('#consp1').style.color= 'rgba(238, 34, 34, 0.9)';
            document.querySelector('#img7').src="materials/x-icon.png";
        }

    }
});

let ch = document.querySelector(".checkbox");
let b = document.querySelector(".submit_button");

function ValueCheckBox(CheckBox) {
    if (!CheckBox.checked) {
        b.disabled = true;
        b.style.color='#CCCCCC;';
    } else {
        b.disabled = false;
        b.style.background='#624C91';
    }
}

ch.addEventListener('change', function () { ValueCheckBox(this) });
