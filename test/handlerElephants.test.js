const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao emplementar o argumento como parêmetro, testa se retorna o valor esperado', () => {
    {
      const actual = handlerElephants('count');
      const expected = 4;
      expect(actual).toEqual(expected);
    }
    {
      const actual = typeof handlerElephants('names');
      const expected = 'object';
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('averageAge');
      const expected = 10.5;
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('location');
      const expected = 'NW';
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('popularity');
      const expected = 5;
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('availability');
      const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants();
      const expected = undefined;
      expect(actual).toEqual(expected);
    }
  });
});
