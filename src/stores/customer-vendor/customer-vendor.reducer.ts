import {ICustomerVendorReducerState} from './models/i-customer-vendor-reducer-state';
import {IAction} from '../i-action';
import {CustomerVendorAction, CustomerVendorActionUnion} from './customer-vendor.action';
import {CustomerVendorResponseModel} from './models/customer-vendor-response.model';

// Version: __version__(noCase)
// Description: __description__(noCase)

export class CustomerVendorReducer {
    public static readonly initialState: ICustomerVendorReducerState = {
        isLoadingCustomerVendor: false,
        customerVendor: null,
    };

    public static reducer(state: ICustomerVendorReducerState = CustomerVendorReducer.initialState, action: IAction<CustomerVendorActionUnion>): ICustomerVendorReducerState {
        switch (action.type) {
            case CustomerVendorAction.LOAD_CUSTOMER_VENDOR:
                return {
                    ...state,
                    isLoadingCustomerVendor: true,
                };
            case CustomerVendorAction.LOAD_CUSTOMER_VENDOR_SUCCESS:
                return {
                    ...state,
                    isLoadingCustomerVendor: false,
                    customerVendor: action.payload as CustomerVendorResponseModel,
                };
            default:
                return state;
        }
    }

}
