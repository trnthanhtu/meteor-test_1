// New collection list
Playerlists  = new Mongo.Collection('list');

if (Meteor.isClient) {
  Template.listplayers.helpers({
    'list' : function(){
      return Playerlists.find()
    },
    'selectedClass' : function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');

      if (playerId == selectedPlayer) {
        return 'selected'
      }
    }
  })

  Template.listplayers.events({
    'click .player': function(){
      var playerId = this._id;
      var selectedPlayer = Session.set('selectedPlayer', playerId);
    }
  })
}

if (Meteor.isServer) {

}
