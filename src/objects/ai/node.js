export default class Node{
	constructor(parent, action, cost, state){
	    this.parent = parent;
	    this.action = action;
	    this.cost = cost;
	    this.state = state;
	}
}
