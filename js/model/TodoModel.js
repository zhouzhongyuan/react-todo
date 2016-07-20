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
    Utils.store(this.key, this.todos);
    this.onChanges.forEach((v) => {
        v();
    });
};
TodoModel.prototype.addTodo = function (val) {
    this.todos.push({ title: val, isFinish: false });
    Utils.store(this.key, this.todos);
    this.inform();
};
TodoModel.prototype.destroy = function (todo) {
    this.todos = this.todos.filter((candidate) =>
            candidate !== todo
    );
    this.inform();
};
TodoModel.prototype.toggle = function (todoToToggle) {
    this.todos = this.todos.map((todo) =>
        todo !== todoToToggle ?
            todo :
            Utils.extend({}, todo, {isFinish: !todo.isFinish})
    );
    this.inform();
};
export default TodoModel;
