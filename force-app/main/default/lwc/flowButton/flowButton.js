import { LightningElement, api, wire } from 'lwc';
import LightningModal from 'lightning/modal';
import { CurrentPageReference } from 'lightning/navigation';
import { getRecordId } from 'lightning/uiRecordApi';


export default class FlowButton extends LightningModal {

    /* STANDARD ATTRIBUTES */
    @wire(CurrentPageReference) pageRef;

    /* FLOW PROPERTIES */
    @api header;
    @api flowName;
    @api buttonLabel;
    @api buttonAlign;
    @api inputVariables;
    @api passRecordId; 
    @api paramValue; 
    @api showFooter = false;
    @api showHeader = false;
    flowFinish = 'NONE';
    isShowModal = false;
    inputVariables;
   

    handleStatusChange(event) {
        if(event.detail.status === 'FINISHED'){
            //this.close('flow finished: '+this.flowName);
            this.isShowModal = false;
        }
    }

     hideModalBox() {  
        this.isShowModal = false;
    }

    //Test Flow Launch
    @api startFlow(){

        console.log(' this.pageRef.state>>'+ this.pageRef.state);
        this.recordId = this.pageRef.attributes.recordId;
        console.log(' this.paramValue>>'+ this.paramValue);
        
        if(this.passRecordId){
            this.inputVariables = [{
                name: this.paramValue,
                type: 'String',
                value: this.pageRef.attributes.recordId
            }];
        }
        
        this.isShowModal = true;
    }

    


}