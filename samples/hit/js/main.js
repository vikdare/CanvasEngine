var canvas = CE.defines("canvas_id").
        extend(Hit).
        ready(function() {
            canvas.Scene.call("MyScene");
        });
            
canvas.Scene.New({
    name: "MyScene",

    materials: {
        images: {
            "black_box": "images/black.png",
            "green_box": "images/green.png",
            "silver_box": "images/silver.png"
        }
    },
    
    ready: function(stage) {
        var self = this;
        
        function _black(x, y) {
            var entity = Class.New("Entity", [stage]);
            entity.rect(641);
            entity.position(x, y);
            entity.el.drawImage("black_box");
            stage.append(entity.el);
            return entity;
        }

        function _green(x, y) {
            var entity = Class.New("Entity", [stage]);
            entity.rect(641);
            entity.position(x, y);
            entity.el.drawImage("green_box");
            stage.append(entity.el);
            return entity;
        }

        function _silver(x, y) {
            var entity = Class.New("Entity", [stage]);
            entity.rect(641);
            entity.position(x, y);
            entity.el.drawImage("silver_box");
            stage.append(entity.el);
            return entity;
        }
        
//        this.box1 = _black(0, 0);
//        this.box3 = _green(0, 0);
        this.box2 = _silver(0, 0);
        //this.box2 = _entity(200, 50);
        
    },
    render: function(stage) {

//        this.box1.move(2); // Position X + 2
        
//        this.box2.hit([this.box1], function(state, el) {
//            if (state == "over") {
//                el.opacity = 0.5;
//            }
//            else {
//                el.opacity = 1;
//            }
//        });
        stage.refresh();
    }
});