import Ember from 'ember';

export default Ember.Route.extend({
 
	model(){		 
		return this.store.createRecord('contact');
	},
	actions:{
		sendMessage(newContact){		 
			//debugger;			 
		 	newContact.save().then(()=> this.transitionTo('index'));
		},
		willTransition(){
			let model = this.controller.get('model');
			if(model.get('isNew')){
				model.destroyRecord();
			}
		}
	}
	
});
