// Generated from TSQLParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TSQLParser extends Parser {
	public static readonly SELECT = 1;
	public static readonly FROM = 2;
	public static readonly WHERE = 3;
	public static readonly AND = 4;
	public static readonly EQUAL = 5;
	public static readonly NOT_EQUAL1 = 6;
	public static readonly NOT_EQUAL2 = 7;
	public static readonly LT = 8;
	public static readonly LE = 9;
	public static readonly GT = 10;
	public static readonly GE = 11;
	public static readonly COMMA = 12;
	public static readonly STAR = 13;
	public static readonly STRING = 14;
	public static readonly NUMBER = 15;
	public static readonly IDENTIFIER = 16;
	public static readonly WS = 17;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_parse = 0;
	public static readonly RULE_sqlStatement = 1;
	public static readonly RULE_selectStatement = 2;
	public static readonly RULE_selectElements = 3;
	public static readonly RULE_tableSources = 4;
	public static readonly RULE_whereClause = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_predicate = 7;
	public static readonly RULE_comparisonOperator = 8;
	public static readonly RULE_value = 9;
	public static readonly RULE_columnName = 10;
	public static readonly RULE_tableName = 11;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, "'='", 
                                                            "'<>'", "'!='", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "','", "'*'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SELECT", 
                                                             "FROM", "WHERE", 
                                                             "AND", "EQUAL", 
                                                             "NOT_EQUAL1", 
                                                             "NOT_EQUAL2", 
                                                             "LT", "LE", 
                                                             "GT", "GE", 
                                                             "COMMA", "STAR", 
                                                             "STRING", "NUMBER", 
                                                             "IDENTIFIER", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "sqlStatement", "selectStatement", "selectElements", "tableSources", 
		"whereClause", "expression", "predicate", "comparisonOperator", "value", 
		"columnName", "tableName",
	];
	public get grammarFileName(): string { return "TSQLParser.g4"; }
	public get literalNames(): (string | null)[] { return TSQLParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TSQLParser.symbolicNames; }
	public get ruleNames(): string[] { return TSQLParser.ruleNames; }
	public get serializedATN(): number[] { return TSQLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TSQLParser._ATN, TSQLParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let localctx: ParseContext = new ParseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TSQLParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.sqlStatement();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1);
			this.state = 29;
			this.match(TSQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlStatement(): SqlStatementContext {
		let localctx: SqlStatementContext = new SqlStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TSQLParser.RULE_sqlStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
			this.selectStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectStatement(): SelectStatementContext {
		let localctx: SelectStatementContext = new SelectStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TSQLParser.RULE_selectStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 33;
			this.match(TSQLParser.SELECT);
			this.state = 34;
			this.selectElements();
			this.state = 35;
			this.match(TSQLParser.FROM);
			this.state = 36;
			this.tableSources();
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 37;
				this.match(TSQLParser.WHERE);
				this.state = 38;
				this.whereClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectElements(): SelectElementsContext {
		let localctx: SelectElementsContext = new SelectElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TSQLParser.RULE_selectElements);
		let _la: number;
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 41;
				this.match(TSQLParser.STAR);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 42;
				this.columnName();
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 43;
					this.match(TSQLParser.COMMA);
					this.state = 44;
					this.columnName();
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableSources(): TableSourcesContext {
		let localctx: TableSourcesContext = new TableSourcesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TSQLParser.RULE_tableSources);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this.tableName();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 53;
				this.match(TSQLParser.COMMA);
				this.state = 54;
				this.tableName();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let localctx: WhereClauseContext = new WhereClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TSQLParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TSQLParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.predicate();
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 63;
				this.match(TSQLParser.AND);
				this.state = 64;
				this.predicate();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let localctx: PredicateContext = new PredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TSQLParser.RULE_predicate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this.columnName();
			this.state = 71;
			this.comparisonOperator();
			this.state = 72;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, TSQLParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, TSQLParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			_la = this._input.LA(1);
			if(!(_la===14 || _la===15)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnName(): ColumnNameContext {
		let localctx: ColumnNameContext = new ColumnNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, TSQLParser.RULE_columnName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this.match(TSQLParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableName(): TableNameContext {
		let localctx: TableNameContext = new TableNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, TSQLParser.RULE_tableName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.match(TSQLParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,17,83,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,4,0,26,8,0,11,0,12,0,27,1,0,1,0,1,1,1,1,1,2,1,2,1,
	2,1,2,1,2,1,2,3,2,40,8,2,1,3,1,3,1,3,1,3,5,3,46,8,3,10,3,12,3,49,9,3,3,
	3,51,8,3,1,4,1,4,1,4,5,4,56,8,4,10,4,12,4,59,9,4,1,5,1,5,1,6,1,6,1,6,5,
	6,66,8,6,10,6,12,6,69,9,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,
	1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,2,1,0,5,11,1,0,14,15,
	76,0,25,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,50,1,0,0,0,8,52,1,0,0,0,10,
	60,1,0,0,0,12,62,1,0,0,0,14,70,1,0,0,0,16,74,1,0,0,0,18,76,1,0,0,0,20,78,
	1,0,0,0,22,80,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,
	0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,0,0,1,30,1,1,0,0,0,31,32,3,4,
	2,0,32,3,1,0,0,0,33,34,5,1,0,0,34,35,3,6,3,0,35,36,5,2,0,0,36,39,3,8,4,
	0,37,38,5,3,0,0,38,40,3,10,5,0,39,37,1,0,0,0,39,40,1,0,0,0,40,5,1,0,0,0,
	41,51,5,13,0,0,42,47,3,20,10,0,43,44,5,12,0,0,44,46,3,20,10,0,45,43,1,0,
	0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,
	0,50,41,1,0,0,0,50,42,1,0,0,0,51,7,1,0,0,0,52,57,3,22,11,0,53,54,5,12,0,
	0,54,56,3,22,11,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,
	0,58,9,1,0,0,0,59,57,1,0,0,0,60,61,3,12,6,0,61,11,1,0,0,0,62,67,3,14,7,
	0,63,64,5,4,0,0,64,66,3,14,7,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,
	0,67,68,1,0,0,0,68,13,1,0,0,0,69,67,1,0,0,0,70,71,3,20,10,0,71,72,3,16,
	8,0,72,73,3,18,9,0,73,15,1,0,0,0,74,75,7,0,0,0,75,17,1,0,0,0,76,77,7,1,
	0,0,77,19,1,0,0,0,78,79,5,16,0,0,79,21,1,0,0,0,80,81,5,16,0,0,81,23,1,0,
	0,0,6,27,39,47,50,57,67];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TSQLParser.__ATN) {
			TSQLParser.__ATN = new ATNDeserializer().deserialize(TSQLParser._serializedATN);
		}

		return TSQLParser.__ATN;
	}


	static DecisionsToDFA = TSQLParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ParseContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(TSQLParser.EOF, 0);
	}
	public sqlStatement_list(): SqlStatementContext[] {
		return this.getTypedRuleContexts(SqlStatementContext) as SqlStatementContext[];
	}
	public sqlStatement(i: number): SqlStatementContext {
		return this.getTypedRuleContext(SqlStatementContext, i) as SqlStatementContext;
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_parse;
	}
}


export class SqlStatementContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selectStatement(): SelectStatementContext {
		return this.getTypedRuleContext(SelectStatementContext, 0) as SelectStatementContext;
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_sqlStatement;
	}
}


export class SelectStatementContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(TSQLParser.SELECT, 0);
	}
	public selectElements(): SelectElementsContext {
		return this.getTypedRuleContext(SelectElementsContext, 0) as SelectElementsContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(TSQLParser.FROM, 0);
	}
	public tableSources(): TableSourcesContext {
		return this.getTypedRuleContext(TableSourcesContext, 0) as TableSourcesContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(TSQLParser.WHERE, 0);
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_selectStatement;
	}
}


