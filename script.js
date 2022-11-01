// Personal Finances Simulator by Marco Antonio Gonzalez Hernandez

// Objects Initialization
class Job {
    constructor (company, role, salary, start, end) {
        this.company = company;
        this.role = role;
        this.salary = salary;
        this.start = start;
        this.end = end;
    }
}
class Debt {
    constructor (amount, n_months, interest, maintainance) {
        this.amount = amount;
        this.n_months = n_months;
        this.interest = interest;
        this.maintainance = maintainance;
        this.monthlyPayment = this.calcMonthCost()
    }
    calcMonthCost () {
        const baseMP = this.amount/this.n_months;
        let draftAmount = this.amount
        let interestPayed = 0;
        for (let month = 1; month <= this.n_months; month++) {
            interestPayed += draftAmount*this.interest;
            draftAmount -= baseMP
            console.log(`this is the debt left: ${Math.trunc(draftAmount)}`)
        }
        const totalPayment = this.amount + interestPayed + this.maintainance*this.n_months;
        const monthlyPayment = totalPayment/this.n_months
        return Math.trunc(monthlyPayment);
    }
}
class Persona {
    constructor (nombre, dob, startingAmount = 0, startingDebt = 0) {
        this.nombre = nombre;
        this.dob = dob;
        this.startingAmount = startingAmount;
        this.jobs = [];
        this.debts = [];
        this.startingDebt = startingDebt;
        this.networth = this.startingAmount - this.startingDebt;
    }
    addJob (job) {
        this.jobs.push(job);
    }
    addDebt (debt) {
        this.debts.push(debt);
    }
    addExpense () {

    }
    showInfo () {
        for (const propiedad in this) {
            if(propiedad == 'jobs'){
                for (const job in this[propiedad]) {
                    for (const jobProp in this[propiedad][job]){
                        console.log(`${jobProp}: ${this[propiedad][job][jobProp]}`)
                    }
                }
            }
            else if (propiedad == 'debts') {
                for (const debt in this[propiedad]) {
                    for (const debtProp in this[propiedad][debt]){
                        console.log(`${debtProp}: ${this[propiedad][debt][debtProp]}`)
                    }
                }
            }
            else{
                console.log(`${propiedad}: ${this[propiedad]}`)
            }
        }
        console.log()
    }
}

//Menu
let exitMenu = false
const menuString = "What would you like to do\
                    \nlol"
while (!exitMenu) {
    let menuChoice = prompt(menuString)
    switch (menuChoice.toLowerCase()) {
        case "exit":
            exitMenu = true
            console.log(menuChoice)
            break;
    
        default:
            break;
    }
}

const persona1 = new Persona('Marco Antonio', '19-12-1994')
const job1 = new Job('GEOSAT LTD','Project Manager', 1000,3,8)
const job2 = new Job('SumUp', 'Business Analyst', 1600,9,12)
const debt1 = new Debt(100,12,0.05,3);
console.log(debt1.monthlyPayment)
persona1.showInfo()
persona1.addJob(job1)
persona1.showInfo()
persona1.addJob(job2)
persona1.showInfo()