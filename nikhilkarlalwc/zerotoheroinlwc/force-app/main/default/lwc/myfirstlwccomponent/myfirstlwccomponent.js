import { LightningElement } from 'lwc';

export default class Myfirstlwccomponent extends LightningElement {

    callme(){
        alert('sfdx force:org:create -a lwcScratchOrgOne -d 30 -f config/project-scratch-def.json -s');
    console.log('username: test-nrd6iul7mfhl@example.com');
    console.log('sfdx force:org:open');
    }

}