import resolve from 'rollup-plugin-node-resolve';

module.exports = {
    input: ['guts-component.js'],
    output: {
        dir: 'demo',
        format: 'cjs'
    },
    plugins: [resolve({
        // pass custom options to the resolve plugin
        customResolveOptions: {
            moduleDirectory: 'node_modules'
        }
    })]
};