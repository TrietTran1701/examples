import {BaseModel} from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
    }
 */
export class CustomerMasterResponseModel extends BaseModel {

    constructor(data: Partial<CustomerMasterResponseModel>) {
        super();

        this.update(data);
    }

    public update(data: Partial<CustomerMasterResponseModel>): void {
        super.update(data);
    }

}
