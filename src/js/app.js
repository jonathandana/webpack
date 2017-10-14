 import '../scss/main.scss';
const $ = require('jquery');

export class hello{
    constructor(name){
        this.name = name;
        alert(this.name);
    }

}

$('.btn').click(()=>{
    new hello('jonathan');
})



