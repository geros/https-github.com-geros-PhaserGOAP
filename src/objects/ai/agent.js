import StateMachine from '../StateMachine';
import IdleState from '../states/idle';
import MovingState from '../states/moving';
import ActionState from '../states/action';

export default  class Agent{
    constructor(name){
        this.name = name;
        this.actions = [];
        this.currentActions = [];

        this.state = {};

        this.sm = new StateMachine();

        this.sm.add("idle", new IdleState(this));
        this.sm.add("moving", new MovingState(this));
        this.sm.add("action", new ActionState(this));

        this.sm.enter("idle");
    }


    update() {
        this.sm.update();
    }

    addAction(action) {
        action.agent = this;

        this.actions.push(action);
    }

    applyAction(action) {
        for(var effect in action.effects) {
            this.setState(effect, action.effects[effect]);
        }
    }

    setState(name, value) {
        this.state[name] = value;
    }

    is(name, value) {
        return this.state[name] == value;
    }

    getUsableActions() {
        // get all actions with cleared preconditions
        return this.actions.filter(function(action) {
            return action.canExecute();
        });
    }
}
