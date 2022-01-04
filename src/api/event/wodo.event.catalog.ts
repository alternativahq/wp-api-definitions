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
EVENT_TENANT_PURGED:WodoEventName =  {id:8, name:"TenantPurged"},

EVENT_GAMING_LOUNGE_CREATE:WodoEventName =  {id:51, name:"GamingLoungeCreate"}, 
EVENT_GAMING_LOUNGE_CREATED:WodoEventName = {id:52, name:"GamingLoungeCreated"},
EVENT_GAMING_LOUNGE_UPDATE:WodoEventName =  {id:53, name:"GamingLoungeUpdate"},
EVENT_GAMING_LOUNGET_UPDATED:WodoEventName = {id:54, name:"GamingLoungeUpdated"},
EVENT_GAMING_LOUNGE_DELETE:WodoEventName =  {id:55, name:"GamingLoungeDelete"},
EVENT_GAMING_LOUNGE_DELETED:WodoEventName = {id:56, name:"GamingLoungeDeleted"},
EVENT_GAMING_LOUNGE_PURGE:WodoEventName =   {id:57, name:"GamingLoungePurge"},
EVENT_GAMING_LOUNGE_PURGED:WodoEventName =  {id:58, name:"GamingLoungePurged"},

EVENT_BLOCKCHAIN_TRANSACTION_SEND:WodoEventName =  {id:101, name:"BlockchainTransactionSend"}, 
EVENT_BLOCKCHAIN_TRANSACTION_INITIATED:WodoEventName = {id:102, name:"BlockchainTransactionInitiated"},
EVENT_BLOCKCHAIN_TRANSACTION_SENT:WodoEventName =  {id:103, name:"BlockchainTransactioneSent"};