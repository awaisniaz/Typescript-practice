class Student{
    RollNo:number;
    Name:string;

    constructor(rollnumber:number,name:string){
        this.RollNo = rollnumber;
        this.Name = name;
    }

    showDetails = ()=>{
        console.log(`${this.RollNo} ${this.Name}`)
    }

}

let student = new Student(10,'awaisniaz')

