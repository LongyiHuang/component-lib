<template>
  <div>
    <ContentWrapper headerColor="#4cdc6c">
        <Gallery slot="content" :data-list="dataList"/>
        <!--<EditableTags slot="content" :tags="tags" closable editable addable/>-->
        <!--<ListFilterBar slot="left" :filters="filters"/>-->
    </ContentWrapper>
    <BzForm form-template-key="cb9447374fae409e8e7669617f05f53e"/>
  </div>
</template>

<script>
	export default {
		name: 'home',
		data () {
			return {
				filters: [
					{
						type: 'input',
						fieldName: 'buildingName',
						label: '楼栋名',
						clearable: true
					}
        ],
				dataList: [
					'11223',
					'11223',
					'11223',
					'11223',
					'11223',
					'11223',
					'11223',
					'11223',
					'11223',
					'11223',
					'11223'
				],
				tags: [
					'111', '222'
        ]
			}
		}
	}
</script>
