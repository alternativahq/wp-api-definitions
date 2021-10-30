const wp_prefix:string = "WP/"
const tenant_prefix:string = "TENANT/"

export const 
EVENT_SOURCE_TENANT_CREATE:string = wp_prefix+tenant_prefix + "create", 
EVENT_SOURCE_TENANT_CREATED:string = wp_prefix+tenant_prefix + "created", 
EVENT_SOURCE_TENANT_UPDATE:string = wp_prefix+tenant_prefix + "update", 
EVENT_SOURCE_TENANT_UPDATED:string = wp_prefix+tenant_prefix + "updated", 
EVENT_SOURCE_TENANT_DELETE:string = wp_prefix+tenant_prefix + "delete",
EVENT_SOURCE_TENANT_DELETED:string = wp_prefix+tenant_prefix + "deleted",
EVENT_SOURCE_TENANT_PURGE:string = wp_prefix+tenant_prefix + "purge",
EVENT_SOURCE_TENANT_PURGED:string = wp_prefix+tenant_prefix + "purged";