// Generated from TSQLLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class TSQLLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"SELECT", "FROM", "WHERE", "AND", "EQUAL", "NOT_EQUAL1", "NOT_EQUAL2", 
		"LT", "LE", "GT", "GE", "COMMA", "STAR", "STRING", "NUMBER", "IDENTIFIER", 
		"WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, TSQLLexer._ATN, TSQLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "TSQLLexer.g4"; }

	public get literalNames(): (string | null)[] { return TSQLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return TSQLLexer.symbolicNames; }
	public get ruleNames(): string[] { return TSQLLexer.ruleNames; }

	public get serializedATN(): number[] { return TSQLLexer._serializedATN; }

	public get channelNames(): string[] { return TSQLLexer.channelNames; }

	public get modeNames(): string[] { return TSQLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,17,115,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
	1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,
	1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,5,13,82,8,13,10,13,
	12,13,85,9,13,1,13,1,13,1,14,4,14,90,8,14,11,14,12,14,91,1,14,1,14,4,14,
	96,8,14,11,14,12,14,97,3,14,100,8,14,1,15,1,15,5,15,104,8,15,10,15,12,15,
	107,9,15,1,16,4,16,110,8,16,11,16,12,16,111,1,16,1,16,0,0,17,1,1,3,2,5,
	3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,
	33,17,1,0,19,2,0,83,83,115,115,2,0,69,69,101,101,2,0,76,76,108,108,2,0,
	67,67,99,99,2,0,84,84,116,116,2,0,70,70,102,102,2,0,82,82,114,114,2,0,79,
	79,111,111,2,0,77,77,109,109,2,0,87,87,119,119,2,0,72,72,104,104,2,0,65,
	65,97,97,2,0,78,78,110,110,2,0,68,68,100,100,3,0,10,10,13,13,39,39,1,0,
	48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,
	32,32,120,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,
	11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,
	0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,
	33,1,0,0,0,1,35,1,0,0,0,3,42,1,0,0,0,5,47,1,0,0,0,7,53,1,0,0,0,9,57,1,0,
	0,0,11,59,1,0,0,0,13,62,1,0,0,0,15,65,1,0,0,0,17,67,1,0,0,0,19,70,1,0,0,
	0,21,72,1,0,0,0,23,75,1,0,0,0,25,77,1,0,0,0,27,79,1,0,0,0,29,89,1,0,0,0,
	31,101,1,0,0,0,33,109,1,0,0,0,35,36,7,0,0,0,36,37,7,1,0,0,37,38,7,2,0,0,
	38,39,7,1,0,0,39,40,7,3,0,0,40,41,7,4,0,0,41,2,1,0,0,0,42,43,7,5,0,0,43,
	44,7,6,0,0,44,45,7,7,0,0,45,46,7,8,0,0,46,4,1,0,0,0,47,48,7,9,0,0,48,49,
	7,10,0,0,49,50,7,1,0,0,50,51,7,6,0,0,51,52,7,1,0,0,52,6,1,0,0,0,53,54,7,
	11,0,0,54,55,7,12,0,0,55,56,7,13,0,0,56,8,1,0,0,0,57,58,5,61,0,0,58,10,
	1,0,0,0,59,60,5,60,0,0,60,61,5,62,0,0,61,12,1,0,0,0,62,63,5,33,0,0,63,64,
	5,61,0,0,64,14,1,0,0,0,65,66,5,60,0,0,66,16,1,0,0,0,67,68,5,60,0,0,68,69,
	5,61,0,0,69,18,1,0,0,0,70,71,5,62,0,0,71,20,1,0,0,0,72,73,5,62,0,0,73,74,
	5,61,0,0,74,22,1,0,0,0,75,76,5,44,0,0,76,24,1,0,0,0,77,78,5,42,0,0,78,26,
	1,0,0,0,79,83,5,39,0,0,80,82,8,14,0,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,
	1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,86,87,5,39,0,0,87,28,
	1,0,0,0,88,90,7,15,0,0,89,88,1,0,0,0,90,91,1,0,0,0,91,89,1,0,0,0,91,92,
	1,0,0,0,92,99,1,0,0,0,93,95,5,46,0,0,94,96,7,15,0,0,95,94,1,0,0,0,96,97,
	1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,93,1,0,0,0,99,100,
	1,0,0,0,100,30,1,0,0,0,101,105,7,16,0,0,102,104,7,17,0,0,103,102,1,0,0,
	0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,32,1,0,0,0,107,105,
	1,0,0,0,108,110,7,18,0,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,0,
	0,111,112,1,0,0,0,112,113,1,0,0,0,113,114,6,16,0,0,114,34,1,0,0,0,7,0,83,
	91,97,99,105,111,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TSQLLexer.__ATN) {
			TSQLLexer.__ATN = new ATNDeserializer().deserialize(TSQLLexer._serializedATN);
		}

		return TSQLLexer.__ATN;
	}


	static DecisionsToDFA = TSQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}