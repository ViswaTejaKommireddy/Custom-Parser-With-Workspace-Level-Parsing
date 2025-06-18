lexer grammar TSQLLexer;

// Keywords (case-insensitive using character classes)
SELECT: [sS][eE][lL][eE][cC][tT];
FROM:   [fF][rR][oO][mM];
WHERE:  [wW][hH][eE][rR][eE];
AND:    [aA][nN][dD];

// Operators
EQUAL: '=';
NOT_EQUAL1: '<>';
NOT_EQUAL2: '!=';
LT: '<';
LE: '<=';
GT: '>';
GE: '>=';

// Symbols
COMMA: ',';
STAR: '*';

// Literals
STRING: '\'' (~['\r\n])* '\'';
NUMBER: [0-9]+ ('.' [0-9]+)?;

// Identifiers
IDENTIFIER: [a-zA-Z_][a-zA-Z_0-9]*;

// Whitespace
WS: [ \t\r\n]+ -> skip;