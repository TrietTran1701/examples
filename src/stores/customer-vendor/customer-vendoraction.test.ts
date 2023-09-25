import {IAction} from '../i-action';
import {CustomerVendorResponseModel} from './models/customer-vendor-response.model';

export type CustomerVendorActionUnion = void | CustomerVendorResponseModel;

export class CustomerVendorAction {

    public static readonly LOAD_CUSTOMER_VENDOR: string = 'CustomerVendorAction.LOAD_CUSTOMER_VENDOR';
    public static readonly LOAD_CUSTOMER_VENDOR_SUCCESS: string = 'CustomerVendorAction.LOAD_CUSTOMER_VENDOR_SUCCESS';

    public static loadCustomerVendor(): IAction<void> {
        return {
            type: CustomerVendorAction.LOAD_CUSTOMER_VENDOR,
        };
    }

    public static loadCustomerVendorSuccess(model: CustomerVendorResponseModel): IAction<CustomerVendorResponseModel> {
        return {
            type: CustomerVendorAction.LOAD_CUSTOMER_VENDOR_SUCCESS,
            payload: model,
        };
    }

}