export class SelectElementsContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(TSQLParser.STAR, 0);
	}
	public columnName_list(): ColumnNameContext[] {
		return this.getTypedRuleContexts(ColumnNameContext) as ColumnNameContext[];
	}
	public columnName(i: number): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, i) as ColumnNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(TSQLParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(TSQLParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_selectElements;
	}
}


export class TableSourcesContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableName_list(): TableNameContext[] {
		return this.getTypedRuleContexts(TableNameContext) as TableNameContext[];
	}
	public tableName(i: number): TableNameContext {
		return this.getTypedRuleContext(TableNameContext, i) as TableNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(TSQLParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(TSQLParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_tableSources;
	}
}


export class WhereClauseContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_whereClause;
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public predicate_list(): PredicateContext[] {
		return this.getTypedRuleContexts(PredicateContext) as PredicateContext[];
	}
	public predicate(i: number): PredicateContext {
		return this.getTypedRuleContext(PredicateContext, i) as PredicateContext;
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(TSQLParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(TSQLParser.AND, i);
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_expression;
	}
}


export class PredicateContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnName(): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, 0) as ColumnNameContext;
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_predicate;
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(TSQLParser.EQUAL, 0);
	}
	public NOT_EQUAL1(): TerminalNode {
		return this.getToken(TSQLParser.NOT_EQUAL1, 0);
	}
	public NOT_EQUAL2(): TerminalNode {
		return this.getToken(TSQLParser.NOT_EQUAL2, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(TSQLParser.LT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(TSQLParser.LE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(TSQLParser.GT, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(TSQLParser.GE, 0);
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_comparisonOperator;
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(TSQLParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(TSQLParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_value;
	}
}


export class ColumnNameContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TSQLParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_columnName;
	}
}


export class TableNameContext extends ParserRuleContext {
	constructor(parser?: TSQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TSQLParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TSQLParser.RULE_tableName;
	}
}
