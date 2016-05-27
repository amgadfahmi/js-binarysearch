module.exports = {
    lib: {
        template: 'unit',
        indent: '  ',
        objectToExport: 'BS', // optional, internal object that will be exported 
        src: 'lib/<%= pkg.name.replace(/.js$/, "") %>.js',
        dest: 'dist/<%= pkg.name.replace(/.js$/, "") %>.js',
        returnExportsGlobal: 'js-binarysearch',
        deps: {
            default: [],
            amd: [],
            cjs: [],
            global: []
        }
    }
};