function Pessoa() {
  (this.idade = 0), (self = this);

  setInterval(
    function () {
      self.idade++;
      console.log(`A sua idade é ${self.idade}`);
    }.bind(self),
    1000
  );
}

new Pessoa();
