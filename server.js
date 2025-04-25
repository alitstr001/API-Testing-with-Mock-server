const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const rules = auth.rewriter(require('./rules.json'))

server.db = router.db

server.use(middlewares)
server.use(rules)
server.use(auth)
server.use(router)

server.listen(3000, () => {
  console.log('🚀 JSON Server with Auth running at http://localhost:3000')
})