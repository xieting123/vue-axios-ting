<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />
    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom" :style="{ height: '100%' }">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import { ContactList, Toast, ContactEdit, Popup } from "vant";
import axios from "axios";
export default {
  name: "ContactList",
  components: {
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup
  },
  data() {
    return {
      list: [],
      instance: null, //axios实例
      showEdit: false, //弹框隐藏
      editingContact: {},
      isEdit: false
    };
  },
  methods: {
    //获取联系人列表
    async getlist() {
      let res = await this.$HTTP.getcontentList();
      this.list = res.data;
    },
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },
    onEdit(info) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = info;
    },
    async onSave(info) {
      if (this.isEdit) {
        //编辑保存
        let res=await this.$HTTP.editcontentList(info);
          if (res.code == 200) {
            Toast("编辑成功");
            this.showEdit = false;
            this.getlist();
          }
      } else {
        //新建保存
        let res = await this.$HTTP.addcontentList(info, true);
        if (res.code === 200) {
          Toast("新建成功");
          this.showEdit = false;
          this.getlist();
        }
      }
    },
    async onDelete(info) {
        let res= await this.$HTTP.deltelecontentList(info)
          if (res.code == 200) {
            Toast("删除成功");
            this.getlist();
            this.showEdit = false;
          }
    }
  },
  created() {
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 2000
    });
    this.getlist();
  }
};
</script>
<style  scoped>
.van-contact-list__add {
  z-index: 0;
}
</style>
