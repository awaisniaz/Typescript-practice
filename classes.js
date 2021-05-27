var Student = /** @class */ (function () {
    function Student(rollnumber, name) {
        var _this = this;
        this.showDetails = function () {
            console.log(_this.RollNo + " " + _this.Name);
        };
        this.RollNo = rollnumber;
        this.Name = name;
    }
    return Student;
}());
var student = new Student(10, 'awaisniaz');
