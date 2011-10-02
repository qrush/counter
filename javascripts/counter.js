(function() {
  var BodyScaler;
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
  $(function() {
    var scaler;
    scaler = new BodyScaler();
    scaler.scale();
    return $(window).resize(scaler.scale);
  });
}).call(this);
