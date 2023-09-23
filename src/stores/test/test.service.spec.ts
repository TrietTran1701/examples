import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {Chance} from 'chance';
import {HttpErrorResponse, HttpParams, HttpRequest} from '@angular/common/http';
import {TestService} from './test.service';
import {QueryStringEncoderUtility} from '../../utilities/query-string-encoder.utility';
import {TestResponseModel} from './models/test-response.model';

describe('TestService', () => {
    const chance: Chance.Chance = new Chance();
    const errorStatusText: string = 'Server Error';
    const errorStatus: number = 500;
    let httpMock: HttpTestingController = null;
    let service: TestService = null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TestService],
            imports: [HttpClientTestingModule],
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(TestService);
    });

    afterEach(() => {
        httpMock.verify();

        httpMock = null;
        service = null;
    });

    describe('getTest', () => {
        const endpointUrl: string = 'todo/replace/with/api';
        const mockQueryParams: HttpParams = new HttpParams({
            encoder: new QueryStringEncoderUtility(),
            fromObject: {},
        });

        it('should be successful', async(() => {
            service.getTest().subscribe((responseModel: TestResponseModel) => {
                expect(responseModel).toEqual(jasmine.any(TestResponseModel));
            });

            const testRequest: TestRequest = httpMock.expectOne((req: HttpRequest<any>) => req.url === endpointUrl);

            expect(testRequest.request.method).toEqual('GET');
            expect(testRequest.request.params).toEqual(mockQueryParams);

            testRequest.flush({replaceThisWithExpectedData: chance.string()});
        }));

        it('should error', async(() => {
            service.getTest().subscribe((responseModel: HttpErrorResponse) => {
                expect(responseModel).toEqual(jasmine.any(HttpErrorResponse));
                expect(responseModel.statusText).toBe(errorStatusText);
                expect(responseModel.status).toBe(errorStatus);
            });

            const testRequest: TestRequest = httpMock.expectOne((req) => req.url === endpointUrl);

            testRequest.flush({}, {status: errorStatus, statusText: errorStatusText});
        }));
    });
});
