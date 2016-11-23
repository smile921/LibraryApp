import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('library');
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