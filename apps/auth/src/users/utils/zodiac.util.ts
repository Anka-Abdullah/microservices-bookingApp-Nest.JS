export function getZodiacSign(date: Date): string {
    switch (true) {
      case date >= new Date('2023-01-22') && date <= new Date('2024-02-9'):
        return 'Rabbit';
      case date >= new Date('2022-02-1') && date <= new Date('2023-01-21'):
        return 'Tiger';
      case date >= new Date('2021-02-12') && date <= new Date('2022-01-31'):
        return 'Ox';
      case date >= new Date('2020-01-25') && date <= new Date('2021-02-11'):
        return 'Rat';
      case date >= new Date('2019-02-5') && date <= new Date('2020-01-24'):
        return 'Pig';
      case date >= new Date('2018-02-16') && date <= new Date('2019-02-4'):
        return 'Dog';
      case date >= new Date('2017-01-28') && date <= new Date('2018-02-15'):
        return 'Rooster';
      case date >= new Date('2016-02-8') && date <= new Date('2017-01-27'):
        return 'Monkey';
      case date >= new Date('2015-02-19') && date <= new Date('2016-02-7'):
        return 'Goat';
      case date >= new Date('2014-01-31') && date <= new Date('2015-02-18'):
        return 'Horse';
      case date >= new Date('2013-02-10') && date <= new Date('2014-01-30'):
        return 'Snake';
      case date >= new Date('2012-01-23') && date <= new Date('2013-02-9'):
        return 'Dragon';
      case date >= new Date('2011-02-3') && date <= new Date('2012-01-22'):
        return 'Rabbit';
      case date >= new Date('2010-02-14') && date <= new Date('2011-02-2'):
        return 'Tiger';
      case date >= new Date('2009-01-26') && date <= new Date('2010-02-13'):
        return 'Ox';
      case date >= new Date('2008-02-7') && date <= new Date('2009-01-25'):
        return 'Rat';
      case date >= new Date('2007-02-18') && date <= new Date('2008-02-6'):
        return 'Boar';
      case date >= new Date('2006-01-29') && date <= new Date('2007-02-17'):
        return 'Dog';
      case date >= new Date('2005-02-9') && date <= new Date('2006-01-28'):
        return 'Rooster';
      case date >= new Date('2004-01-22') && date <= new Date('2005-02-8'):
        return 'Monkey';
      case date >= new Date('2003-02-1') && date <= new Date('2004-01-21'):
        return 'Goat';
      case date >= new Date('2002-02-12') && date <= new Date('2003-01-31'):
        return 'Horse';
      case date >= new Date('2001-01-24') && date <= new Date('2002-02-11'):
        return 'Snake';
      case date >= new Date('2000-02-5') && date <= new Date('2001-01-23'):
        return 'Dragon';
      case date >= new Date('1999-02-16') && date <= new Date('2000-02-4'):
        return 'Rabbit';
      case date >= new Date('1998-01-28') && date <= new Date('1999-02-15'):
        return 'Tiger';
      case date >= new Date('1997-02-7') && date <= new Date('1998-01-27'):
        return 'Ox';
      case date >= new Date('1996-02-19') && date <= new Date('1997-02-6'):
        return 'Rat';
      case date >= new Date('1995-01-31') && date <= new Date('1996-02-18'):
        return 'Boar';
      case date >= new Date('1994-02-10') && date <= new Date('1995-01-30'):
        return 'Dog';
      case date >= new Date('1993-01-23') && date <= new Date('1994-02-9'):
        return 'Rooster';
      case date >= new Date('1992-02-4') && date <= new Date('1993-01-22'):
        return 'Monkey';
      case date >= new Date('1991-02-15') && date <= new Date('1992-02-3'):
        return 'Goat';
      case date >= new Date('1990-01-27') && date <= new Date('1991-02-14'):
        return 'Horse';
      case date >= new Date('1989-02-6') && date <= new Date('1990-01-26'):
        return 'Snake';
      case date >= new Date('1988-02-17') && date <= new Date('1989-02-5'):
        return 'Dragon';
      case date >= new Date('1987-01-29') && date <= new Date('1988-02-16'):
        return 'Rabbit';
      case date >= new Date('1986-02-9') && date <= new Date('1987-01-28'):
        return 'Tiger';
      case date >= new Date('1985-02-20') && date <= new Date('1986-02-8'):
        return 'Ox';
      case date >= new Date('1984-02-2') && date <= new Date('1985-02-19'):
        return 'Rat';
      case date >= new Date('1983-02-13') && date <= new Date('1984-02-1'):
        return 'Boar';
      case date >= new Date('1982-01-25') && date <= new Date('1983-02-12'):
        return 'Dog';
      case date >= new Date('1981-02-5') && date <= new Date('1982-01-24'):
        return 'Rooster';
      case date >= new Date('1980-02-16') && date <= new Date('1981-02-4'):
        return 'Monkey';
      case date >= new Date('1979-01-28') && date <= new Date('1980-02-15'):
        return 'Goat';
      case date >= new Date('1978-02-7') && date <= new Date('1979-01-27'):
        return 'Horse';
      case date >= new Date('1977-02-18') && date <= new Date('1978-02-6'):
        return 'Snake';
      case date >= new Date('1976-01-31') && date <= new Date('1977-02-17'):
        return 'Dragon';
      case date >= new Date('1975-02-11') && date <= new Date('1976-01-30'):
        return 'Rabbit';
      case date >= new Date('1974-01-23') && date <= new Date('1975-02-10'):
        return 'Tiger';
      case date >= new Date('1973-02-3') && date <= new Date('1974-01-22'):
        return 'Ox';
      case date >= new Date('1972-02-15') && date <= new Date('1973-02-2'):
        return 'Rat';
      case date >= new Date('1971-01-27') && date <= new Date('1972-02-14'):
        return 'Boar';
      case date >= new Date('1970-02-6') && date <= new Date('1971-01-26'):
        return 'Dog';
      case date >= new Date('1969-02-17') && date <= new Date('1970-02-5'):
        return 'Rooster';
      case date >= new Date('1968-01-30') && date <= new Date('1969-02-16'):
        return 'Monkey';
      case date >= new Date('1967-02-9') && date <= new Date('1968-01-29'):
        return 'Goat';
      case date >= new Date('1966-01-21') && date <= new Date('1967-02-8'):
        return 'Horse';
      case date >= new Date('1965-02-2') && date <= new Date('1966-01-20'):
        return 'Snake';
      case date >= new Date('1964-02-13') && date <= new Date('1965-02-1'):
        return 'Dragon';
      case date >= new Date('1963-01-25') && date <= new Date('1964-02-12'):
        return 'Rabbit';
      case date >= new Date('1962-02-5') && date <= new Date('1963-01-24'):
        return 'Tiger';
      case date >= new Date('1961-02-15') && date <= new Date('1962-02-4'):
        return 'Ox';
      case date >= new Date('1960-01-28') && date <= new Date('1961-02-14'):
        return 'Rat';
      case date >= new Date('1959-02-8') && date <= new Date('1960-01-27'):
        return 'Boar';
      case date >= new Date('1958-01-22') && date <= new Date('1959-02-7'):
        return 'Dog';
      case date >= new Date('1957-02-2') && date <= new Date('1958-01-21'):
        return 'Rooster';
      case date >= new Date('1956-02-12') && date <= new Date('1957-02-1'):
        return 'Monkey';
      case date >= new Date('1955-01-24') && date <= new Date('1956-02-11'):
        return 'Goat';
      case date >= new Date('1954-02-3') && date <= new Date('1955-01-23'):
        return 'Horse';
      case date >= new Date('1953-02-14') && date <= new Date('1954-02-2'):
        return 'Snake';
      case date >= new Date('1952-01-27') && date <= new Date('1953-02-13'):
        return 'Dragon';
      case date >= new Date('1951-02-6') && date <= new Date('1952-01-26'):
        return 'Rabbit';
      case date >= new Date('1950-02-17') && date <= new Date('1951-02-5'):
        return 'Tiger';
      case date >= new Date('1949-01-29') && date <= new Date('1950-02-16'):
        return 'Ox';
      case date >= new Date('1948-02-10') && date <= new Date('1949-01-28'):
        return 'Rat';
      case date >= new Date('1947-01-22') && date <= new Date('1948-02-9'):
        return 'Boar';
      case date >= new Date('1946-02-2') && date <= new Date('1947-01-21'):
        return 'Dog';
      case date >= new Date('1945-02-13') && date <= new Date('1946-02-1'):
        return 'Rooster';
      case date >= new Date('1944-01-25') && date <= new Date('1945-02-12'):
        return 'Monkey';
      case date >= new Date('1943-02-5') && date <= new Date('1944-01-24'):
        return 'Goat';
      case date >= new Date('1942-02-15') && date <= new Date('1943-02-4'):
        return 'Horse';
      case date >= new Date('1941-01-27') && date <= new Date('1942-02-14'):
        return 'Snake';
      case date >= new Date('1940-02-6') && date <= new Date('1941-01-26'):
        return 'Dragon';
      case date >= new Date('1939-02-19') && date <= new Date('1940-02-5'):
        return 'Rabbit';
      case date >= new Date('1938-01-31') && date <= new Date('1939-02-18'):
        return 'Tiger';
      case date >= new Date('1937-02-11') && date <= new Date('1938-01-30'):
        return 'Ox';
      case date >= new Date('1936-01-24') && date <= new Date('1937-02-10'):
        return 'Rat';
      case date >= new Date('1935-02-4') && date <= new Date('1936-01-23'):
        return 'Boar';
      case date >= new Date('1934-02-14') && date <= new Date('1935-02-3'):
        return 'Dog';
      case date >= new Date('1933-01-26') && date <= new Date('1934-02-13'):
        return 'Rooster';
      case date >= new Date('1932-02-6') && date <= new Date('1933-01-25'):
        return 'Monkey';
      case date >= new Date('1931-02-17') && date <= new Date('1932-02-5'):
        return 'Goat';
      case date >= new Date('1930-01-30') && date <= new Date('1931-02-16'):
        return 'Horse';
      case date >= new Date('1929-02-10') && date <= new Date('1930-01-29'):
        return 'Snake';
      case date >= new Date('1928-01-23') && date <= new Date('1929-02-9'):
        return 'Dragon';
      case date >= new Date('1927-02-2') && date <= new Date('1928-01-22'):
        return 'Rabbit';
      case date >= new Date('1926-02-13') && date <= new Date('1927-02-1'):
        return 'Tiger';
      case date >= new Date('1925-01-24') && date <= new Date('1926-02-12'):
        return 'Ox';
      case date >= new Date('1924-02-5') && date <= new Date('1925-01-23'):
        return 'Rat';
      default:
        return 'invalid date';
    }
  }
  