const calcBtn = document.getElementById('calculate-btn');


function calculating() {

    const amountMoney = document.getElementById('money-amount').value;
    const servicePercent = document.getElementById('service-percent').value;
    const peopleNumber = document.getElementById('people-number').value;
    const personPay = document.getElementById('price');
    const each = document.getElementById('div-each');

    each.innerHTML = '';

    if (amountMoney === '' || amountMoney == 0 || servicePercent == 0 || peopleNumber === '' || peopleNumber == 0) {

        window.alert('You need to fill in valid values or you need to fill in all the fields');
        return;
    }

    else {

        let pricePerPerson = (amountMoney * ((100 - servicePercent) / 100)) / peopleNumber;

        pricePerPerson = pricePerPerson.toFixed(2);

        if (peopleNumber != 1) {

            personPay.innerHTML = ' ' + pricePerPerson;
            each.innerHTML = 'each';
        }

        else {
            personPay.innerHTML = ' ' + pricePerPerson;

        }

    }
}

calcBtn.onclick = function(){calculating()};