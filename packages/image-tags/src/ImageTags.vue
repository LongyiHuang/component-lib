/**
/**
* Description: 图片标签
*
* Created by longyihuang on 2019/11/20
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="image-tags-container">
    <div class="tag-box" v-for="(item, index) in data" :key="index" @mouseover="selectStyle(index)"
         @mouseleave="selectStyle(undefined)">
      <i v-if="index === hoverIndex" class="delete el-icon-close" @click="handleDelete(index)"></i>
      <i v-if="index === hoverIndex" class="edit el-icon-edit" @click="handleEdit(index)"></i>
      <label>{{title(item)}}</label>
      <img :src="imageUrl(item)" alt="图片"/>
    </div>
  </div>
</template>

<script>
	import { getObjectValueByFieldName } from "@/utils";

	export default {
		name: "ImageTags",
		model: {
			prop: 'data',
			event: 'onChange'
		},
		props: {
			data: {
				type: Array,
				default: function () {
					return []
				}
			},

			imageFieldName: {
				type: String,
				default: function () {
					return null
				}
			},

			titleFieldName: {
				type: String,
				default: function () {
					return null
				}
			}
		},

		computed: {
			imageUrl () {
				return function (tag) {
					const url = getObjectValueByFieldName(tag, this.imageFieldName);
					return url || "";
				}
			},
			title () {
				return function (tag) {
					return getObjectValueByFieldName(tag, this.titleFieldName);
				}
			}

		},

		data () {
			return {
				currentIndex: undefined,
				hoverIndex: undefined
			}
		},

		methods: {
			selectStyle (index = undefined) {
				this.hoverIndex = index;
			},

			handleDelete (index) {
				this.$emit('onDelete', index);
			},


			handleEdit (index) {
				this.$emit('onEdit', index);
			}

		}
	}
</script>

<style lang='scss' scoped>
  .image-tags-container {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    .tag-box {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 20px 20px;
      border: 1px solid #d3dce6;
      border-radius: 5px;
      background: #f8fbff;

      i:hover {
        color: #1890ff;
      }

      .delete {
        position: absolute;
        right: 3px;
        top: 3px;
        font-size: 18px;
      }

      .edit {
        position: absolute;
        right: 20px;
        top: 3px;
        font-size: 18px;
      }

      img {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 120px;
        height: 90px;
      }

      label {
        font-size: 12px;
        color: #333333;
        margin-left: 5px;
      }
    }
  }
</style>
