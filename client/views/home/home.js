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

	
});
