// New collection list
Playerlists  = new Mongo.Collection('list');

if (Meteor.isClient) {
  Template.listplayers.helpers({
    'list' : function(){
      return Playerlists.find({}, {sort: {score: -1}})
    },
    'selectedClass' : function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');

      if (playerId == selectedPlayer) {
        return 'selected'
      }
    },
    'disable': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');

      if (playerId == selectedPlayer) {
        return 'false'
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
      Playerlists.update(selectedPlayer, {$inc: {score: 10}});
    },
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      Playerlists.update(selectedPlayer, {$inc: {score: -10}});
    },
    'click .remove': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      Playerlists.remove(selectedPlayer);
    }
  });

  // Add Template for submit event
  Template.addPlayerForm.events({
    'submit form': function(event){
      event.preventDefault();
      var params = {
        name: $('#playerName').val(),
        score: parseInt($('#score').val())
      };

      // Insert to database

      Playerlists.insert(params);
    }

  });
}

if (Meteor.isServer) {

}
