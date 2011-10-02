# based on http://www.spookandpuff.com/examples/dynamicTextSize.html

class BodyScaler
  scaleFactor: 0.35
  maxScale: 400
  minScale: 30

  constructor: ->
    @body = $("body")

  scale: =>
    scaleSource = @body.width()
    fontSize = scaleSource * @scaleFactor

    if (fontSize > @maxScale)
      fontSize = @maxScale
    if (fontSize < @minScale)
      fontSize = @minScale

    @body.css("font-size", "#{fontSize}%")

class Score
  points: 0

$ ->
  scaler = new BodyScaler()
  scaler.scale()
  $(window).resize(scaler.scale)
