/**
* Description: 可编辑的Tag列表,支持增删改
*
* Created by longyihuang on 2019/11/4
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="editable-tags-container">
    <div v-for="(tag, index) in tags" :key="index">
      <el-tag
        v-if="editIndex !== index"
        class="tag"
        @click="handleClickEdit(tag, index)"
        :closable="closable"
        @close="handleClose(index)"
        :disable-transitions="true"
      >
        {{tag}}
      </el-tag>
      <el-input
        v-else
        class="input-tag"
        v-model="inputValue"
        ref="editTagInput"
        size="small"
        @keyup.enter.native="handleEditConfirm"
        @blur="handleEditBlur"
      />
    </div>

    <div v-if="addable">
      <el-input
        class="input-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="addTagInput"
        size="small"
        @keyup.enter.native="handleAddConfirm"
        @blur="handleAddBlur"
      />
      <el-button v-else class="button-new-tag" size="small" @click="showInput">{{addButtonName}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EditableTags",
    props: {
      tags: {
        type: Array,
        default: function () {
          return [];
        }
      },
      addable: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      addButtonName: {
        type: String,
        default: function () {
          return '+ New Tag';
        }
      },
      closable: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      editable: {
	      type: Boolean,
	      default: function () {
		      return false;
	      }
      },
      blurCommit: {
	      type: Boolean,
	      default: function () {
		      return true;
	      }
      }
    },
    data () {
      return {
        inputVisible: false,
        inputValue: '',
        editIndex: undefined
      }
    },
    methods: {
      handleClickEdit (tag, index) {
      	if (this.editable) {
		      this.editIndex = index;
		      this.inputValue = tag;
		      this.$nextTick(() => {
			      this.$refs.editTagInput[0].focus();
		      });
        }
      },
      handleClose (index) {
        this.$emit('onCloseTag', index);
      },

	    handleEditBlur () {
      	this.blurCommit && this.handleEditConfirm();
      },

      handleEditConfirm () {
        const inputValue = this.inputValue;
        const editIndex = this.editIndex;
        if (inputValue) {
          this.$emit('onEditTag', inputValue, editIndex);
        }
        this.editIndex = undefined;
        this.inputValue = '';
      },

	    handleAddBlur () {
		    this.blurCommit && this.handleAddConfirm();
	    },

      handleAddConfirm () {
	      const inputValue = this.inputValue;
        if (inputValue) {
          this.$emit('onAddTag', inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      showInput () {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.addTagInput.focus();
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  .editable-tags-container {
    display: flex;
    flex-wrap: wrap;
    .tag {
      margin-right: 10px;
    }
    .input-tag {
      width: 90px;
      margin-right: 10px;
      vertical-align: bottom;
    }
    .button-new-tag {
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

</style>
