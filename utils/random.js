import { v4 as uuidv4 } from 'uuid';

function getRandomID(key) {
    return `${key}_${uuidv4()}`
}
export {
    getRandomID
}