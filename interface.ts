interface Cala{
    subtract(first:number,second:number):any
}
let Calculation:Cala = {
    subtract(first:number,second:number):any{
        return first  + second
    }
}