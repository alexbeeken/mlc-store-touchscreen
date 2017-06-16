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
};
