import { productsHandlers } from './handlers/productsHandlers'
import { usersHandlers } from './handlers/usersHandlers'

export const handlers = [...usersHandlers, ...productsHandlers]
