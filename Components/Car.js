AFRAME.registerComponent("car-model", {
    schema: {
        gltfmodel: {type: "string", default: "Assets/car/scene.gltf"},
    },

    init: function() {
        // Do something when component first attached.
        this.el.setAttribute("gltf-model", this.data.gltfmodel);
        const position = { x: 0, y: 0, z: 0 };
        const rotation = { x: 0, y: 50, z: 0 };
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
    }
});