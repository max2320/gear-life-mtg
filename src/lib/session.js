export default class Session {
  players = {
    order: [],
    list: {}
  };

  constructor(){
    this.recoverySession();
  }

  recoverySession(){
    if(localStorage.getItem('players')){
      this.players = JSON.parse(localStorage.getItem('players'));
    }
  }

  updateSession(){
    if(JSON.stringify(localStorage.getItem('players')) !== JSON.stringify(this.players)){
      localStorage.setItem('players', JSON.stringify(this.players));
    }
  }

  update(players){
    this.players = players;
    this.updateSession();
  }

  getPlayers(){
    return this.players;
  }
}
