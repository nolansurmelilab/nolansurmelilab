class dayScene extends Phaser.Scene{constructor(){super({key:"dayScene"})}preload(){this.load.image("bg","/assets/img/game/hiking_background_textbox_green.png"),this.load.image("start","/assets/img/game/car.png"),this.load.image("tent","/assets/img/game/tent.png"),this.load.image("lake","/assets/img/game/lake_real.png"),this.load.image("mountain","/assets/img/game/mountain.png"),this.load.image("food","/assets/img/game/food_stall.png"),this.load.image("bg_night","/assets/img/game/night_background.png"),this.load.image("player","/assets/img/game/casper.png")}create(t,e,s){this.bg=this.add.sprite(0,0,"bg").setOrigin(0,0),this.start=this.add.image(100,380,"start").setScale(.6),this.tent=this.add.image(1050,400,"tent").setScale(.3),this.lake=this.add.image(300,210,"lake").setScale(1.3),this.mountain=this.add.image(500,660,"mountain").setScale(.5),this.food=this.add.image(750,200,"food").setScale(.3),this.player=this.physics.add.sprite(40,420,"player").setScale(.3),this.textBox=this.add.text(100,800,"Path Integration: The Hike",{fontFamily:"Arial",fontSize:22,color:"#000000"}),this.player.setCollideWorldBounds(!0),this.physics.world.enable([this.start,this.tent,this.lake,this.mountain,this.food]),this.counter=0,this.lakeText=!0,this.mountainText=!0,this.foodText=!0,this.tentText=!0}update(t,e){const s=this.input.keyboard.addKey("LEFT"),i=this.input.keyboard.addKey("RIGHT"),a=this.input.keyboard.addKey("UP"),o=this.input.keyboard.addKey("DOWN");s.isDown&&(this.player.setScale(-.3,.3),this.player.x-=5),i.isDown&&(this.player.setScale(.3,.3),this.player.x+=5),a.isDown&&(this.player.y-=5),o.isDown&&(this.player.y+=5),t>3e3&&(this.textBox.text="You're out on a fun camping trip with your friends. It's pretty sweltering outside - how about going to the lake first?"),this.physics.add.collider(this.player,this.lake,()=>{0==this.counter&&this.lakeText&&(this.counter=1,console.log(this.counter),this.lakeText=!1)}),this.physics.add.collider(this.player,this.mountain,()=>{1==this.counter&&this.mountainText&&(this.counter+=1,console.log(this.counter),this.mountainText=!1)}),this.physics.add.collider(this.player,this.food,()=>{2==this.counter&&this.foodText&&(this.counter+=1,this.foodText=!1)}),this.physics.add.collider(this.player,this.tent,()=>{3==this.counter&&this.tentText&&(this.counter+=1,this.tentText=!1)}),1==this.counter&&(this.textBox.text="That was refreshing! You're ready to take on the mountain.",this.lakeText=!1),2==this.counter&&(this.textBox.text="You've been reminded why you don't go hiking very often. That was EXHAUSTING.",this.textBoxz=this.add.text(100,850,"Let's get some food.",{fontFamily:"Arial",fontSize:22,color:"#000000"})),3==this.counter&&(this.textBox.text="That hit the spot. Let's set up camp!",this.textBoxz.destroy()),4==this.counter&&(this.textBox.text="Oh no!",this.scene["switch"]("nightScene"))}}export default dayScene;