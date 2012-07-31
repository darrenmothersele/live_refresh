(function ($) {

  Drupal.behaviors.liveRefresh = {
    attach: function (context, settings) {  
      var refreshId = setInterval(function() {
        $.ajax({
          url: settings.basePath + 'live-refresh-ajax/' + Drupal.settings.liveRefresh.lastCreated,
          dataType: 'json',
          success: function(data) {
            if (data.lastCreated) {
              Drupal.settings.liveRefresh.lastCreated = data.lastCreated;
              $('#live-refresh-wrapper', context).prepend(data.build);
            }
          },
        });
      }, settings.liveRefresh.refreshRate);
    }
  };

})(jQuery);