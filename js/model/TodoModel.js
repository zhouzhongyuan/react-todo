import Utils from '../utils';
function TodoModel(key) {
    this.key = key;
    this.todos = Utils.store(key);
    this.onChanges = [];
}
TodoModel.prototype.subscribe = function (cb) {
    this.onChanges.push(cb);
};
TodoModel.prototype.inform = function () {
    this.onChanges.forEach((v) => {
        v();
    });
};
TodoModel.prototype.addTodo = function (val) {
    this.todos.push({ title: val, isFinish: false });
    Utils.store(this.key, this.todos);
    this.inform();
};
export default TodoModel;
