export default  class IdleState{
    constructor(entity){
    	this._entity = entity;
	}

	enter() {
        console.log(this._entity.name + " enters Action state");
    };

    leave() {
        console.log(this._entity.name + " leaves Action state");
    };

    update() {
    	var plan = this._entity.plan();

	    if(plan.length > 0) {
	        this._entity._current_plan = plan;
	        this._entity.sm.enter("moving");
	    }
    }
}