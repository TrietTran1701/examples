import {ICustomerMasterReducerState} from './models/i-customer-master-reducer-state';
import {IAction} from '../i-action';
import {CustomerMasterAction, CustomerMasterActionUnion} from './customer-master.action';
import {CustomerMasterResponseModel} from './models/customer-master-response.model';

// Version: __version__(noCase)
// Description: __description__(noCase)

export class CustomerMasterReducer {
    public static readonly initialState: ICustomerMasterReducerState = {
        isLoadingCustomerMaster: false,
        customerMaster: null,
    };

    public static reducer(state: ICustomerMasterReducerState = CustomerMasterReducer.initialState, action: IAction<CustomerMasterActionUnion>): ICustomerMasterReducerState {
        switch (action.type) {
            case CustomerMasterAction.LOAD_CUSTOMER_MASTER:
                return {
                    ...state,
                    isLoadingCustomerMaster: true,
                };
            case CustomerMasterAction.LOAD_CUSTOMER_MASTER_SUCCESS:
                return {
                    ...state,
                    isLoadingCustomerMaster: false,
                    customerMaster: action.payload as CustomerMasterResponseModel,
                };
            default:
                return state;
        }
    }

}
