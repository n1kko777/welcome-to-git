const app = new Vue({
  el: "#app",
  data: {
    showTable: false,
    resultTable: [],
    rateVal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    user: {
      /* 1 */
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
        ? this.resultTable.splice(element, 1) /* 8 */
        : null;
      this.resultTable[0]
        ? (this.userWinner = this.resultTable[0])
        : (this.userWinner = {});
    },
    addUser() {
      /* 2 */
      this.user.rateMax = Math.max.apply(Math, [
        this.user.rate1,
        this.user.rate2,
        this.user.rate3
      ]);
      /* 3 */
      this.user.id = this.resultTable.length - 1;
      /* 4 */
      this.resultTable.push(this.user);
      /* 5 */
      this.resultTable = this.resultTable.sort((a, b) =>
        a.rateMax > b.rateMax ? -1 : 1
      );
      /* 6 */
      this.user = {
        userName: "",
        id: 0,
        rate1: 0,
        rate2: 0,
        rate3: 0,
        rateMax: 0
      };
      /* 7 */
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

/* 
** Определение базового множества независимых линейных путей 

  Путь 1: 1-2-4-5-7
  Путь 2: 1-2-3-4-5-7
  Путь 3: 1-2-3-4-5-6-7

*/

/*
 ** Расчитайте базовое множество независимых линейных путей для вашего приложения

 Путь 1: 
  Идентификатор: userWinner - пустой объект с дефолтными значениями (0);
  Ожидаемый результат: Все работает, пустой объект с дефолтными значениями (0).
 Путь 2: 
  Идентификатор: userWinner - пустой объект с измененным ID;
  Ожидаемый результат: Все работает, обновился ID.
 Путь 3: 
  Идентификатор: userWinner - заполненный объект;
  Ожидаемый результат: Все работает, видна актуальная информация.

 */
