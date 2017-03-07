var MaterialStorage = {
    Ore: 10
};

var ToolsDeposit = {
    PickAxe: 10
};

var positions = {
    ore: {
        x: 800,
        y: 600
    },

    tool_deposit: {
        x: 800,
        y: 200
    },

    material_depot: {
        x: 100,
        y: 600
    },

    forge: {
        x: 100,
        y: 300
    },

    miner_spawn: {
        x: 300,
        y: 300
    },

    blacksmith_spawn: {
        x: 300,
        y: 200
    }
}


// We export all sections using their respective name
export {positions, MaterialStorage, ToolsDeposit};