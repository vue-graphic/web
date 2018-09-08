webpackJsonp([1],{"/XH8":function(t,e){},"6+8O":function(t,e){},"7zck":function(t,e){},"9lH+":function(t,e){},JskG:function(t,e){},KS5K:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW");function s(t,e,a){var i=a.p5,s=a.sketch,n=a.canvasW,r=a.canvasH;this.p5=i,this.sketch=s,this.canvasW=n,this.canvasH=r,this.acceleration=s.createVector(0,0),this.velocity=s.createVector(s.random(-1,1),s.random(-1,1)),this.position=s.createVector(t,e),this.r=4,this.maxspeed=4,this.maxforce=.05}s.prototype.run=function(t){this.flock(t),this.update(),this.borders(),this.render()},s.prototype.applyForce=function(t){this.acceleration.add(t)},s.prototype.flock=function(t){var e=this.separate(t),a=this.align(t),i=this.cohesion(t);e.mult(1.5),a.mult(1),i.mult(1),this.applyForce(e),this.applyForce(a),this.applyForce(i)},s.prototype.update=function(){this.velocity.add(this.acceleration),this.velocity.limit(this.maxspeed),this.position.add(this.velocity),this.acceleration.mult(0)},s.prototype.seek=function(t){var e=this.p5.Vector.sub(t,this.position);e.normalize(),e.mult(this.maxspeed);var a=this.p5.Vector.sub(e,this.velocity);return a.limit(this.maxforce),a},s.prototype.render=function(){var t=this.sketch,e=this.r,a=t.map(this.velocity.mag(),0,this.maxspeed,0,200),i=this.velocity.heading()+t.radians(90);t.fill(200,200,200,a),t.noStroke(),t.push(),t.translate(this.position.x,this.position.y),t.rotate(i),t.beginShape(),t.vertex(0,2*-e),t.vertex(-e,2*e),t.vertex(e,2*e),t.endShape(t.CLOSE),t.pop()},s.prototype.borders=function(){var t=this.canvasH,e=this.canvasW,a=this.position,i=this.r;a.x,a.y;a.x<-i&&(a.x=e+i),a.y<-i&&(a.y=t+i),a.x>e+i&&(a.x=-i),a.y>t+i&&(a.y=-i)},s.prototype.separate=function(t){for(var e=this.sketch.createVector(0,0),a=0,i=0;i<t.length;i++){var s=this.p5.Vector.dist(this.position,t[i].position);if(s>0&&s<25){var n=this.p5.Vector.sub(this.position,t[i].position);n.normalize(),n.div(s),e.add(n),a++}}return a>0&&e.div(a),e.mag()>0&&(e.normalize(),e.mult(this.maxspeed),e.sub(this.velocity),e.limit(this.maxforce)),e},s.prototype.align=function(t){for(var e=this.sketch.createVector(0,0),a=0,i=0;i<t.length;i++){var s=this.p5.Vector.dist(this.position,t[i].position);s>0&&s<50&&(e.add(t[i].velocity),a++)}if(a>0){e.div(a),e.normalize(),e.mult(this.maxspeed);var n=this.p5.Vector.sub(e,this.velocity);return n.limit(this.maxforce),n}return this.sketch.createVector(0,0)},s.prototype.cohesion=function(t){for(var e=this.sketch.createVector(0,0),a=0,i=0;i<t.length;i++){var s=this.p5.Vector.dist(this.position,t[i].position);s>0&&s<50&&(e.add(t[i].position),a++)}return a>0?(e.div(a),this.seek(e)):this.sketch.createVector(0,0)};var n=s,r=window.innerWidth||200,o=window.innerHeight||200;function c(){this.boids=[]}c.prototype.run=function(){for(var t=0;t<this.boids.length;t++)this.boids[t].run(this.boids)},c.prototype.addBoid=function(t){this.boids.push(t)};var l={mounted:function(){var t=this;this.canvasW=r,this.canvasH=o;new p5(function(e){t.sketch=e,e.setup=t.setup,e.draw=t.draw,e.mouseDragged=t.mouseDragged},"canvas-container");setTimeout(function(){t.initFlock(10)},2e3)},data:function(){return{sketch:null,status:"stop",canvasW:null,canvasH:null}},computed:{},methods:{setup:function(){var t=this.sketch,e=this.canvasW,a=this.canvasH;this.canvasEle=t.createCanvas(e,a),this.flock=new c,this.initFlock(1)},draw:function(){var t=this.sketch,e=this.flock;t.background(50,50,50),e.run()},mouseDragged:function(){var t=this.sketch,e=this.flock,a=t.mouseX,i=t.mouseY;e.addBoid(new n(a,i,{p5:p5,sketch:t,canvasW:r,canvasH:o}))},initFlock:function(t){for(var e=this.sketch,a=this.canvasW,i=this.canvasH,s=this.flock,r=0;r<t;r++){var o=new n(a/2,i/2,{p5:p5,sketch:e,canvasW:a,canvasH:i});s.addBoid(o)}}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"canvas-container"}})},staticRenderFns:[]};var h={components:{Flocking:a("VU/8")(l,v,!1,function(t){a("vN8K")},null,null).exports},mounted:function(){},data:function(){return{}},computed:{},methods:{}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("flocking"),t._v(" "),a("div",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Flocking behavior")])]),t._v(" "),a("v-card-text",[t._v("is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.")])],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("v-card",[a("v-card-media",{attrs:{src:"https://i.kinja-img.com/gawker-media/image/upload/s--usj3b0wY--/c_fit,fl_progressive,q_80,w_636/ve69bswtlq7vqih5qrb1.gif",height:"300px"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("v-card",[a("v-card-text",[t._v("is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.")])],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-divider"),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("3 Main Rules")])]),t._v(" "),a("v-card-text",[t._v("\n          is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.\n        ")]),t._v(" "),a("v-card-text",[a("ul",[a("li",[t._v(" Alignment: steer towards the average heading of local flockmates ")]),t._v(" "),a("li",[t._v(" Separation: steer to avoid crowding local flockmates ")]),t._v(" "),a("li",[t._v(" Cohesion: steer to move toward the average position of local flockmates ")])])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(h,u,!1,function(t){a("XHoQ")},null,null).exports,p=window.innerWidth||200,f=window.innerHeight||200,m=3.141596,g={mounted:function(){var t=this;this.canvasW=p,this.canvasH=f;new p5(function(e){t.sketch=e,e.setup=t.setup},"canvas-container")},data:function(){return{sketch:null,canvasW:null,canvasH:null}},computed:{},methods:{setup:function(){var t=this.sketch,e=this.canvasW,a=this.canvasH;this.canvasEle=t.createCanvas(e,a),t.background(0),t.strokeWeight(0),this.drawFib(1,0,1,e/2,a/2)},drawFib:function(t,e,a,i,s){var n=this.sketch;a<20&&(n.fill(17*n.random(0,15),17*n.random(0,15),17*n.random(0,15)),1==a&&n.arc(i,s,2*t,2*t,3.926995,6.283192),a%4==1&&1!=a&&n.arc((i-=t)+t,s+t,2*t,2*t,m,4.712394),a%4==2&&n.arc(i+t,s+=e,2*t,2*t,1.570798,m),a%4==3&&n.arc(i+=e,s-=t-e,2*t,2*t,0,1.570798),a%4==0&&n.arc(i-=t-e,(s-=t)+t,2*t,2*t,4.712394,6.283192),this.drawFib(t+e,t,a+1,i,s))}}},x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"canvas-container"}})},staticRenderFns:[]};var w={components:{Fibonacci:a("VU/8")(g,x,!1,function(t){a("b42b")},null,null).exports},mounted:function(){},data:function(){return{}},computed:{},methods:{}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("fibonacci"),this._v(" "),e("div",[e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[this._v("Fibonacci Number")])]),this._v(" "),e("v-card-text",[this._v(" is a series of numbers where a number is found by adding up the two numbers before it. Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth.")])],1)],1)],1),this._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[e("v-card",[e("v-card-media",{attrs:{src:"https://i.pinimg.com/originals/32/d7/47/32d747bea24f4756dc4c5ffe61b36efd.jpg",height:"300px"}})],1)],1),this._v(" "),e("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[e("v-card",[e("v-card-text",[this._v("The spiral curve of the Nautilus sea shell follows the pattern of a spiral drawn in a Fibonacci rectangle.")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var y=a("VU/8")(w,_,!1,function(t){a("9lH+")},null,null).exports,b=window.innerWidth||200,k=window.innerHeight||200,H={mounted:function(){var t=this;this.canvasW=b,this.canvasH=k,this.R=b/50;new p5(function(e){t.sketch=e,e.setup=t.setup},"canvas-container")},data:function(){return{sketch:null,canvasW:null,canvasH:null,R:0,queue:[]}},computed:{},methods:{setup:function(){var t=this.sketch,e=this.canvasW,a=this.canvasH;this.canvasEle=t.createCanvas(e,a),t.background(30),t.strokeWeight(2),this.initDraw()},initDraw:function(){this.sketch;var t=this.canvasW,e=this.canvasH,a=this.R,i=t/2,s=e/2;this.queue.push({x:i,y:s,R:a}),this.drawNext(0)},drawNext:function(t){var e=this,a=this.sketch,i=this.queue;setTimeout(function(){if(i[t]){var s=i[t],n=s.x,r=s.y,o=s.R;a.get(0,0);if(i[t-1]){var c=i[t-1],l=c.x,v=c.y,h=c.R;a.push(),a.stroke(150),e.polygon(l,v,h,6),a.pop()}return a.push(),a.stroke(255,200,200),e.polygon(n,r,o,6),a.pop(),i[t].isFinished=!0,e.calculateNextPoly(n,r,i),t<i.length?e.drawNext(t+1):void 0}},100)},calculateNextPoly:function(t,e,a){for(var i=this.sketch,s=this.canvasW,n=this.canvasH,r=this.R,o=2*i.sin(3.141596/3)*r,c=function(t,e){return a.some(function(a){return i.abs(a.x-t)+i.abs(a.y-e)<o/2})},l=3.141596/6;l<6.283192;l+=3.141596/3){var v=t+i.cos(l)*o,h=e+i.sin(l)*o;v>-o&&v<s+o&&h>-o&&h<n+o&&!c(v,h)&&a.push({x:v,y:h,R:r})}},polygon:function(t,e,a){var i=this.sketch,s=i.CLOSE;i.fill(230),i.beginShape();for(var n=0;n<6.283192;n+=3.141596/3){var r=t+i.cos(n)*a,o=e+i.sin(n)*a;i.vertex(r,o)}i.endShape(s)}}},V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"canvas-container"}})},staticRenderFns:[]};var W={components:{Beehive:a("VU/8")(H,V,!1,function(t){a("JskG")},null,null).exports},mounted:function(){},data:function(){return{}},computed:{},methods:{}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("beehive"),t._v(" "),a("div",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Honeycomb")])]),t._v(" "),a("v-card-text",[t._v("is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.")]),t._v(" "),a("v-card-media",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Honeycomb-Process.png",height:"300px"}})],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",[a("v-card-title",[a("div",{staticClass:"headline"},[t._v("Convex Regular Polygons")])]),t._v(" "),a("v-card-media",{attrs:{src:"https://maxwelldemon.files.wordpress.com/2016/11/polyhedra.jpg?w=600&h=367",height:"300px"}}),t._v(" "),a("v-card-text",[t._v("Six equilateral triangles, four squares or three regular hexagons at a vertex, yielding the three regular tessellations.")])],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-divider"),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Hexagonal")])]),t._v(" "),a("v-card-media",{attrs:{src:"https://user-images.githubusercontent.com/5538753/45207306-410f8f00-b2ba-11e8-88e6-aaa89b1f7054.png",height:"300px"}}),t._v(" "),a("v-card-text",[a("ul",[a("li",[t._v(" Hexagonal structures are very strong. Honeycombs are usually constructed vertically (eg, up a wall) and so they must ve able to stand up firmly ")]),t._v(" "),a("li",[t._v("  the shared walls of each cell ensure that the downward physical stresses on the structure are spread evenly throughout ")])])])],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-divider"),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Hexagonal")])]),t._v(" "),a("v-card-media",{attrs:{src:"https://user-images.githubusercontent.com/5538753/45207306-410f8f00-b2ba-11e8-88e6-aaa89b1f7054.png",height:"300px"}}),t._v(" "),a("v-card-text",[a("ul",[a("li",[t._v(" Hexagonal structures are very strong. Honeycombs are usually constructed vertically (eg, up a wall) and so they must ve able to stand up firmly ")]),t._v(" "),a("li",[t._v("  the shared walls of each cell ensure that the downward physical stresses on the structure are spread evenly throughout ")])])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var R=a("VU/8")(W,F,!1,function(t){a("/XH8")},null,null).exports,C=a("Zrlr"),S=a.n(C),E=a("wxAW"),q=a.n(E),D=window.innerWidth||200,N=window.innerHeight||200,T=null,z=function(){function t(e,a,i,s,n){S()(this,t),this.x=e,this.y=a,this.sx=i,this.sy=s,this.sketch=n}return q()(t,[{key:"show",value:function(){var t=this.sketch;t.push(),t.translate(this.x,this.y,0);var e=0,a=6.283192/30;t.beginShape();for(var i=0;i<30;i++)t.vertex(0,0,0),t.vertex(T*t.cos(e),T*t.sin(e),-T),t.vertex(T*t.cos(e+a),T*t.sin(e+a),-T),e+=a;t.endShape(),t.fill(0),t.ellipse(0,0,5,5),t.pop()}},{key:"advance",value:function(){this.x+=this.sx,this.y+=this.sy,(this.x<0||this.x>D)&&(this.sx=-this.sx),(this.y<0||this.y>N)&&(this.sy=-this.sy)}}]),t}(),U={mounted:function(){var t=this;this.canvasW=D,this.canvasH=N;new p5(function(e){t.sketch=e,e.setup=t.setup,e.draw=t.draw},"canvas-container")},data:function(){return{sketch:null,canvasW:null,canvasH:null,R:0,cells:[],queue:[]}},computed:{},methods:{setup:function(){var t=this.cells,e=this.sketch,a=this.canvasW,i=this.canvasH;this.canvasEle=e.createCanvas(a,i,e.WEBGL),e.colorMode(e.HSB,1),e.noStroke(),T=e.dist(0,0,a,i),e.ortho(-a,a,-i,i,0,2*T);for(var s=0;s<15;s++)t[s]=new z(e.random(a/2),e.random(i/2),e.random(-1,1),e.random(-1,1),e)},draw:function(){var t=this.sketch,e=this.cells,a=(this.canvasW,this.canvasH,t.mouseX),i=t.mouseY;t.background(204);for(var s=0;s<15;s++)t.fill(s/15,t.map(s,0,15,0,1),1),e[s].show(),e[s].advance();t.fill(.7,1,1),new z(a,i,0,0,t).show()}}},$={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"canvas-container"}})},staticRenderFns:[]};var j={components:{Voronoi:a("VU/8")(U,$,!1,function(t){a("6+8O")},null,null).exports},mounted:function(){},data:function(){return{}},computed:{},methods:{}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("voronoi"),t._v(" "),a("div",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Voronoi Diagram")])]),t._v(" "),a("v-card-text",[t._v("Voronoi diagram is a way of dividing space into a number of regions.")]),t._v(" "),a("v-card-media",{attrs:{src:"http://i282.photobucket.com/albums/kk273/BruceDSTaylor/Voronoi/voronigiraffe.jpg",height:"300px"}}),t._v(" "),a("v-card-text",[t._v(" Each cell in the diagram encloses a particular site, and the surface of the cell contains all the points on the pl ane that are closer to that site than to any other.")])],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",[a("v-card-title",[a("div",{staticClass:"headline"},[t._v("Convex Regular Polygons")])]),t._v(" "),a("v-card-media",{attrs:{src:"https://maxwelldemon.files.wordpress.com/2016/11/polyhedra.jpg?w=600&h=367",height:"300px"}}),t._v(" "),a("v-card-text",[t._v("Six equilateral triangles, four squares or three regular hexagons at a vertex, yielding the three regular tessellations.")])],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-divider"),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Hexagonal")])]),t._v(" "),a("v-card-media",{attrs:{src:"https://user-images.githubusercontent.com/5538753/45207306-410f8f00-b2ba-11e8-88e6-aaa89b1f7054.png",height:"300px"}}),t._v(" "),a("v-card-text",[a("ul",[a("li",[t._v(" Hexagonal structures are very strong. Honeycombs are usually constructed vertically (eg, up a wall) and so they must ve able to stand up firmly ")]),t._v(" "),a("li",[t._v("  the shared walls of each cell ensure that the downward physical stresses on the structure are spread evenly throughout ")])])])],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-divider"),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Hexagonal")])]),t._v(" "),a("v-card-media",{attrs:{src:"https://user-images.githubusercontent.com/5538753/45207306-410f8f00-b2ba-11e8-88e6-aaa89b1f7054.png",height:"300px"}}),t._v(" "),a("v-card-text",[a("ul",[a("li",[t._v(" Hexagonal structures are very strong. Honeycombs are usually constructed vertically (eg, up a wall) and so they must ve able to stand up firmly ")]),t._v(" "),a("li",[t._v("  the shared walls of each cell ensure that the downward physical stresses on the structure are spread evenly throughout ")])])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var P=[{path:"/",name:"Flocking",component:d},{path:"/voronoi",name:"voronoi",component:a("VU/8")(j,B,!1,function(t){a("uDnz")},null,null).exports},{path:"/bee",name:"bee",component:R},{path:"/fibonacci",name:"fibonacci",component:y}],K={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:P.map(function(t){return{title:t.name,route:t.path}}),miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},name:"App"},X={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,function(e,i){return a("v-list-tile",{key:i,attrs:{value:"true",to:e.route},on:{click:function(t){}}},[a("v-list-tile-action",[a("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),a("div",{staticClass:"nav-bar"},[t.drawer?t._e():a("Button",{staticClass:"menuIconWrapper",on:{click:function(e){t.drawer=!t.drawer}}},[a("i",{staticClass:"menuIcon material-icons"},[t._v("more_vert")])])],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[a("v-list",[a("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[a("v-list-tile-action",[a("v-icon",[t._v("compare_arrows")])],1),t._v(" "),a("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),a("v-footer",{attrs:{fixed:t.fixed,app:""}},[a("span",[t._v("© 2017")])])],1)},staticRenderFns:[]};var A=a("VU/8")(K,X,!1,function(t){a("KS5K")},null,null).exports,O=a("/ocq");i.default.use(O.a);var L=new O.a({routes:P}),M=a("3EgV"),G=a.n(M);a("7zck");i.default.use(G.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:L,components:{App:A},template:"<App/>"})},XHoQ:function(t,e){},b42b:function(t,e){},uDnz:function(t,e){},vN8K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.83abe480dc0245a851e0.js.map