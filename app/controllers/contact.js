import Ember from 'ember';


export default Ember.Controller.extend({
	'message':'',
	'isNotDisabled':Ember.computed.and('validEmail','validMessage'),
	'isDisabled':Ember.computed.not('isNotDisabled'),
	'validEmail':Ember.computed.match('emailAddress',/^.+@.+\..+$/),
	'emailAddress':'',
	'messageLength':Ember.computed('message',function(){
		return this.get('message').length;
	}),
	'validMessage':Ember.computed.gte('messageLength',5),
	 
	actions:{
		sendMessage(){
			//alert(`We got your message and we’ll get in touch soon ${this.get('message')}`);
			//let model =  new Contact();
			debugger;
			let model =  this.store.createRecord('contact');
			model.set('email',this.get('emailAddress'));
			model.set('message',this.get('message'));
		 	model.save().then(()=> this.transitionToRoute('index'));
		} 
	}
});
