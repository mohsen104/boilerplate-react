import { authHandlers } from './handlers/authHandlers'
import { productsHandlers } from './handlers/productsHandlers'
import { usersHandlers } from './handlers/usersHandlers'

export const handlers = [...authHandlers, ...productsHandlers, ...usersHandlers]
