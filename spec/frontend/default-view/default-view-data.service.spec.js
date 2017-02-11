describe('default view data service', () => {
  const defaultViewMessage = 'Hello mongo';
  let defaultViewDataService = {};
  let $httpBackend;
  let DATA_URL;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject((_defaultViewDataService_, _$httpBackend_, _DATA_URL_) => {
    defaultViewDataService = _defaultViewDataService_;
    $httpBackend = _$httpBackend_;
    DATA_URL = _DATA_URL_;
  }));

  it('should return default message...', () => {
    let response;

    $httpBackend.expect('GET', DATA_URL)
    .respond(200, defaultViewMessage);

    defaultViewDataService.getDefaultViewMessage()
    .then((data) => {
      response = data;
    });

    $httpBackend.flush();

    expect(response).toEqual(defaultViewMessage);
  });

  it('should handle error...', () => {
    let response;

    $httpBackend.expect('GET', DATA_URL)
    .respond(500);

    defaultViewDataService.getDefaultViewMessage()
    .then((data) => {
      response = data;
    });

    $httpBackend.flush();

    expect(response).toEqual('error');
  });
});
