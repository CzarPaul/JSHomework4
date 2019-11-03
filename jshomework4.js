let monney, time;

function start() {
    monney = +prompt('Ваш бюджет на месяц?' ,'');
    time = prompt('Введите дату в формате YYYY-MM-DD' ,'');

    while (isNaN(monney) || monney == "" || monney == null){
        monney = +prompt('Ваш бюджет на месяц?' ,'');
    }
}
start();

let appData = {
    buget: monney,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for ( let i = 0; i < 2; i++ ) {
            let a = prompt('Введите обязательную статью расходов в этом месяце' ,''),
                b = prompt('Во сколько обойдется?','');
            if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
            appData.expenses[a] = b;
            } else {
        
            }
        }
    },
    detectDayBudget: function() {
        appData.monneyPerDay=(appData.buget/30).toFixed();
        alert('Ежедневнный бюджет:' + appData.monneyPerDay );
    },
    detectLevel: function() {
        if(appData.monneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.monneyPerDay > 100 && appData.monneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.monneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Пройзошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for ( i=0; i<3; i++){
            opt = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() { 
        for (let i=0; i < 1; i++) {
        let items = prompt('Что принесет допольнительный доход, (Перечислите через запятую)' , '');
       

        if( (typeof(items)) === 'string' && items != '' && (typeof(items)) != null   ) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?'));
            appData.income.sort();
            appData.income.forEach( function(item, i, income) {
                let n = i + 1;
                alert(n + '-Способы доп. заработка: ' + item);
                console.log('done');
            });
            
        appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}


};
for( let key in appData){
    console.log('Наша программа включает в себя данные:' + key + appData[key]);
}




