import {CustomerMasterResponseModel} from './customer-master-response.model';

/**
 * (noCase)       = CustomerMaster
 * (camelCase)    = customerMaster
 * (constantCase) = CUSTOMER_MASTER
 * (dotCase)      = customer.master
 * (kebabCase)    = customer-master
 * (lowerCase)    = customermaster
 * (pascalCase)   = CustomerMaster
 * (pathCase)     = customer/master
 * (sentenceCase) = Customer master
 * (snakeCase)    = customer_master
 * (titleCase)    = Customer Master
 */
export interface ICustomerMasterReducerState {
    readonly isLoadingCustomerMaster: boolean;
    readonly customerMaster: CustomerMasterResponseModel;
}
