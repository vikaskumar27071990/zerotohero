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
}