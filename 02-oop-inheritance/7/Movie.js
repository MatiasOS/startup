var Movie = (function () {
    var p = Movie.prototype;

    // Constructor
    function Movie(name) {
      this.attributes = [];
      this.observers = [];
    };

    p.play = function(){
      this.observers.forEach(function (currentObserver) {
          currentObserver.notifyPlay(this.attributes["title"]);
        }, this);
    };

    p.stop = function(){
      this.observers.forEach(function (currentObserver) {
          currentObserver.notifyStop(this.attributes["title"]);
        }, this);
    };

    p.set = function(key, val){
      this.attributes[key] = val;
    };

    p.get = function(key){
      return this.attributes[key];
    };

    p.addObserver = function (o) {
         this.observers.push(o);
     };

     p.removeObserver = function (o) {
         var index;
         this.observers.indexOf(o);
         if (index > -1) {
             this.observers.splice(index, 1);
         };
       };
    return Movie;
} ());


// Observador
var MovieObserver = (function () {
    var p = MovieObserver.prototype;
    // Constructor
    function MovieObserver(name) {
        this.name = name;
    };

    p.notifyPlay = function (msg) {
        console.log("Playing " + msg);
    };
    p.notifyStop = function (msg) {
        console.log(msg + " stopped!");
    };

    return MovieObserver;
} ());





  var o1 = new MovieObserver();
  var m1 = new Movie();
  m1.set('title','terminator');
  m1.addObserver(o1);

  m1.play();
  m1.stop();

  // DownloadableMovie
