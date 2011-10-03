(function() {
  var BodyScaler, Counter, Score;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  BodyScaler = (function() {
    BodyScaler.prototype.scaleFactor = 0.35;
    BodyScaler.prototype.maxScale = 400;
    BodyScaler.prototype.minScale = 30;
    function BodyScaler() {
      this.scale = __bind(this.scale, this);      this.body = $("body");
    }
    BodyScaler.prototype.scale = function() {
      var fontSize, scaleSource;
      scaleSource = this.body.width();
      fontSize = scaleSource * this.scaleFactor;
      if (fontSize > this.maxScale) {
        fontSize = this.maxScale;
      }
      if (fontSize < this.minScale) {
        fontSize = this.minScale;
      }
      return this.body.css("font-size", "" + fontSize + "%");
    };
    return BodyScaler;
  })();
  Counter = (function() {
    function Counter() {
      this.count = __bind(this.count, this);
    }
    Counter.prototype.points = {
      blue: 0,
      green: 0,
      red: 0,
      yellow: 0,
      black: 0,
      gray: 0
    };
    Counter.prototype.count = function(event) {
      var color, counter, form;
      console.log("LOL");
      form = $(event.target);
      color = form.siblings("h2").text();
      counter = form.siblings("h3");
      this.points[color] += form.find("input").val();
      counter.text(this.points[color]);
      return false;
    };
    return Counter;
  })();
  Score = (function() {
    function Score() {}
    Score.prototype.points = 0;
    return Score;
  })();
  $(function() {
    var counter, scaler;
    scaler = new BodyScaler();
    counter = new Counter();
    scaler.scale();
    $(window).resize(scaler.scale);
    return $("form").submit(counter.count);
  });
}).call(this);
