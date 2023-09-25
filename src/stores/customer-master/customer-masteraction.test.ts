import {IAction} from '../i-action';
import {CustomerMasterResponseModel} from './models/customer-master-response.model';

export type CustomerMasterActionUnion = void | CustomerMasterResponseModel;

export class CustomerMasterAction {

    public static readonly LOAD_CUSTOMER_MASTER: string = 'CustomerMasterAction.LOAD_CUSTOMER_MASTER';
    public static readonly LOAD_CUSTOMER_MASTER_SUCCESS: string = 'CustomerMasterAction.LOAD_CUSTOMER_MASTER_SUCCESS';

    public static loadCustomerMaster(): IAction<void> {
        return {
            type: CustomerMasterAction.LOAD_CUSTOMER_MASTER,
        };
    }

    public static loadCustomerMasterSuccess(model: CustomerMasterResponseModel): IAction<CustomerMasterResponseModel> {
        return {
            type: CustomerMasterAction.LOAD_CUSTOMER_MASTER_SUCCESS,
            payload: model,
        };
    }

}
