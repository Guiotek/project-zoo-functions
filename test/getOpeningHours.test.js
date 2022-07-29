const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('ao passar argumentos, retorna o valor esperado', () => {
    {
      const actual = typeof getOpeningHours();
      const expected = 'object';
      expect(actual).toEqual(expected);
    }
    {
      const actual = typeof getOpeningHours('Monday', '09:00-AM');
      const expected = 'string';
      expect(actual).toEqual(expected);
    }
    {
      const actual = getOpeningHours('Monday', '09:00-AM');
      const expected = 'The zoo is closed';
      expect(actual).toEqual(expected);
    }
    {
      const actual = getOpeningHours('Tuesday', '09:00-AM');
      const expected = 'The zoo is open';
      expect(actual).toEqual(expected);
    }
    {
      const actual = getOpeningHours('Wednesday', '09:00-PM');
      const expected = 'The zoo is open';
      expect(actual).toEqual(expected);
    }
    {
      const actual = getOpeningHours('Sunday', '09:c0-AM');
      expect(actual).toThrow(/^The minutes should represent a number$/)
    }
  });
});
