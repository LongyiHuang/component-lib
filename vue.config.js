/**
 * Description: 配置文件
 *
 * Created by longyihuang on 2019/12/30
 * E-Mail: 475865662@qq.com
 */
const path = require("path");
const debug = process.env.NODE_ENV !== 'production';
const version = '1.2.3';
const format = require('date-fns/format');
const date = format(new Date(), 'yyyyMMdd');

function resolve (dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	// 修改 src 目录 为 examples 目录
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},

	// 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
	// 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
	publicPath: '/',
	// 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
	// 默认值'dist'
	outputDir: `versions/asset_${date}_v${version}`,
	// 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
	// 默认值''
	assetsDir: 'static',
	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	// 默认值'index.html'
	indexPath: "index.html",
	// 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
	filenameHashing: false,
	// 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
	lintOnSave: debug,
	// 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
	runtimeCompiler: false,
	// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	productionSourceMap: false,

	configureWebpack: (config) => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
		if (debug) { // 开发环境配置
			config.mode = 'development';
		} else { // 生产环境配置
			config.mode = 'production';
			Object.assign(config, {
				output: {
					...config.output,
					filename: `static/js/[name].[chunkhash].v${version}.js`,
					chunkFilename: `static/js/[name].[chunkhash].v${version}.js`
				}
			});
		}
	},


	// 扩展 webpack 配置，使 packages 加入编译
	chainWebpack: config => {
		config.module
			.rule('js')
			.include
			.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			})

		config.resolve.alias
			.set("@", resolve("examples"))
			.set("@p", resolve("packages"))
	},

	devServer: {
		/* 自动打开浏览器 */
		open: true,
		port: 7001,
		https: false,
		hotOnly: false,
		proxy: {
			[process.env.VUE_APP_BASE_API]: { // 匹配所有以 '/api'开头的请求路径
				target: 'http://192.168.0.102:8090', // 102
				// target: 'http://itent.yuanjingvtown.com', // 灰度环境
				// target: 'https://irent.yuanjingweitang.com', // 线上环境
				changeOrigin: true, // 支持跨域
				pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	}
}
