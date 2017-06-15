export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('negit'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
