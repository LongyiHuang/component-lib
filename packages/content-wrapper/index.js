/**
 * Description: ContentWrapper导出类
 *
 * Created by longyihuang on 2019/12/30
 * E-Mail: 475865662@qq.com
 */
// 导入组件，组件必须声明 name
import ContentWrapper from './src/ContentWrapper.vue';

// 为组件提供 install 安装方法，供按需引入
ContentWrapper.install = function (Vue) {
	Vue.component(ContentWrapper.name, ContentWrapper)
}

// 默认导出组件
export default ContentWrapper;
