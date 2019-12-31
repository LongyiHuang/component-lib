/**
* Description:
*
* Created by longyihuang on 2019/12/9
* E-Mail: 475865662@qq.com
*/

<template>
  <el-cascader
    v-model="value"
    :size="size"
    ref="cascader"
    class="location-select"
    :props="props"
    :placeholder="placeholder"
    clearable
  />
</template>

<script>
	export default {
		name: "Cascader",
		props: {
			cascaderData: {
				type: Array,
				default: function () {
					return []
				}
			},
			placeholder: {
				type: String,
				default: ''
			},
			checkStrictly: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: undefined
			},
			cascaderValue: {
				type: Array,
				default: undefined
			},
			nodeFieldName: {
				type: String,
				default: undefined
			},
			nodeValueFieldName: {
				type: String,
				default: undefined
			},
			dataKeyFieldName: {
				type: String,
				default: undefined
			}
		},
		data () {
			return {
				props: {
					lazy: true,
					checkStrictly: this.checkStrictly,
					lazyLoad: this.lazyLoad
				}
			}
		},

		computed: {
			value: {
				get: function () {
					return this.cascaderValue;
				},
				set: function (value) {
					this.$emit('onCascaderChange', value);
				}
			}
		},

		methods: {
			lazyLoad (node, resolve) {
				if (this.cascaderData && this.cascaderData.length > 0) {
					const { level, value } = node;
					const levelData = this.cascaderData[level];
					const dataKey = level === 0 ? levelData.dataKey : value;
					const isLeaf = level === this.cascaderData.length - 1;
					if (levelData) {
						this.queryLoacationNodes(levelData.dataApi, resolve, dataKey, isLeaf);
					}
				} else {
					resolve([]);
				}
			},

			async queryLoacationNodes (api, resolve, dataKey, isLeaf = false) {
				const data = await api({ [this.dataKeyFieldName ? this.dataKeyFieldName : 'key']: dataKey });
				if (data) {
					const nodes = data.rows.map(item => {
						return {
							value: this.nodeValueFieldName ? item[this.nodeValueFieldName] : item.value,
							label: this.nodeFieldName ? item[this.nodeFieldName] : item.name,
							leaf: isLeaf
						}
					});
					resolve(nodes)
					return;
				}
				resolve([])
			},


			clearSelection () {
				this.$refs['cascader'].handleClear();
			}
		}
	}
</script>

<style lang='scss' scoped>
  .cascader-label {
    margin-right: 10px;
  }
</style>
