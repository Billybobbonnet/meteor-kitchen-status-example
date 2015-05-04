var pageSession = new ReactiveDict();
Template.status.created = function(){
  //retryTime.set("_retryTime",(new Date).getTime());
};
Template.status.rendered = function() {
  Meteor.setInterval(function () {
    var timeDiff   = Meteor.status().retryTime - (new Date).getTime()
    var _retryTime = Math.round(timeDiff / 1000)
    pageSession.set("_retryTime",_retryTime)
  }, 500)
};
Template.status.events({
  'click a.alert-link': function (e) {
    e.preventDefault()
    Meteor.reconnect()
  }
});

Template.status.helpers({
  connected: function () {
    return Meteor.status().connected
  },

  message: function () {
    return TAPi18n.__('meteor_status', { context: Meteor.status().status })
  },

  extraMessage: function () {
    if (Meteor.status().status === 'waiting')
    return TAPi18n.__('meteor_status_reconnect_in', { count: pageSession.get("_retryTime") })
  },

  showReconnect: function () {
    return _.contains(['waiting', 'offline'], Meteor.status().status)
  },

  reconnectLabel: function () {
    return TAPi18n.__('meteor_status_try_now', { context: Meteor.status().status })
  },

});
