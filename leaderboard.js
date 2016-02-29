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
      Session.set('selectedPlayer', playerId);
    },
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');

      // increase score +10
      Playerlists.update(selectedPlayer, {$inc: {score: 10} });
    }
  })
}

if (Meteor.isServer) {

}
