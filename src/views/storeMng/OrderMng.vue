<template>
  <v-main>
    <v-data-table
      :headers="headers"
      :items="orderItems"
      :search="search"
      show-select
      v-model="selected"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>주문 관리</v-toolbar-title>
          <v-spacer></v-spacer>
          <template>
            <v-btn class="mb-2" :disabled="selected.length <= 0">
              주문 상태 저장
            </v-btn>
          </template>
        </v-toolbar>
        <div class="d-flex">
          <v-btn
            class="ml-3 white--text"
            color="blue-grey darken-3"
            @click="delOrders(selected)"
            >delete seleted</v-btn
          >
          <v-text-field
            v-model="search"
            append-icon="mdi-account-search"
            label="Search"
            single-line
            hide-details
            class="search-bar"
          ></v-text-field>
        </div>
      </template>
      <template v-slot:[`item.orderState`]>
        <v-select
          :items="orderState"
          item-value="id"
          item-text="orderStateName"
          v-model="order.orderId"
          label="주문 상태"
          dense
          solo
          class="order-state"
        ></v-select>
      </template>
    </v-data-table>
  </v-main>
</template>

<script>
import api from '../../api/salesOrder';

export default {
  name: 'orderMng',
  data: () => ({
    search: '',
    selected: [],
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: '상품명', value: 'productName' },
      { text: '상품코드', value: 'code' },
      { text: '카테고리', value: 'category' },
      { text: '주문금액', value: 'price' },
      { text: '주문일', value: 'orderDate' },
      { text: '배송지', value: 'address' },
      { text: '결제수단', value: 'pay' },
      { text: '구매자', value: 'name' },
      { text: '연락처', value: 'tel' },
      { text: '요청사항', value: 'note' },
      { text: '주문 상태', value: 'orderState', sortable: false },
    ],
    order: {
      orderId: '00',
    },
    orderState: [
      { id: '00', orderStateName: '입금대기' },
      { id: '01', orderStateName: '주문완료' },
      { id: '02', orderStateName: '발주확인' },
      { id: '03', orderStateName: '출고처리' },
      { id: '04', orderStateName: '주문취소' },
      { id: '05', orderStateName: '환불완료' },
    ],
    orderItems: [],
  }),
  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      const result = await api.get();
      console.log('-- GET --');
      console.log(result);

      if (result.status == 200) {
        this.orderItems = result.data;
      }
    },

    async delOrders(item) {
      item.forEach(async (arr) => {
        const idx = arr.id;
        const result = await api.del(idx);
        console.log('-- DELETE --');

        if (result.status == 200) {
          this.orderItems.splice(idx, 1);
          this.$router.go();
        }
      });
    },

    async modiOrders() {},
  },
};
</script>

<style lang="scss">
table tr td {
  text-align: center;
}

.search-bar {
  width: 30%;
  padding: 0 20px;
  margin-left: auto;
  flex: 0 0 auto !important;
}

.order-state {
  width: 120px;
}

.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  height: 10px !important;
}

.v-label,
.v-input {
  font-size: 14px !important;
}
</style>
