// New collection list
Playerlists  = new Mongo.Collection('list');

if (Meteor.isClient) {
  Template.listplayers.helpers({
    'list' : function(){
      return Playerlists.find()
    }
  })
}

if (Meteor.isServer) {

}
