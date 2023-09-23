import {BaseModel} from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
    }
 */
export class TestResponseModel extends BaseModel {

    constructor(data: Partial<TestResponseModel>) {
        super();

        this.update(data);
    }

    public update(data: Partial<TestResponseModel>): void {
        super.update(data);
    }

}
