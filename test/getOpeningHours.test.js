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
      const expected = 'The zoo is closed';
      expect(actual).toEqual(expected);
    }
  });
  it('ao passar argumentos, retorna um Erro nos minutos', () => {
    const actual = getOpeningHours('Sunday', '09:c0-AM');
    expect(actual).toThrow();
  });
  it('ao passar argumentos, retorna um Erro no AM/PM', () => {
    const actual = getOpeningHours('Friday', '09:00-ZM');
    expect(actual).toThrow();
  });
  it('ao passar argumentos, retorna um Erro nas Horas', () => {
    const actual = getOpeningHours('Saturday', 'C9:00-AM');
    expect(actual).toThrow();
  });
  it('ao passar argumentos, retorna um Erro no Dia', () => {
    const actual = getOpeningHours('Thu', '09:00-AM');
    expect(actual).toThrow();
  });
});
