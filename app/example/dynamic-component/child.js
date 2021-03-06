"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        this.data = {
            username: '用户名',
            telphone: 13999999999
        };
        // @Input() ref: ComponentRef;
        this.finally = new core_1.EventEmitter();
    }
    ChildComponent.prototype.cancel = function () {
        // this.ref.destroy();
        console.log("cancelaaa");
    };
    ChildComponent.prototype.destory = function () {
        this.finally.emit(this.data);
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "finally", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child',
        template: "\n        <div class=\"modal-backdrop in\"></div>\n        <div class=\"modal fade in\" style=\"display: block\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"cancel()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\">Modal title</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>One fine body {{name}};</p>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.username\" placeholder=\"\u7528\u6237\u540D\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"telphone\" class=\"form-control\" [(ngModel)]=\"data.telphone\"  placeholder=\"\u624B\u673A\u53F7\">\n                    </div>\n                    <div>{{data | json}}</div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"cancel()\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"destory()\">Save changes</button>\n                </div>\n                </div>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.js.map