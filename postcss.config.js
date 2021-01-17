
const plugins = [
    require('postcss-preset-env')({
        stage: 1,
    })
];

module.exports = {
    map: true,
    plugins
};
