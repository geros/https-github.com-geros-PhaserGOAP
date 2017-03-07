export default class Action{
	constructor(name, cost){
	    this.name = name;
	    this.agent = undefined;
	    this.effects = {};
	    this.preconditions = {};

	    this.cost = cost;
	} 

	addEffect(name, value) {
    	this.effects[name] = value;
	}

	addPrecondition(name, value) {
    	this.preconditions[name] = value;
	}

	execute() {
    	console.warn(this.name + ": You might want to override execute for me :P");
	}

 	canExecute() {
	    return true;
	}
}	
