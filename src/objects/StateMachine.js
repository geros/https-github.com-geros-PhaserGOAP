class StateMachine {
  constructor () {
    this.states = {};
    this.current = null;
  }

  add(name, state){
    this.states[name] = state;
  }

  enter(name){
  if(this.current) {
   this.current.leave();
  }

  this.current = this.states[name];
  this.current.enter();
  }

  update(){
    if(this.current){
      this.current.update();
    }
  }
} 

export default StateMachine;