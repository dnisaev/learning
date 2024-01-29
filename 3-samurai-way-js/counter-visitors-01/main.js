let counterValue = localStorage.getItem('counterVisitorsKey');

if (counterValue) {
    document.getElementById('counterVisitorsId').innerHTML = counterValue;
} else {
    document.getElementById('counterVisitorsId').innerHTML = '0';
}

function interval(count) {
    return setInterval(() => {
        count += Math.floor(Math.random() * 2) + 1;
        document.getElementById('counterVisitorsId').innerHTML = count;
        localStorage.setItem('counterVisitorsKey', count);
    }, (60 * 1000) * 10)
}

function showCounterValue() {
    if (+counterValue > 0) {
        interval(+counterValue);
    } else {
        interval(0);
    }
}

showCounterValue()