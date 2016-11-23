import Ember from 'ember'; 

export default Ember.Controller.extend({
	isDisabled2:Ember.computed('emailAddress',function(){
		 return this.get('emailAddress') === '';
	}),
	isDisabled1: Ember.computed.empty('emailAddress'),
	emailAddress:'',
	actualEmailAddress:Ember.computed('emailAddress',function(){
		console.log('actualEmailAddress function is called:',this.get('emailAddress'));
	}),
	emailAdressChanged:Ember.observer('emailAddress',function(){
		 console.log('observer is called ', this.get('emailAddress'));
	}),
	isValid:Ember.computed.match('emailAddress',/^.+@.+\..+$/),
	isDisabled:Ember.computed.not('isValid'),
	actions :{
		saveInvitation(){
			const email = this.get('emailAddress');

			const newInvitation  =  this.store.createRecord('invitation',{email:email});
			newInvitation.save().then( (response)=>{
				// body...
				console.log('Email address is saved.'+response);
				alert(`saving the following email address is in progress ${this.get('emailAddress')}`);
				this.set('responseMessage',`Thank you ,we ave just saved your email address ${this.get('emailAddress')}`);
				this.set('emailAddress','');
			});
			
		}
	}
});
