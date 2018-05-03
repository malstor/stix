"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mock_1 = require("../../mock");
const stix_enum_1 = require("../../unfetter/stix.enum");
class QuestionMock extends mock_1.Mock {
    mockOne(name = 'protect', score = _1.QuestionAnswerEnum.MEDIUM) {
        const tmp = new _1.Question();
        tmp.id = this.genId(stix_enum_1.StixEnum.QUESTION);
        tmp.name = name;
        tmp.score = score;
        return tmp;
    }
}
exports.QuestionMock = QuestionMock;
exports.QuestionMockFactory = new QuestionMock();
