/**
 * Description:
 *
 * Created by longyihuang on 2019/12/31
 * E-Mail: 475865662@qq.com
 */

import { Message } from 'element-ui'

export function getObjectValueByFieldName (object, fieldName) {
	let value;
	if (object && fieldName) {
		const buf = fieldName.split('.');
		let tempValue = object;
		for (let i = 0; i < buf.length; i++) {
			tempValue = tempValue[buf[i]];
			if (!tempValue) {
				break;
			}
		}
		value = tempValue;
	}
	return value;
}



export function showMessage (content, type) {
	Message({
		message: content,
		type: type,
		showClose: true,
		duration: 2000
	})
}
