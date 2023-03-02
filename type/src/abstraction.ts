abstract class ElectricityBill{
    public rate?:number;
    public units:number;
    constructor(units:number,rate ?:number){
        this.rate = rate;
        this.units= units;
    }
    public abstract billDetails():number;
}
class Domestic extends ElectricityBill{
    constructor(units:number){
       super(units)
    }
    public billDetails(): any {
        console.log("Domestic Electricity Bill:")
        console.log(`units:${this.units}`)
        console.log("Rate = "+(5*this.units) )
        
    }
}
class Commerical extends ElectricityBill{
    constructor(units:number){
       super(units)
    }
    public billDetails(): any {
        console.log("Commercial Electricity Bill:");
        console.log(`units:${this.units}`)
        console.log("Rate = "+(10*this.units) )
        
    }

}
let  n= new Domestic(20);
let c= new Commerical(30);
n.billDetails();
c.billDetails();