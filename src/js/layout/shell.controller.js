(() => {
  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  /* @ngInject */
  function ShellController(logger) {
    const vm = this;
    vm.myVar = 'Hello Shell!';

    activate();

    function activate() {
      logger.debug('Actived Shell view');
    }

    /*  Functions
        ================================================ */
  }
})();
