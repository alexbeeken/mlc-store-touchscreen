export default function(){
  this.transition(
    this.toRoute('negit'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.toRoute('tufa'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.toRoute('index'),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.childOf('.home-link'),
    this.toValue(true),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.childOf('.ps-container'),
    this.toValue(function(toValue, fromValue) {return toValue < fromValue}),
    this.use('toRight'),
    this.reverse('toLeft')
  )
}
