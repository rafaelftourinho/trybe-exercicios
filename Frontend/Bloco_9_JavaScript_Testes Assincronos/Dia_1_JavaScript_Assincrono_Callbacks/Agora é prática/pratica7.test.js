const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppecase "test" to equal "TEST"', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toEqual('TESTE');
      done();

    } catch(error) {
      done(error);
    }
  })

})
