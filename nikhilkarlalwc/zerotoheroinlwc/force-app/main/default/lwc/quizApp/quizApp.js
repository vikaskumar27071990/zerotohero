import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
selected={}//for sorting answers

correctAnswers=0
isSubmitted=false
get allNotSelected(){
    //Length of selected Questions                //Total Number Of Question 
   return !(Object.keys(this.selected).length === this.myQuestions.length)
}

get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
        'slds-text-color_success':'slds-text-color_error'}`
}
    myQuestions=[
        {
        id:"Question1",
        question:"Which of the following is not a primitive data type in most programming languages?",
        answers:{a:"Array",b:"String",c:"Integer"},
        correctAnswer:"a"
    },
    {
        id:"Question2",
        question:"In object-oriented programming, which keyword is used to signify that a method cannot be overridden in derived classes?",
        answers:{a:"String",b:"final",c:"Array"},
        correctAnswer:"b"
    },
    {
        id:"Question3",
        question:"Which sorting algorithm typically gives the worst performance for sorting a list of n elements?",
        answers:{a:"Merge Sort",b:"Quick Sort",c:" Bubble Sort"},
        correctAnswer:"c"
    }
]


changeHandler(event){
console.log("name",event.target.name);
console.log("value",event.target.value);
//use this ot below 2 any one =======>const {name,value}=event.target
const name=event.target.name
const value=event.target.value
this.selected={...this.selected,[name]:value}
}
//NOTE:Why [name]:value
//name - is static key which will generate output like {name:"x"}
//[name] - is a dynamic key, if name has value "y" then it will generate output like {"y":"x"}




submitHandler(event){
event.preventDefault()
//NOTE===>   this.myQuestions.filter(item=>"Selected answer a"==="correct answer c")
           let correct= this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
            this.correctAnswer=correct.length
            this.isSubmitted=true
            console.log("this.correctAnswer",this.correctAnswer)
}

resetHandler(){
    this.selected={}
    this.correctAnswers=0
    this.isSubmitted=false
}
}