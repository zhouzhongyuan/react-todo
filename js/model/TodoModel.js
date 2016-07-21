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
    this.todos.push({
        id: Utils.uuid(),
        title: val,
        isFinish: false,
    });
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
            Utils.extend({}, todo, { isFinish: !todo.isFinish })
    );
    this.inform();
};
TodoModel.prototype.titleChange = function (todoToChange, newTitle) {
    this.todos = this.todos.map((todo) =>
        todo !== todoToChange ? todo : Utils.extend({}, todo, { title: newTitle })
    );
    this.inform();
};
TodoModel.prototype.clearCompleted = function () {
    this.todos = this.todos.filter((item) =>
        item.isFinish === false
    );
    this.inform();
};
TodoModel.prototype.toggleAll = function (checked) {
    this.todos = this.todos.map((item) =>
        Utils.extend({}, item, { isFinish: checked })
    );
    this.inform();
};
export default TodoModel;
