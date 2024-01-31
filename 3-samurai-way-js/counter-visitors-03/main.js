const globalShowCounter = () => {
    let currentCounterValue = localStorage.getItem('counterVisitorsKey');
    let lastVisitValue = localStorage.getItem('lastVisitKey');
    // let getUrlValue = localStorage.getItem('currentUrlKey');
    // localStorage.setItem('currentUrlKey', document.location.href);

    const minCounterValue = 7;
    const maxCounterValue = 17;
    const minIntervalValue = 1;
    const maxIntervalValue = 3;
    const getCurrentVisitKey = `1501-1612${new Date().getHours().toString()}3112-1204`;

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    // console.log(`test interval with include min/max 1-3: ${getRandomNumber(minIntervalValue, maxIntervalValue)}`);
    //
    // if (getUrlValue !== document.location.href) {
    //     console.log('Url is new')
    // } else {
    //     console.log('Url is old')
    // }

    if (currentCounterValue) {
        document.getElementById('counterVisitorsId').innerHTML = currentCounterValue;
        console.log(`CounterVisitorsKey already initialized: ${currentCounterValue}`);
        console.log(`LastVisitKey already initialized: ${getCurrentVisitKey}`);
    } else {
        currentCounterValue = getRandomNumber(minCounterValue, maxCounterValue).toString();
        document.getElementById('counterVisitorsId').innerHTML = currentCounterValue;
        localStorage.setItem('counterVisitorsKey', currentCounterValue);
        localStorage.setItem('lastVisitKey', getCurrentVisitKey);
        console.log(`CounterVisitorsKey initialized by first visit: ${currentCounterValue}`);
        console.log(`LastVisitKey initialized by first visit: ${getCurrentVisitKey}`);
    }

    function interval(count) {
        console.log(`============================================`);
        console.log(`New LastVisitKey: ${lastVisitValue ? lastVisitValue.valueOf() : null}`);
        console.log(`Current LastVisitKey: ${getCurrentVisitKey}`);
        console.log(`Is Equal Both LastVisitKeys: ${lastVisitValue ? lastVisitValue.valueOf() === getCurrentVisitKey : false}`);
        console.log(`============================================`);
        if (lastVisitValue) {
            if (lastVisitValue.valueOf() === getCurrentVisitKey) {
                count += 1;
                document.getElementById('counterVisitorsId').innerHTML = count;
                localStorage.setItem('counterVisitorsKey', count);
                console.log(`Change counterVisitorsKey by refresh browser page: ${count}`);
            } else {
                count = getRandomNumber(minCounterValue, maxCounterValue);
                document.getElementById('counterVisitorsId').innerHTML = count;
                localStorage.setItem('lastVisitKey', getCurrentVisitKey);
                localStorage.setItem('counterVisitorsKey', count);
                console.log(`Change counterVisitorsKey by new hours date: ${count}`);
            }
        }
        return setInterval(() => {
            count += getRandomNumber(minIntervalValue, maxIntervalValue);
            document.getElementById('counterVisitorsId').innerHTML = count;
            localStorage.setItem('counterVisitorsKey', count);
            console.log(`Change counterVisitorsKey by 10 minutes setInterval: ${count}`);
        }, (60 * 1000) * 10)
    }

    function showCounter() {
        if (+currentCounterValue > 0) {
            interval(+currentCounterValue);
        } else {
            interval(getRandomNumber(minCounterValue, maxCounterValue));
        }
    }

    showCounter()
}

globalShowCounter()