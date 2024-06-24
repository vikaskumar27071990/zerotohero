import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {

fullcourse='SDFC';
title='Lwc';
mychangehandler(event){
    this.title=event.target.value;  
}

    @track address={
    city:'blore',pincode:560015,country:'India'
}

trackhandler(event){
    this.address.city=event.target.value;
    // this.address={...this.address, 'city':event.target.value};
}

    address1={
    city:'pune',pincode:560015,country:'India'
}

trackhandler1(event){
    this.address1.city=event.target.value;
    this.address1={...this.address1, 'city':event.target.value};
}

users=['jhon','sinha'];

num1=10;
num2=20;

get firstuser(){
//alert('=====>' +this.users[0].toUpperCase());
return this.users[0].toUpperCase();

}

get mul(){
return this.num1*this.num2;
//alert('=====>' +this.num1*this.num2);
}

isvisibale=false
handlerClick(){
this.isvisibale=true
}

name
welcome
bye
changeHandler(event){
this.name=event.target.value
}

get helloMethod(){
//return this.name==='Hello'?this.welcome:this.bye;
return this.name==='hello'
}

carList=['Mustang','Audi','BMW']

ceoList=[
{
id:1,
company:"Google",
name:"Sunder Pichai"
},
{
id:2,
company:"Apple Inc.",
name:"Tim Cook"
},
{
id:3,
company:"Facebook",
name:"Mark Zukerberg"
},
{
id:4,
company:"Amazon",
name:"Jeff Bezos"
}

]
}