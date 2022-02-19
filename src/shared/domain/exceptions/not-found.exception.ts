import Exception from './exception';

export default class NotFoundException extends Exception {
    constructor(message?: string) {
        super(404, message || 'Not found');
    }
}
