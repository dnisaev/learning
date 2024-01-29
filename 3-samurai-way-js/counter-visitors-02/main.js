const globalVariableShowCounter = () => {
    let currentCounterValue = localStorage.getItem('counterVisitorsKey');
    let lastVisitValue = localStorage.getItem('lastVisitKey');

    const minCounterValue = 11;
    const maxCounterValue = 23;
    const minIntervalValue = 1;
    const maxIntervalValue = 3;
    const getCurrentHours = new Date().getHours().toString();

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    console.log(`test interval with include min/max 1-3: ${getRandomNumber(minIntervalValue, maxIntervalValue)}`);

    if (currentCounterValue) {
        document.getElementById('counterVisitorsId').innerHTML = currentCounterValue;
        console.warn(`CounterVisitorsKey already initialized: ${currentCounterValue}`);
        console.warn(`LastVisitKey already initialized: ${getCurrentHours}`);
    } else {
        currentCounterValue = getRandomNumber(minCounterValue, maxCounterValue).toString();
        document.getElementById('counterVisitorsId').innerHTML = currentCounterValue;
        localStorage.setItem('counterVisitorsKey', currentCounterValue);
        localStorage.setItem('lastVisitKey', getCurrentHours);
        console.warn(`CounterVisitorsKey initialized by first visit: ${currentCounterValue}`);
        console.warn(`LastVisitKey initialized by first visit: ${getCurrentHours}`);
    }

    function interval(count) {
        if (lastVisitValue) {
            if (lastVisitValue.valueOf() === getCurrentHours) {
                count += 1;
                document.getElementById('counterVisitorsId').innerHTML = count;
                localStorage.setItem('counterVisitorsKey', count);
                console.log(`Change counterVisitorsKey by refresh browser page: ${count}`);
            } else {
                count = getRandomNumber(minCounterValue, maxCounterValue);
                document.getElementById('counterVisitorsId').innerHTML = count;
                localStorage.setItem('lastVisitKey', getCurrentHours);
                localStorage.setItem('counterVisitorsKey', count);
                console.log(`Change counterVisitorsKey by new hours date: ${count}`);
            }
        }
        return setInterval(() => {
            count += getRandomNumber(minIntervalValue, maxIntervalValue);
            document.getElementById('counterVisitorsId').innerHTML = count;
            localStorage.setItem('counterVisitorsKey', count);
            console.log(`Change counterVisitorsKey by 60 seconds setInterval: ${count}`);
        }, (60 * 1000))
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

globalVariableShowCounter()