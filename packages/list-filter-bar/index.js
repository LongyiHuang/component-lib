/**
 * Description: 列表数据搜索器导出类
 *
 * Created by longyihuang on 2019/12/30
 * E-Mail: 475865662@qq.com
 */
// 导入组件，组件必须声明 name
import ListFilterBar from './src/ListFilterBar';

// 为组件提供 install 安装方法，供按需引入
ListFilterBar.install = function (Vue) {
	Vue.component(ListFilterBar.name, ListFilterBar)
}

// 默认导出组件
export default ListFilterBar;
