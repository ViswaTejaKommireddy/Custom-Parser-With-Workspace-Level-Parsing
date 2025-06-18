"use strict";
// Generated from TSQLParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableNameContext = exports.ColumnNameContext = exports.ValueContext = exports.ComparisonOperatorContext = exports.PredicateContext = exports.ExpressionContext = exports.WhereClauseContext = exports.TableSourcesContext = exports.SelectElementsContext = exports.SelectStatementContext = exports.SqlStatementContext = exports.ParseContext = void 0;
var antlr4_1 = require("antlr4");
var TSQLParser = /** @class */ (function (_super) {
    __extends(TSQLParser, _super);
    function TSQLParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new antlr4_1.ParserATNSimulator(_this, TSQLParser._ATN, TSQLParser.DecisionsToDFA, new antlr4_1.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(TSQLParser.prototype, "grammarFileName", {
        get: function () { return "TSQLParser.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSQLParser.prototype, "literalNames", {
        get: function () { return TSQLParser.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSQLParser.prototype, "symbolicNames", {
        get: function () { return TSQLParser.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSQLParser.prototype, "ruleNames", {
        get: function () { return TSQLParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSQLParser.prototype, "serializedATN", {
        get: function () { return TSQLParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    TSQLParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    };
    // @RuleVersion(0)
    TSQLParser.prototype.parse = function () {
        var localctx = new ParseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, TSQLParser.RULE_parse);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 24;
                this.sqlStatement();
                this.state = 25;
                this.match(TSQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.sqlStatement = function () {
        var localctx = new SqlStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, TSQLParser.RULE_sqlStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 27;
                this.selectStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.selectStatement = function () {
        var localctx = new SelectStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, TSQLParser.RULE_selectStatement);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 29;
                this.match(TSQLParser.SELECT);
                this.state = 30;
                this.selectElements();
                this.state = 31;
                this.match(TSQLParser.FROM);
                this.state = 32;
                this.tableSources();
                this.state = 35;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3) {
                    {
                        this.state = 33;
                        this.match(TSQLParser.WHERE);
                        this.state = 34;
                        this.whereClause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.selectElements = function () {
        var localctx = new SelectElementsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, TSQLParser.RULE_selectElements);
        var _la;
        try {
            this.state = 46;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 13:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 37;
                        this.match(TSQLParser.STAR);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 38;
                        this.columnName();
                        this.state = 43;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 12) {
                            {
                                {
                                    this.state = 39;
                                    this.match(TSQLParser.COMMA);
                                    this.state = 40;
                                    this.columnName();
                                }
                            }
                            this.state = 45;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.tableSources = function () {
        var localctx = new TableSourcesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, TSQLParser.RULE_tableSources);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 48;
                this.tableName();
                this.state = 53;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 12) {
                    {
                        {
                            this.state = 49;
                            this.match(TSQLParser.COMMA);
                            this.state = 50;
                            this.tableName();
                        }
                    }
                    this.state = 55;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.whereClause = function () {
        var localctx = new WhereClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, TSQLParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 56;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.expression = function () {
        var localctx = new ExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, TSQLParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 58;
                this.predicate();
                this.state = 63;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 4) {
                    {
                        {
                            this.state = 59;
                            this.match(TSQLParser.AND);
                            this.state = 60;
                            this.predicate();
                        }
                    }
                    this.state = 65;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.predicate = function () {
        var localctx = new PredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, TSQLParser.RULE_predicate);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 66;
                this.columnName();
                this.state = 67;
                this.comparisonOperator();
                this.state = 68;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.comparisonOperator = function () {
        var localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, TSQLParser.RULE_comparisonOperator);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 70;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.value = function () {
        var localctx = new ValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, TSQLParser.RULE_value);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 72;
                _la = this._input.LA(1);
                if (!(_la === 14 || _la === 15)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.columnName = function () {
        var localctx = new ColumnNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, TSQLParser.RULE_columnName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 74;
                this.match(TSQLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    // @RuleVersion(0)
    TSQLParser.prototype.tableName = function () {
        var localctx = new TableNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, TSQLParser.RULE_tableName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 76;
                this.match(TSQLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    Object.defineProperty(TSQLParser, "_ATN", {
        get: function () {
            if (!TSQLParser.__ATN) {
                TSQLParser.__ATN = new antlr4_1.ATNDeserializer().deserialize(TSQLParser._serializedATN);
            }
            return TSQLParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    TSQLParser.SELECT = 1;
    TSQLParser.FROM = 2;
    TSQLParser.WHERE = 3;
    TSQLParser.AND = 4;
    TSQLParser.EQUAL = 5;
    TSQLParser.NOT_EQUAL1 = 6;
    TSQLParser.NOT_EQUAL2 = 7;
    TSQLParser.LT = 8;
    TSQLParser.LE = 9;
    TSQLParser.GT = 10;
    TSQLParser.GE = 11;
    TSQLParser.COMMA = 12;
    TSQLParser.STAR = 13;
    TSQLParser.STRING = 14;
    TSQLParser.NUMBER = 15;
    TSQLParser.IDENTIFIER = 16;
    TSQLParser.WS = 17;
    TSQLParser.EOF = antlr4_1.Token.EOF;
    TSQLParser.RULE_parse = 0;
    TSQLParser.RULE_sqlStatement = 1;
    TSQLParser.RULE_selectStatement = 2;
    TSQLParser.RULE_selectElements = 3;
    TSQLParser.RULE_tableSources = 4;
    TSQLParser.RULE_whereClause = 5;
    TSQLParser.RULE_expression = 6;
    TSQLParser.RULE_predicate = 7;
    TSQLParser.RULE_comparisonOperator = 8;
    TSQLParser.RULE_value = 9;
    TSQLParser.RULE_columnName = 10;
    TSQLParser.RULE_tableName = 11;
    TSQLParser.literalNames = [null, null,
        null, null,
        null, "'='",
        "'<>'", "'!='",
        "'<'", "'<='",
        "'>'", "'>='",
        "','", "'*'"];
    TSQLParser.symbolicNames = [null, "SELECT",
        "FROM", "WHERE",
        "AND", "EQUAL",
        "NOT_EQUAL1",
        "NOT_EQUAL2",
        "LT", "LE",
        "GT", "GE",
        "COMMA", "STAR",
        "STRING", "NUMBER",
        "IDENTIFIER",
        "WS"];
    // tslint:disable:no-trailing-whitespace
    TSQLParser.ruleNames = [
        "parse", "sqlStatement", "selectStatement", "selectElements", "tableSources",
        "whereClause", "expression", "predicate", "comparisonOperator", "value",
        "columnName", "tableName",
    ];
    TSQLParser._serializedATN = [4, 1, 17, 79, 2, 0, 7, 0, 2,
        1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
        10, 7, 10, 2, 11, 7, 11, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 36, 8,
        2, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 42, 8, 3, 10, 3, 12, 3, 45, 9, 3, 3, 3, 47, 8, 3, 1, 4, 1, 4, 1, 4, 5,
        4, 52, 8, 4, 10, 4, 12, 4, 55, 9, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 5, 6, 62, 8, 6, 10, 6, 12, 6, 65, 9,
        6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 0, 0, 12, 0, 2, 4,
        6, 8, 10, 12, 14, 16, 18, 20, 22, 0, 2, 1, 0, 5, 11, 1, 0, 14, 15, 71, 0, 24, 1, 0, 0, 0, 2, 27, 1,
        0, 0, 0, 4, 29, 1, 0, 0, 0, 6, 46, 1, 0, 0, 0, 8, 48, 1, 0, 0, 0, 10, 56, 1, 0, 0, 0, 12, 58, 1, 0, 0,
        0, 14, 66, 1, 0, 0, 0, 16, 70, 1, 0, 0, 0, 18, 72, 1, 0, 0, 0, 20, 74, 1, 0, 0, 0, 22, 76, 1, 0, 0, 0,
        24, 25, 3, 2, 1, 0, 25, 26, 5, 0, 0, 1, 26, 1, 1, 0, 0, 0, 27, 28, 3, 4, 2, 0, 28, 3, 1, 0, 0, 0, 29,
        30, 5, 1, 0, 0, 30, 31, 3, 6, 3, 0, 31, 32, 5, 2, 0, 0, 32, 35, 3, 8, 4, 0, 33, 34, 5, 3, 0, 0, 34, 36,
        3, 10, 5, 0, 35, 33, 1, 0, 0, 0, 35, 36, 1, 0, 0, 0, 36, 5, 1, 0, 0, 0, 37, 47, 5, 13, 0, 0, 38, 43,
        3, 20, 10, 0, 39, 40, 5, 12, 0, 0, 40, 42, 3, 20, 10, 0, 41, 39, 1, 0, 0, 0, 42, 45, 1, 0, 0, 0, 43,
        41, 1, 0, 0, 0, 43, 44, 1, 0, 0, 0, 44, 47, 1, 0, 0, 0, 45, 43, 1, 0, 0, 0, 46, 37, 1, 0, 0, 0, 46, 38,
        1, 0, 0, 0, 47, 7, 1, 0, 0, 0, 48, 53, 3, 22, 11, 0, 49, 50, 5, 12, 0, 0, 50, 52, 3, 22, 11, 0, 51,
        49, 1, 0, 0, 0, 52, 55, 1, 0, 0, 0, 53, 51, 1, 0, 0, 0, 53, 54, 1, 0, 0, 0, 54, 9, 1, 0, 0, 0, 55, 53,
        1, 0, 0, 0, 56, 57, 3, 12, 6, 0, 57, 11, 1, 0, 0, 0, 58, 63, 3, 14, 7, 0, 59, 60, 5, 4, 0, 0, 60, 62,
        3, 14, 7, 0, 61, 59, 1, 0, 0, 0, 62, 65, 1, 0, 0, 0, 63, 61, 1, 0, 0, 0, 63, 64, 1, 0, 0, 0, 64, 13,
        1, 0, 0, 0, 65, 63, 1, 0, 0, 0, 66, 67, 3, 20, 10, 0, 67, 68, 3, 16, 8, 0, 68, 69, 3, 18, 9, 0, 69,
        15, 1, 0, 0, 0, 70, 71, 7, 0, 0, 0, 71, 17, 1, 0, 0, 0, 72, 73, 7, 1, 0, 0, 73, 19, 1, 0, 0, 0, 74, 75,
        5, 16, 0, 0, 75, 21, 1, 0, 0, 0, 76, 77, 5, 16, 0, 0, 77, 23, 1, 0, 0, 0, 5, 35, 43, 46, 53, 63];
    TSQLParser.DecisionsToDFA = TSQLParser._ATN.decisionToState.map(function (ds, index) { return new antlr4_1.DFA(ds, index); });
    return TSQLParser;
}(antlr4_1.Parser));
exports.default = TSQLParser;
var ParseContext = /** @class */ (function (_super) {
    __extends(ParseContext, _super);
    function ParseContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ParseContext.prototype.sqlStatement = function () {
        return this.getTypedRuleContext(SqlStatementContext, 0);
    };
    ParseContext.prototype.EOF = function () {
        return this.getToken(TSQLParser.EOF, 0);
    };
    Object.defineProperty(ParseContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_parse;
        },
        enumerable: false,
        configurable: true
    });
    return ParseContext;
}(antlr4_1.ParserRuleContext));
exports.ParseContext = ParseContext;
var SqlStatementContext = /** @class */ (function (_super) {
    __extends(SqlStatementContext, _super);
    function SqlStatementContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    SqlStatementContext.prototype.selectStatement = function () {
        return this.getTypedRuleContext(SelectStatementContext, 0);
    };
    Object.defineProperty(SqlStatementContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_sqlStatement;
        },
        enumerable: false,
        configurable: true
    });
    return SqlStatementContext;
}(antlr4_1.ParserRuleContext));
exports.SqlStatementContext = SqlStatementContext;
var SelectStatementContext = /** @class */ (function (_super) {
    __extends(SelectStatementContext, _super);
    function SelectStatementContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    SelectStatementContext.prototype.SELECT = function () {
        return this.getToken(TSQLParser.SELECT, 0);
    };
    SelectStatementContext.prototype.selectElements = function () {
        return this.getTypedRuleContext(SelectElementsContext, 0);
    };
    SelectStatementContext.prototype.FROM = function () {
        return this.getToken(TSQLParser.FROM, 0);
    };
    SelectStatementContext.prototype.tableSources = function () {
        return this.getTypedRuleContext(TableSourcesContext, 0);
    };
    SelectStatementContext.prototype.WHERE = function () {
        return this.getToken(TSQLParser.WHERE, 0);
    };
    SelectStatementContext.prototype.whereClause = function () {
        return this.getTypedRuleContext(WhereClauseContext, 0);
    };
    Object.defineProperty(SelectStatementContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_selectStatement;
        },
        enumerable: false,
        configurable: true
    });
    return SelectStatementContext;
}(antlr4_1.ParserRuleContext));
exports.SelectStatementContext = SelectStatementContext;
var SelectElementsContext = /** @class */ (function (_super) {
    __extends(SelectElementsContext, _super);
    function SelectElementsContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    SelectElementsContext.prototype.STAR = function () {
        return this.getToken(TSQLParser.STAR, 0);
    };
    SelectElementsContext.prototype.columnName_list = function () {
        return this.getTypedRuleContexts(ColumnNameContext);
    };
    SelectElementsContext.prototype.columnName = function (i) {
        return this.getTypedRuleContext(ColumnNameContext, i);
    };
    SelectElementsContext.prototype.COMMA_list = function () {
        return this.getTokens(TSQLParser.COMMA);
    };
    SelectElementsContext.prototype.COMMA = function (i) {
        return this.getToken(TSQLParser.COMMA, i);
    };
    Object.defineProperty(SelectElementsContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_selectElements;
        },
        enumerable: false,
        configurable: true
    });
    return SelectElementsContext;
}(antlr4_1.ParserRuleContext));
exports.SelectElementsContext = SelectElementsContext;
var TableSourcesContext = /** @class */ (function (_super) {
    __extends(TableSourcesContext, _super);
    function TableSourcesContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    TableSourcesContext.prototype.tableName_list = function () {
        return this.getTypedRuleContexts(TableNameContext);
    };
    TableSourcesContext.prototype.tableName = function (i) {
        return this.getTypedRuleContext(TableNameContext, i);
    };
    TableSourcesContext.prototype.COMMA_list = function () {
        return this.getTokens(TSQLParser.COMMA);
    };
    TableSourcesContext.prototype.COMMA = function (i) {
        return this.getToken(TSQLParser.COMMA, i);
    };
    Object.defineProperty(TableSourcesContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_tableSources;
        },
        enumerable: false,
        configurable: true
    });
    return TableSourcesContext;
}(antlr4_1.ParserRuleContext));
exports.TableSourcesContext = TableSourcesContext;
var WhereClauseContext = /** @class */ (function (_super) {
    __extends(WhereClauseContext, _super);
    function WhereClauseContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    WhereClauseContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    Object.defineProperty(WhereClauseContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_whereClause;
        },
        enumerable: false,
        configurable: true
    });
    return WhereClauseContext;
}(antlr4_1.ParserRuleContext));
exports.WhereClauseContext = WhereClauseContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ExpressionContext.prototype.predicate_list = function () {
        return this.getTypedRuleContexts(PredicateContext);
    };
    ExpressionContext.prototype.predicate = function (i) {
        return this.getTypedRuleContext(PredicateContext, i);
    };
    ExpressionContext.prototype.AND_list = function () {
        return this.getTokens(TSQLParser.AND);
    };
    ExpressionContext.prototype.AND = function (i) {
        return this.getToken(TSQLParser.AND, i);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_expression;
        },
        enumerable: false,
        configurable: true
    });
    return ExpressionContext;
}(antlr4_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var PredicateContext = /** @class */ (function (_super) {
    __extends(PredicateContext, _super);
    function PredicateContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    PredicateContext.prototype.columnName = function () {
        return this.getTypedRuleContext(ColumnNameContext, 0);
    };
    PredicateContext.prototype.comparisonOperator = function () {
        return this.getTypedRuleContext(ComparisonOperatorContext, 0);
    };
    PredicateContext.prototype.value = function () {
        return this.getTypedRuleContext(ValueContext, 0);
    };
    Object.defineProperty(PredicateContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_predicate;
        },
        enumerable: false,
        configurable: true
    });
    return PredicateContext;
}(antlr4_1.ParserRuleContext));
exports.PredicateContext = PredicateContext;
var ComparisonOperatorContext = /** @class */ (function (_super) {
    __extends(ComparisonOperatorContext, _super);
    function ComparisonOperatorContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ComparisonOperatorContext.prototype.EQUAL = function () {
        return this.getToken(TSQLParser.EQUAL, 0);
    };
    ComparisonOperatorContext.prototype.NOT_EQUAL1 = function () {
        return this.getToken(TSQLParser.NOT_EQUAL1, 0);
    };
    ComparisonOperatorContext.prototype.NOT_EQUAL2 = function () {
        return this.getToken(TSQLParser.NOT_EQUAL2, 0);
    };
    ComparisonOperatorContext.prototype.LT = function () {
        return this.getToken(TSQLParser.LT, 0);
    };
    ComparisonOperatorContext.prototype.LE = function () {
        return this.getToken(TSQLParser.LE, 0);
    };
    ComparisonOperatorContext.prototype.GT = function () {
        return this.getToken(TSQLParser.GT, 0);
    };
    ComparisonOperatorContext.prototype.GE = function () {
        return this.getToken(TSQLParser.GE, 0);
    };
    Object.defineProperty(ComparisonOperatorContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_comparisonOperator;
        },
        enumerable: false,
        configurable: true
    });
    return ComparisonOperatorContext;
}(antlr4_1.ParserRuleContext));
exports.ComparisonOperatorContext = ComparisonOperatorContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ValueContext.prototype.STRING = function () {
        return this.getToken(TSQLParser.STRING, 0);
    };
    ValueContext.prototype.NUMBER = function () {
        return this.getToken(TSQLParser.NUMBER, 0);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_value;
        },
        enumerable: false,
        configurable: true
    });
    return ValueContext;
}(antlr4_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var ColumnNameContext = /** @class */ (function (_super) {
    __extends(ColumnNameContext, _super);
    function ColumnNameContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    ColumnNameContext.prototype.IDENTIFIER = function () {
        return this.getToken(TSQLParser.IDENTIFIER, 0);
    };
    Object.defineProperty(ColumnNameContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_columnName;
        },
        enumerable: false,
        configurable: true
    });
    return ColumnNameContext;
}(antlr4_1.ParserRuleContext));
exports.ColumnNameContext = ColumnNameContext;
var TableNameContext = /** @class */ (function (_super) {
    __extends(TableNameContext, _super);
    function TableNameContext(parser, parent, invokingState) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.parser = parser;
        return _this;
    }
    TableNameContext.prototype.IDENTIFIER = function () {
        return this.getToken(TSQLParser.IDENTIFIER, 0);
    };
    Object.defineProperty(TableNameContext.prototype, "ruleIndex", {
        get: function () {
            return TSQLParser.RULE_tableName;
        },
        enumerable: false,
        configurable: true
    });
    return TableNameContext;
}(antlr4_1.ParserRuleContext));
exports.TableNameContext = TableNameContext;
