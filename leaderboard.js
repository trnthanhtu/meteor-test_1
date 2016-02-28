// New collection list
Playerlists  = new Mongo.Collection('list');

if (Meteor.isClient) {
  Template.listplayers.helpers({
    'list' : function(){
      return Playerlists.find()
    }
  })

  Template.listplayers.events({
    'click .player': function(){
      //Add event function
      console.log('You clicked something');
    }
  })
}

if (Meteor.isServer) {

}
