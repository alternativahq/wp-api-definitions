export type WodoEventName = {
    id:number;
    name:string;
}

export const 
EVENT_TENANT_CREATE:WodoEventName =  {id:1, name:"TenantCreate"}, 
EVENT_TENANT_CREATED:WodoEventName = {id:2, name:"TenantCreated"},
EVENT_TENANT_UPDATE:WodoEventName =  {id:3, name:"TenantUpdate"},
EVENT_TENANT_UPDATED:WodoEventName = {id:4, name:"TenantUpdated"},
EVENT_TENANT_DELETE:WodoEventName =  {id:5, name:"TenantDelete"},
EVENT_TENANT_DELETED:WodoEventName = {id:6, name:"TenantDeleted"},
EVENT_TENANT_PURGE:WodoEventName =   {id:7, name:"TenantPurge"},
EVENT_TENANT_PURGED:WodoEventName =  {id:8, name:"TenantPurged"};