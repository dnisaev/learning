const globalVariableShowCounter = () => {
    let counterValue = localStorage.getItem('counterVisitorsKey');
    let lastVisitValue = localStorage.getItem('lastVisitKey');

    const minValueCounter = 11;
    const maxValueCounter = 23;
    const minValueInterval = 1;
    const maxValueInterval = 3;
    const getCurrentHours = new Date().getHours().toString();

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    console.log(`test interval with include min/max ${getRandomNumber(minValueInterval, maxValueInterval)}`);

    if (counterValue) {
        document.getElementById('counterVisitorsId').innerHTML = counterValue;
        console.log(`CounterVisitorsKey already initialed: ${counterValue}`);
        console.log(`LastVisitKey already initialed: ${getCurrentHours}`);
    } else {
        counterValue = getRandomNumber(minValueCounter, maxValueCounter).toString();
        document.getElementById('counterVisitorsId').innerHTML = counterValue;
        localStorage.setItem('counterVisitorsKey', counterValue);
        localStorage.setItem('lastVisitKey', getCurrentHours);
        console.log(`Initial counterVisitorsKey by first visit: ${counterValue}`);
        console.log(`Initial lastVisitKey by first visit: ${getCurrentHours}`);
    }

    function interval(count) {
        if (lastVisitValue) {
            if (lastVisitValue.valueOf() === getCurrentHours) {
                count += 1;
                document.getElementById('counterVisitorsId').innerHTML = count;
                localStorage.setItem('counterVisitorsKey', count);
                console.log(`Change counterVisitorsKey by refresh browser page: ${count}`);
            } else {
                count = getRandomNumber(minValueCounter, maxValueCounter);
                document.getElementById('counterVisitorsId').innerHTML = count;
                localStorage.setItem('lastVisitKey', getCurrentHours);
                localStorage.setItem('counterVisitorsKey', count);
                console.log(`Change counterVisitorsKey by new hours date: ${count}`);
            }
        }
        return setInterval(() => {
            count += getRandomNumber(minValueInterval, maxValueInterval);
            document.getElementById('counterVisitorsId').innerHTML = count;
            localStorage.setItem('counterVisitorsKey', count);
            console.log(`Change counterVisitorsKey by 60 seconds setInterval: ${count}`);
        }, (60 * 1000))
    }

    function showCounter() {
        if (+counterValue > 0) {
            interval(+counterValue);
        } else {
            interval(getRandomNumber(minValueCounter, maxValueCounter));
        }
    }

    showCounter()
}

globalVariableShowCounter()