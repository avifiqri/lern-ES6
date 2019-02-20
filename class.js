class nameclass{
    constructor(parameter1, parameter2,parameter3) {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
        this.parameter3 = parameter3
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
var namevariabel = new nameclass("parameter1", "parameter2", "parameter3")
// console.log(namevariabel)
// jika pakai console.log untuk mencetak maka akan terjadi erorr,
namevariabel.displayparameter1();
namevariabel.displayparameter2();
namevariabel.displayparameter3();