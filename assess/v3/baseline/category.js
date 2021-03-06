"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stix_1 = require("../../../unfetter/stix");
var stix_enum_1 = require("../../../unfetter/stix.enum");
/**
 *  @description Category is a generic bin name for a real products capability, ex. Network Monitor
 *  This object is an Unfetter Stix extension
 */
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    function Category(data) {
        var _this = _super.call(this, data) || this;
        _this.type = stix_enum_1.StixEnum.CATEGORY;
        _this.assessed_objects = _this.assessed_objects || [];
        return _this;
    }
    return Category;
}(stix_1.ExpandedStix));
exports.Category = Category;
