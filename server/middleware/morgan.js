import morgan from "morgan";
import logger from "../config/logger";

const stream = {
    write: (message) => {
        logger.info(message.trim());
    }
}

const format = ":method :url :status :res[content-length] - :response-time ms";

const morganMiddleware = morgan(format, {
    stream,
});

export default morganMiddleware;