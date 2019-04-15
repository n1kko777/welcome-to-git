const app = new Vue({
  el: "#app",
  data: {
    showTable: false,
    resultTable: [],
    rateVal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    user: {
      userName: "",
      id: 0,
      rate1: 0,
      rate2: 0,
      rate3: 0,
      rateMax: 0
    },
    userWinner: {}
  },
  methods: {
    deleteUser(element) {
      confirm("Вы действительно хотите удалить участника?")
        ? this.resultTable.splice(element, 1)
        : null;
      this.resultTable[0]
        ? (this.userWinner = this.resultTable[0])
        : (this.userWinner = {});
    },
    addUser() {
      this.user.rateMax = Math.max.apply(Math, [
        this.user.rate1,
        this.user.rate2,
        this.user.rate3
      ]);

      this.user.id = this.resultTable.length - 1;

      this.resultTable.push(this.user);

      this.resultTable = this.resultTable.sort((a, b) =>
        a.rateMax > b.rateMax ? -1 : 1
      );

      this.user = {
        userName: "",
        id: 0,
        rate1: 0,
        rate2: 0,
        rate3: 0,
        rateMax: 0
      };

      this.userWinner = this.resultTable[0];
    },
    toggleTable() {
      this.showTable = !this.showTable;
    }
  },
  computed: {
    updateTable() {
      return this.resultTable;
    },
    findWinner() {
      return this.userWinner;
    }
  }
});
