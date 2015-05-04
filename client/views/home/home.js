Template.Home.rendered = function() {

};

Template.Home.events({
	"click .english":function (){
		TAPi18n.setLanguage('en');
	},
	"click .french":function (){
		TAPi18n.setLanguage('fr');
	}
});

Template.Home.helpers({

		home_page: function () {
			return i18n('home_page')
		},

		hello_world: function () {
				return i18n('hello_world')
			}
});
