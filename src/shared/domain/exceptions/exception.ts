export default class Exception extends Error {
    constructor(
        private readonly code: number,
        message: string
    ) {
        super(message);
    }
}
