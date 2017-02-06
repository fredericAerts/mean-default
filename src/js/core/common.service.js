(() => {
  angular
    .module('app.core')
    .factory('common', common);

  /* @ngInject */
  function common($q) {
    const service = {
      $q,
    };

    return service;
  }
})();
