const wp_prefix:string = "wodo/platform/"
const tenant_prefix:string = "tenant/"
const gaming_prefix:string = "gaming/"
const gaming_lounge_prefix:string = gaming_prefix+"lounge/"
const blockchain_prefix:string = "blockchain/"
const blockchain_transaction_prefix:string = blockchain_prefix+"transaction/"


export const 
EVENT_SOURCE_TENANT_CREATE:string = wp_prefix+tenant_prefix + "create", 
EVENT_SOURCE_TENANT_CREATED:string = wp_prefix+tenant_prefix + "created", 
EVENT_SOURCE_TENANT_UPDATE:string = wp_prefix+tenant_prefix + "update", 
EVENT_SOURCE_TENANT_UPDATED:string = wp_prefix+tenant_prefix + "updated", 
EVENT_SOURCE_TENANT_DELETE:string = wp_prefix+tenant_prefix + "delete",
EVENT_SOURCE_TENANT_DELETED:string = wp_prefix+tenant_prefix + "deleted",
EVENT_SOURCE_TENANT_PURGE:string = wp_prefix+tenant_prefix + "purge",
EVENT_SOURCE_TENANT_PURGED:string = wp_prefix+tenant_prefix + "purged",
EVENT_SOURCE_GAMING_LOUNGE_CREATE:string = wp_prefix+gaming_lounge_prefix + "create", 
EVENT_SOURCE_GAMING_LOUNGE_CREATED:string = wp_prefix+gaming_lounge_prefix + "created", 
EVENT_SOURCE_GAMING_LOUNGE_UPDATE:string = wp_prefix+gaming_lounge_prefix + "update", 
EVENT_SOURCE_GAMING_LOUNGE_UPDATED:string = wp_prefix+gaming_lounge_prefix + "updated", 
EVENT_SOURCE_GAMING_LOUNGE_DELETE:string = wp_prefix+gaming_lounge_prefix + "delete",
EVENT_SOURCE_GAMING_LOUNGE_DELETED:string = wp_prefix+gaming_lounge_prefix + "deleted",
EVENT_SOURCE_GAMING_LOUNGE_PURGE:string = wp_prefix+gaming_lounge_prefix + "purge",
EVENT_SOURCE_GAMING_LOUNGE_PURGED:string = wp_prefix+gaming_lounge_prefix + "purged",
EVENT_SOURCE_BLOCKCHAIN_TRANSACTION_SEND:string = wp_prefix+blockchain_transaction_prefix + "send", 
EVENT_SOURCE_BLOCKCHAIN_TRANSACTION_INITIATED:string = wp_prefix+blockchain_transaction_prefix + "initiated", 
EVENT_SOURCE_BLOCKCHAIN_TRANSACTION_SENT:string = wp_prefix+blockchain_transaction_prefix + "sent"; 