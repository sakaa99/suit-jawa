
// alert('SELAMAT DATANG DI PERMAINAN SUIT JAWA')
function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'SEMUT';
}

function sweetAlertShow(titleText, iconText) {
    Swal.fire({
        title: titleText,
        icon: iconText,
    })
}

function getHasil(comp, player) {
    if (player == comp) {
        sweetAlertShow('Yahhh seri bre', 'info')
        return 'SERI'
    };
    if (player == 'gajah') {
        return (comp == 'orang') ? sweetAlertShow('asik menang', 'success') : sweetAlertShow('yahh kalah lu', 'error')
    };
    if (player == 'orang') return (comp == 'gajah') ? sweetAlertShow('yahh kalah lu', 'error') : sweetAlertShow('asik menang', 'success');
    if (player == 'semut') return (comp == 'orang') ? sweetAlertShow('yahh kalah lu', 'error') : sweetAlertShow('asik menang', 'success');
}

function eventClick(getClass) {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = getClass.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', pilihanComputer + '.jpeg');

    // const info = document.querySelector('.info');
    // info.innerHTML = hasil;
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', () => eventClick(pGajah));


const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', () => eventClick(pSemut));

const porang = document.querySelector('.orang');
porang.addEventListener('click', () => eventClick(porang));