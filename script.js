const currentTime = () => {
    const hr = document.querySelector(".hour");
    const mn = document.querySelector(".minutes");
    const sc = document.querySelector(".seconds");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh<10? `0${hh}`:hh;
    mm = mm<10? `0${mm}`:mm;
    ss = ss<10? `0${ss}`:ss;

    let hour = `${hh}`;
    let minute = `${mm}`;
    let second = `${ss}`;
    let txth = '<p class="hou">Horas</p>';
    let txtm = '<p class="min">Minutos</p>';
    let txts = '<p class="sec">Segundos</p>';
    hr.innerHTML = hour+txth;
    mn.innerHTML = minute+txtm;
    sc.innerHTML = second+txts;
}

currentTime();
setInterval(currentTime, 1000);