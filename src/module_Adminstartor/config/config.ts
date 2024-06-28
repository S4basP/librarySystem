import 'dotenv/config';


export const jwtSecret = 'test';
export const jwtExpires = '7d';
export const cookieExpire = new Date(Date.now() + 1 * 24 * 60 * 60* 1000)

