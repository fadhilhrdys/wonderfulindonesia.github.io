function activeLinks() {
    const navLinks = document.querySelectorAll('nav a');
    const currentLocation = location.href;

    for( let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === currentLocation) {
            navLinks[i].className = "active"
        }
    }
}
activeLinks();

function modal(){
    const kontakBtn = document.querySelector('.btnKontak');
    const modalBg = document.querySelector('.modalBg');
    const cancelBtn = document.querySelector('#cancelBtn');

    kontakBtn.addEventListener('click', function() {
        modalBg.classList.add('modalActive');
    });
    cancelBtn.addEventListener('click', function() {
        modalBg.classList.remove('modalActive');
        location.reload();
    });
    }
modal();

function validateForm() {
    const form =  document.getElementById('formModal');
    const nama = document.getElementById('nama');
    const email = document.getElementById('email');
    const noTelepon = document.getElementById('noTelepon');
    const symbolNumeric =  /^[0-9]+$/;

    // membuat event click submit lalu jalankan validasi form di dalamnya
    form.addEventListener('submit', e => {
        e.preventDefault();

        hideError(nama);
        hideError(email);
        hideError(noTelepon);

        // membuat variabel yang berisi nilai yang di isikan oleh user
        const namaIsi = nama.value.trim();
        const emailIsi = email.value.trim();
        const noTeleponIsi = noTelepon.value.trim();
        
        // membuat kondisi validasi form 
        if(namaIsi && emailIsi && noTeleponIsi) {
            if(namaIsi.match(symbolNumeric)) {
                pesanError(nama, 'Nama yang anda masukan harus huruf');
            }
            if(noTeleponIsi.length < 7 || !noTeleponIsi.match(symbolNumeric)) {
                pesanError(noTelepon, 'Nomor yang anda masukan tidak benar');
                return;
            } 
            console.log(namaIsi, emailIsi, noTeleponIsi);
            alert('Terima kasih sudah mengisi form, team kami akan siap terhubung dengan anda');
            location.href = "./page-soon.html";
        } else {
            switch('') {
                case namaIsi:
                    pesanError(nama, 'tolong masukan nama anda');
                case emailIsi:
                    pesanError(email, 'tolong masukan email anda');
                case noTeleponIsi:
                    pesanError(noTelepon, 'tolong masukan nomor telepon anda');
            }
        }
    });

    // membuat function untuk menampilakn pesan eror
    function pesanError(input, message) {
        const formRow = input.parentElement;
        const errorMsg = formRow.querySelector('.errorMsg');

        formRow.className = 'formRow error';
        errorMsg.innerHTML = message;
    }

    // membuat function untuk menyembunyikan pesan eror
    function hideError(input) {
        const formRow = input.parentElement;
        const errorMsg = formRow.querySelector('.errorMsg');

        formRow.className = 'formRow ';
        errorMsg.innerHTML = '';
    }
}
validateForm();

function validateEmailSubs() {
    const el = document.getElementById('emailSubs');

    // membuat event keydown ketika user mengetikan email yang mereka isi
    el.addEventListener('keydown', function() {
        let emailSubs = document.getElementById('emailSubs').value;
        const formSubs = document.getElementById('formSubs');
        const text = document.getElementById('textValidate');
        const symbol = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // membuat kondisi untuk validasi email yang sesuai
        if (emailSubs.match(symbol)) {
            formSubs.classList.add("valid");
            formSubs.classList.remove("invalid");
            text.innerHTML = "Email yang anda masukan benar";
            text.style.color = "#00ff00";
        } else {
            formSubs.classList.remove("valid");
            formSubs.classList.add("invalid");
            text.innerHTML = "Email yang anda masukan salah";
            text.style.color = "#ff0000";
        } if (emailSubs == "") {
            formSubs.classList.remove("valid");
            formSubs.classList.remove("invalid");
            text.innerHTML = "";
            text.style.color = "#ff0000";
        }
    });
}
validateEmailSubs();

function alertSubscribe() {
    const formSubs = document.getElementById('formSubs');
    const emailSubs = document.getElementById('emailSubs');
    const textAlert = document.getElementById('textValidate');
    
    formSubs.addEventListener('submit', (e) => {
        let messages = []
        if (emailSubs.value === '' || emailSubs.value == null) {
            messages.push('silahkan masukan email anda terlebih dahulu')
        }

        if (messages.length > 0 ) {
            e.preventDefault()
            textAlert.innerText = messages.join(', ');
        } else {
            alert(' Terima kasih anda telah subscribe ! ');
        }
    })
}
alertSubscribe();