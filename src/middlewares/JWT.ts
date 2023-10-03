import { sign, verify } from 'jsonwebtoken';

export default function createToken(user: { id: number, username: string }): string {
  const authenticationToken = sign(
    { id: user.id, username: user.username },
    'secret'
  );
  return authenticationToken;
}

export const verifyToken = (req, res, next) => {

}
