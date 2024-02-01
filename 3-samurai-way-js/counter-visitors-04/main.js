function globalShowCounter() {
    let currentCounterValue = localStorage.getItem('counterVisitorsKey');
    const lastVisitValue = localStorage.getItem('lastVisitKey');
    const getCurrentVisitKey = new Date().getHours().toString();

    function isNewHours(currentHours) {
        switch (currentHours) {
            case "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8": {
                return "5"
            }
            case "9": {
                return "6"
            }
            case "10": {
                return "7"
            }
            case "11": {
                return "8"
            }
            case "12": {
                return "9"
            }
            case "13": {
                return "10"
            }
            case "14": {
                return "11"
            }
            case "15": {
                return "12"
            }
            case "16": {
                return "13"
            }
            case "17": {
                return "14"
            }
            case "18": {
                return "15"
            }
            case "19": {
                return "16"
            }
            case "20": {
                return "17"
            }
            case "21": {
                return "18"
            }
            case "22": {
                return "19"
            }
            case "23": {
                return "20"
            }
        }
    }

    if (currentCounterValue) {
        document.getElementById('counterVisitorsId').innerHTML = currentCounterValue;
        console.log(`CounterVisitorsKey already initialized: ${currentCounterValue}`);
        console.log(`LastVisitKey already initialized: ${getCurrentVisitKey}`);
    } else {
        currentCounterValue = isNewHours(getCurrentVisitKey);
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
                count = isNewHours(getCurrentVisitKey);
                document.getElementById('counterVisitorsId').innerHTML = count;
                localStorage.setItem('lastVisitKey', getCurrentVisitKey);
                localStorage.setItem('counterVisitorsKey', count);
                console.log(`Change counterVisitorsKey by new hours date: ${count}`);
            }
        }

    }

    function showCounter() {
        if (+currentCounterValue > 0) {
            interval(+currentCounterValue);
        } else {
            interval(isNewHours(getCurrentVisitKey));
        }
    }

    showCounter()
}

globalShowCounter()