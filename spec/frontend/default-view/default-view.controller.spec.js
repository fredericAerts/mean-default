describe('default view controller', () => {
  let vm;
  let $controller;
  let defaultViewDataService;
  let common;
  let logger;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject((_$controller_, _defaultViewDataService_, _common_, _logger_) => {
    $controller = _$controller_;
    defaultViewDataService = _defaultViewDataService_;
    common = _common_;
    logger = _logger_;
  }));

  it('should fetch and bind default message on activation...', () => {
    spyOn(defaultViewDataService, 'getDefaultViewMessage').and.callFake(() => {
      const deferred = common.$q.defer();
      deferred.resolve('Hello mongo');
      return deferred.promise;
    });
    vm = $controller('DefaultViewController', { defaultViewDataService, common, logger });
    common.$rootScope.$apply();
    expect(vm.helloMongo).toBe('Hello mongo');
  });

  it('should log in debug mode when activated...', () => {
    spyOn(logger, 'debug');
    vm = $controller('DefaultViewController', { defaultViewDataService, common, logger });
    common.$rootScope.$apply();
    expect(logger.debug).toHaveBeenCalledWith('Activated Default View');
  });
});
