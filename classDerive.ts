class School{
    public studentName:string
    studentCode:number
    constructor(x:string,y:number){
        this.studentName = x;
        this.studentCode = y;

    }
}

class Department extends School{
    private departmentName:string;
    constructor(code:number,name:string,department:string){
        super(name,code);
        this.departmentName = department
    }

}
