class nameclass {
    constructor(parameter1, parameter2, parameter3)
     {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
        this.parameter3 = parameter3;
    }
    displayparameter1(){
        console.log(this.parameter1)
    }
    displayparameter2(){
        console.log(this.parameter2)
    }
    displayparameter3(){
        console.log(this.parameter3)
    }
}
class nameinhertiance extends nameclass{
    constructor(parameter1, parameter2, parameter3, parameter4){
        super(parameter1, parameter2, parameter3);
        this.parameter4 = parameter4;
    }
    displayparameter4(){
        console.log(this.parameter4)
    }

}

var printinheritance = new  nameinhertiance("parameter1", "parameter2", "parameter3", "parameter4")
printinheritance.displayparameter1();
printinheritance.displayparameter2();
printinheritance.displayparameter3();
printinheritance.displayparameter4();