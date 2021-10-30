import { WodoEventName } from "./wodo.event.catalog";

export class WodoEvent {

    tenantId: number;
    correlationId: string;
    senderId: string;
    attributes?: Array<any>;
    wodoEventName: WodoEventName
    payload: any;

    constructor(tenantId: number,correlationId: string, senderId: string,  wodoEventName: WodoEventName, payload: any, attributes?: Array<any>) {
        
        this.tenantId = tenantId;
        this.correlationId = correlationId;
        this.senderId = senderId;
        this.attributes = attributes;
        this.wodoEventName = wodoEventName;
        this.payload = payload;
    }


}