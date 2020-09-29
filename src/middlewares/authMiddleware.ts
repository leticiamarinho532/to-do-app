import { Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string,
    iat: number,
    exp: number
}

function authMiddleware (request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json({ message: 'Não autorizado' });
    }

    const token = authorization.trim();

    if (token == '') {
        return response.status(401).json({ message: 'Não autorizado' });
    }

    jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
            return response.status(401).json({ message: 'Não autorizado' });
        }

        const { id } = decoded as TokenPayload;

        request.userId = id;

        return next();
    });

}

export default authMiddleware;
