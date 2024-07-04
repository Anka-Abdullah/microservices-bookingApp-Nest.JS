export function getHoroscopeSign(date: Date): string {
    const getDate = date.getDate();
    const getMonth = date.getMonth();
    const day = new Date(0, getMonth, getDate);
  
    switch (true) {
      case day >= new Date(0, 2, 21) && day <= new Date(0, 3, 19):
        return 'Aries Ram';
      case day >= new Date(0, 3, 20) && day <= new Date(0, 4, 20):
        return 'Taurus Bull';
      case day >= new Date(0, 4, 21) && day <= new Date(0, 5, 21):
        return 'Gemini Twins';
      case day >= new Date(0, 5, 22) && day <= new Date(0, 6, 22):
        return 'Cancer Crab';
      case day >= new Date(0, 6, 23) && day <= new Date(0, 7, 22):
        return 'Leo Lion';
      case day >= new Date(0, 7, 23) && day <= new Date(0, 8, 22):
        return 'Virgo Virgin';
      case day >= new Date(0, 8, 23) && day <= new Date(0, 9, 23):
        return 'Libra Balance';
      case day >= new Date(0, 9, 24) && day <= new Date(0, 10, 21):
        return 'Scorpius Scorpion';
      case day >= new Date(0, 10, 22) && day <= new Date(0, 11, 21):
        return 'Sagittarius Archer';
      case day >= new Date(0, 0, 20) && day <= new Date(0, 1, 18):
        return 'Aquarius Water Bearer';
      case day >= new Date(0, 1, 19) && day <= new Date(0, 2, 20):
        return 'Pisces Fish';
      case day >= new Date(0, 11, 22):
        return 'Capricornus Goat';
      case day <= new Date(0, 0, 19):
        return 'Capricornus Goat';
      default:
        return 'invalid date';
    }
  }
  