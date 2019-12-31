/**
 * Description: 组件入口文件
 *
 * Created by longyihuang on 2019/12/30
 * E-Mail: 475865662@qq.com
 */
import Vue from 'vue'
import Gallery from '../../packages/gallery/src/Gallery.vue';
const Components = {
	Gallery
}
Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name])
})
export default Components
