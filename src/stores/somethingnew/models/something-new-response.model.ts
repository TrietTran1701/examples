import {BaseModel} from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
    }
 */
export class SomethingNewResponseModel extends BaseModel {

    constructor(data: Partial<SomethingNewResponseModel>) {
        super();

        this.update(data);
    }

    public update(data: Partial<SomethingNewResponseModel>): void {
        super.update(data);
    }

}
