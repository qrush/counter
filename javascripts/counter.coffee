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

class Counter
  points:
    blue: 0
    green: 0
    red: 0
    yellow: 0
    black: 0
    gray: 0

  count: (event) =>
    console.log("LOL")
    form = $(event.target)
    color = form.siblings("h2").text()
    counter = form.siblings("h3")
    @points[color] += form.find("input").val()
    counter.text(@points[color])
    false


class Score
  points: 0

$ ->
  scaler = new BodyScaler()
  counter = new Counter()

  scaler.scale()
  $(window).resize(scaler.scale)
  $("form").submit(counter.count)
