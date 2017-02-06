(() => {
  angular
    .module('app.default-view')
    .controller('DefaultViewController', DefaultViewController);

  DefaultViewController.$inject = ['defaultViewDataService', 'common', 'logger'];

  function DefaultViewController(defaultViewDataService, common, logger) {
    const vm = this;
    vm.helloDefaultView = 'Hello Default View!';
    vm.helloMongo = '';

    activate();

    function activate() {
      const promises = [fetchDefaultViewDatabaseMessage()];
      return common.$q.all(promises).then(() => {
        logger.debug('Activated Default View ');
      });
    }

    function fetchDefaultViewDatabaseMessage() {
      return defaultViewDataService
        .getDefaultViewMessage()
        .then((message) => {
          vm.helloMongo = message;

          return vm.helloMongo;
        })
        .finally(() => {

        });
    }
  }
})();
