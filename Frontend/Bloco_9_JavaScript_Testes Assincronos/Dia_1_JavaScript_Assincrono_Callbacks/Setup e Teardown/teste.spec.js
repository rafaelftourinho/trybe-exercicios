let names = ['Rafael', 'Amanda'];

const nameIncluded = (name) => names.includes(name);

describe('Verifica se adiciona os nomes', () => {
  beforeEach(() => {
    names = [...names, 'Lontra', 'Pedro', 'Wan'];
  })

  afterEach(() => {
    names = ['Rafael', 'Amanda'];
  })

  it ('Verifica se o array names tem os nomes de Rafael, Amanda, Lontra, Pedro e Wan', () => {
    expect(nameIncluded('Rafael')).toBeTruthy();
    expect(nameIncluded('Amanda')).toBeTruthy();
    expect(nameIncluded('Lontra')).toBeTruthy();
    expect(nameIncluded('Pedro')).toBeTruthy();
    expect(nameIncluded('Wan')).toBeTruthy();
  })

  it('Verifica se o tamonho do array names é igual a 5', () => {
    expect(names).toHaveLength(5);
  })
})

describe('Verifica se substitui nomes', () => {
  beforeEach(() => {
    names = ['Dani', 'Gabibs'];
  });

  afterEach(() => {
    names = [];
  });

  it('Verifica se o array names tem os nomes Dani e Gabibs e não possui os nomes Pinho e Carlos', () => {
    expect(nameIncluded('Dani')).toBeTruthy();
    expect(nameIncluded('Gabibs')).toBeTruthy();
    expect(nameIncluded('Pinho')).toBeFalsy();
    expect(nameIncluded('Carlos')).toBeFalsy();
  });

  it('Verifica se o tamanho do array names é igual a 2', () => {
    expect(names).toHaveLength(2);
  });
})
