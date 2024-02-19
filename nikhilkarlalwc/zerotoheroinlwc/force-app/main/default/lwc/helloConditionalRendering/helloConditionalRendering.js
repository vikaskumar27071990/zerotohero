import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible=false;
    name;
    handlerClick(){
      this.isVisible=true;
    }

    mychangehandler(event){
        this.name=event.target.value;
    }

    get viewmydata(){
return this.name==='hello';
    }

}