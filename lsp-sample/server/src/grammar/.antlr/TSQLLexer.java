// Generated from c:/Users/v-kviswateja/vscode-extension-samples/lsp-sample/server/src/grammar/TSQLLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class TSQLLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SELECT=1, FROM=2, WHERE=3, AND=4, EQUAL=5, NOT_EQUAL1=6, NOT_EQUAL2=7, 
		LT=8, LE=9, GT=10, GE=11, COMMA=12, STAR=13, STRING=14, NUMBER=15, IDENTIFIER=16, 
		WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SELECT", "FROM", "WHERE", "AND", "EQUAL", "NOT_EQUAL1", "NOT_EQUAL2", 
			"LT", "LE", "GT", "GE", "COMMA", "STAR", "STRING", "NUMBER", "IDENTIFIER", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, "'='", "'<>'", "'!='", "'<'", "'<='", "'>'", 
			"'>='", "','", "'*'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SELECT", "FROM", "WHERE", "AND", "EQUAL", "NOT_EQUAL1", "NOT_EQUAL2", 
			"LT", "LE", "GT", "GE", "COMMA", "STAR", "STRING", "NUMBER", "IDENTIFIER", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TSQLLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TSQLLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0011s\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0005\rR\b\r\n\r\f\rU\t\r"+
		"\u0001\r\u0001\r\u0001\u000e\u0004\u000eZ\b\u000e\u000b\u000e\f\u000e"+
		"[\u0001\u000e\u0001\u000e\u0004\u000e`\b\u000e\u000b\u000e\f\u000ea\u0003"+
		"\u000ed\b\u000e\u0001\u000f\u0001\u000f\u0005\u000fh\b\u000f\n\u000f\f"+
		"\u000fk\t\u000f\u0001\u0010\u0004\u0010n\b\u0010\u000b\u0010\f\u0010o"+
		"\u0001\u0010\u0001\u0010\u0000\u0000\u0011\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"\u0001\u0000\u0013\u0002\u0000SSss\u0002\u0000EEee\u0002\u0000LLll\u0002"+
		"\u0000CCcc\u0002\u0000TTtt\u0002\u0000FFff\u0002\u0000RRrr\u0002\u0000"+
		"OOoo\u0002\u0000MMmm\u0002\u0000WWww\u0002\u0000HHhh\u0002\u0000AAaa\u0002"+
		"\u0000NNnn\u0002\u0000DDdd\u0003\u0000\n\n\r\r\'\'\u0001\u000009\u0003"+
		"\u0000AZ__az\u0004\u000009AZ__az\u0003\u0000\t\n\r\r  x\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0001#\u0001\u0000\u0000\u0000\u0003*\u0001\u0000\u0000\u0000\u0005/"+
		"\u0001\u0000\u0000\u0000\u00075\u0001\u0000\u0000\u0000\t9\u0001\u0000"+
		"\u0000\u0000\u000b;\u0001\u0000\u0000\u0000\r>\u0001\u0000\u0000\u0000"+
		"\u000fA\u0001\u0000\u0000\u0000\u0011C\u0001\u0000\u0000\u0000\u0013F"+
		"\u0001\u0000\u0000\u0000\u0015H\u0001\u0000\u0000\u0000\u0017K\u0001\u0000"+
		"\u0000\u0000\u0019M\u0001\u0000\u0000\u0000\u001bO\u0001\u0000\u0000\u0000"+
		"\u001dY\u0001\u0000\u0000\u0000\u001fe\u0001\u0000\u0000\u0000!m\u0001"+
		"\u0000\u0000\u0000#$\u0007\u0000\u0000\u0000$%\u0007\u0001\u0000\u0000"+
		"%&\u0007\u0002\u0000\u0000&\'\u0007\u0001\u0000\u0000\'(\u0007\u0003\u0000"+
		"\u0000()\u0007\u0004\u0000\u0000)\u0002\u0001\u0000\u0000\u0000*+\u0007"+
		"\u0005\u0000\u0000+,\u0007\u0006\u0000\u0000,-\u0007\u0007\u0000\u0000"+
		"-.\u0007\b\u0000\u0000.\u0004\u0001\u0000\u0000\u0000/0\u0007\t\u0000"+
		"\u000001\u0007\n\u0000\u000012\u0007\u0001\u0000\u000023\u0007\u0006\u0000"+
		"\u000034\u0007\u0001\u0000\u00004\u0006\u0001\u0000\u0000\u000056\u0007"+
		"\u000b\u0000\u000067\u0007\f\u0000\u000078\u0007\r\u0000\u00008\b\u0001"+
		"\u0000\u0000\u00009:\u0005=\u0000\u0000:\n\u0001\u0000\u0000\u0000;<\u0005"+
		"<\u0000\u0000<=\u0005>\u0000\u0000=\f\u0001\u0000\u0000\u0000>?\u0005"+
		"!\u0000\u0000?@\u0005=\u0000\u0000@\u000e\u0001\u0000\u0000\u0000AB\u0005"+
		"<\u0000\u0000B\u0010\u0001\u0000\u0000\u0000CD\u0005<\u0000\u0000DE\u0005"+
		"=\u0000\u0000E\u0012\u0001\u0000\u0000\u0000FG\u0005>\u0000\u0000G\u0014"+
		"\u0001\u0000\u0000\u0000HI\u0005>\u0000\u0000IJ\u0005=\u0000\u0000J\u0016"+
		"\u0001\u0000\u0000\u0000KL\u0005,\u0000\u0000L\u0018\u0001\u0000\u0000"+
		"\u0000MN\u0005*\u0000\u0000N\u001a\u0001\u0000\u0000\u0000OS\u0005\'\u0000"+
		"\u0000PR\b\u000e\u0000\u0000QP\u0001\u0000\u0000\u0000RU\u0001\u0000\u0000"+
		"\u0000SQ\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000\u0000TV\u0001\u0000"+
		"\u0000\u0000US\u0001\u0000\u0000\u0000VW\u0005\'\u0000\u0000W\u001c\u0001"+
		"\u0000\u0000\u0000XZ\u0007\u000f\u0000\u0000YX\u0001\u0000\u0000\u0000"+
		"Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000"+
		"\u0000\\c\u0001\u0000\u0000\u0000]_\u0005.\u0000\u0000^`\u0007\u000f\u0000"+
		"\u0000_^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000a_\u0001\u0000"+
		"\u0000\u0000ab\u0001\u0000\u0000\u0000bd\u0001\u0000\u0000\u0000c]\u0001"+
		"\u0000\u0000\u0000cd\u0001\u0000\u0000\u0000d\u001e\u0001\u0000\u0000"+
		"\u0000ei\u0007\u0010\u0000\u0000fh\u0007\u0011\u0000\u0000gf\u0001\u0000"+
		"\u0000\u0000hk\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000ij\u0001"+
		"\u0000\u0000\u0000j \u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000"+
		"ln\u0007\u0012\u0000\u0000ml\u0001\u0000\u0000\u0000no\u0001\u0000\u0000"+
		"\u0000om\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pq\u0001\u0000"+
		"\u0000\u0000qr\u0006\u0010\u0000\u0000r\"\u0001\u0000\u0000\u0000\u0007"+
		"\u0000S[acio\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}