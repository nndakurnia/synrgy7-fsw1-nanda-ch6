import multer, { StorageEngine } from 'multer';
import path from 'path';
import { Request } from 'express';

const PUBLIC_DIR: string = path.join(__dirname, '../public');
const UPLOAD_DIR: string = path.join(PUBLIC_DIR, 'uploads');

const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        const id: string = Math.random().toString(36).substring(2, 15); // Generates a random string
        cb(null, `${id}${path.extname(file.originalname)}`);
    }
});

export default multer({ storage });
