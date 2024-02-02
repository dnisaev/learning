function showVisitorsCounter() {
    let currentCounterValue = localStorage.getItem('counterValue');
    const visitValue = localStorage.getItem('visitValue');
    const currentVisitValue = new Date().getHours().toString();

    if (currentCounterValue) {
        document.getElementById('counterVisitorsId').innerHTML = currentCounterValue;
        console.log(`============================================`);
        console.log(`counterValue already initialized: ${currentCounterValue}`);
        console.log(`visitValue already initialized: ${currentVisitValue}`);
    } else {
        currentCounterValue = startCounterValue(currentVisitValue);
        correctDeclension(currentCounterValue);
        document.getElementById('counterVisitorsId').innerHTML = currentCounterValue;
        localStorage.setItem('counterValue', currentCounterValue);
        localStorage.setItem('visitValue', currentVisitValue);
        console.log(`============================================`);
        console.log(`counterValue initialized by first visit: ${currentCounterValue}`);
        console.log(`visitValue initialized by first visit: ${currentVisitValue}`);
    }

    function startCounterValue(value) {
        let start = '';
        for (let i = 0; i <= value; i++) {
            if (value <= 8) {
                start = (5).toString()
            } else {
                start = (i - 3).toString()
            }
        }
        return start;
    }

    function correctDeclension(value) {
        const string = value.toString();
        if (string.includes(`12`, string.length - 2) || string.includes(`13`, string.length - 2) || string.includes(`14`, string.length - 2)) {
            console.log(`12 || 13 || 14`, true)
            return document.getElementById('counterDeclensionId').innerHTML = 'человек'
        } else {
            for (let i = 0; i <= 9; i++) {
                if (i === 2 || i === 3 || i === 4) {
                    if (string.includes(`${i}`, string.length - 1)) {
                        console.log(`${i}`, true)
                        return document.getElementById('counterDeclensionId').innerHTML = 'человека'
                    }
                } else {
                    if (string.includes(`${i}`, string.length - 1)) {
                        console.log(`${i}`, true)
                        return document.getElementById('counterDeclensionId').innerHTML = 'человек'
                    }
                }
            }
        }
    }

    function counter(value) {
        console.log(`============================================`);
        console.log(`New visitValue: ${visitValue ? visitValue.valueOf() : null}`);
        console.log(`Current visitValue: ${currentVisitValue}`);
        console.log(`Is Equal visitValues: ${visitValue ? visitValue.valueOf() === currentVisitValue : false}`);
        console.log(`============================================`);
        if (visitValue) {
            if (visitValue.valueOf() === currentVisitValue) {
                value += 1;
                document.getElementById('counterVisitorsId').innerHTML = value;
                localStorage.setItem('counterValue', value);
                console.log(`Change counterValue by refresh browser page: ${value}`);
                correctDeclension(value);
            } else {
                value = startCounterValue(currentVisitValue);
                document.getElementById('counterVisitorsId').innerHTML = value;
                localStorage.setItem('visitValue', currentVisitValue);
                localStorage.setItem('counterValue', value);
                console.log(`Change counterValue by new hours date: ${value}`);
                correctDeclension(value);
            }
        }

    }

    counter(+currentCounterValue)
}

showVisitorsCounter()