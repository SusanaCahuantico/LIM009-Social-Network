describe('Facebook', () => {
  it('Debería poder iniciar sesion a Facebook con email: danieladelcarmen168@hotmil.com y password 123456', () => {
    return LogFacebook()
      .then((user) => {
        expect(user.isAnonymous).toBe(false)
      })
  });
})

describe('Google', () => {
  it('Debería poder iniciar sesion a Google con email: danieladelcarmen168@hotmil.com y password 123456', () => {
    return LogGoogle()
      .then((user) => {
        expect(user.isAnonymous).toBe(false)
      })
  });
})


