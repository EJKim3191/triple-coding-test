const createConfig = require('@titicaca/eslint-config-triple/create-config')

// Allowing Naming Convention exception example
// const allowedNames = ['__DISASTER__CALLBACK', '_triple_no_navbar']
// module.exports = createConfig({ type: 'node', allowedNames })

module.exports = createConfig({ type: 'frontend', project: './tsconfig.json' })