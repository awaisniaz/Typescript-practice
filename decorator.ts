function f(){
    console.log("Evalented")
    return function(target,name:string){
        console.log("F() get called")
    }
}

class c {
    @f()
    static data():number{
        return 1
    }
}