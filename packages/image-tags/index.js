/**
 * Description: ImageTags导出类
 *
 * Created by longyihuang on 2019/12/30
 * E-Mail: 475865662@qq.com
 */
// 导入组件，组件必须声明 name
import ImageTags from './src/ImageTags.vue';

// 为组件提供 install 安装方法，供按需引入
ImageTags.install = function (Vue) {
	Vue.component(ImageTags.name, ImageTags)
}

// 默认导出组件
export default ImageTags;
