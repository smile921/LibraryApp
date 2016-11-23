import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('library');
	},
	setupController:function(controller,model) {
		// body...
		this._super(controller,model);
		controller.set('title','Create a new Library');
		controller.set('buttonLabel','Cteate');
	},
	renderTemplate(){
		this.render('libraries/form');
	},
	actions:{
		saveLibrary(newLibrary){
			//debugger; 
			newLibrary.save().then(()=>{
				this.transitionTo('libraries');
			});
		},
		willTransition(){
			//this.controller.get('modle').rollbackAttributes();
			let model = this.controller.get('model');
			if(model.get('isNew')){
				model.destroyRecord();
			}
		}
	}


});