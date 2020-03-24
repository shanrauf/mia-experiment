import { Request, Response, NextFunction } from 'express';

const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'test') {
    req.user = {
      adminId: 'asdfasdfasdf',
      participantId: 'testParticipant',
      email: 'test@test.com',
      age: 18,
      password: 'test123',
      name: 'Shan',
      sex: 'male',
      discordUsername: 'Shan',
      lastLogin: new Date('2020-03-23T21:00:04.269Z'),
      updatedAt: new Date('2020-03-23T21:00:04.291Z'),
      createdAt: new Date('2020-03-23T21:00:04.291Z'),
      discordId: 'discordId_blahblah'
    };
    return next();
  }
  if (req.isAuthenticated()) {
    return next();
  } else {
    const err = new Error('You are not authorized for this route');
    err.name = 'UnauthorizedError';
    throw err;
  }
};

export default ensureAuthenticated;
