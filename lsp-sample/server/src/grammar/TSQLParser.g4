parser grammar TSQLParser;

options { tokenVocab=TSQLLexer; }

parse
    : sqlStatement+ EOF
    ;

sqlStatement
    : selectStatement
    ;

selectStatement
    : SELECT selectElements FROM tableSources (WHERE whereClause)?
    ;

selectElements
    : STAR
    | columnName (COMMA columnName)*
    ;

tableSources
    : tableName (COMMA tableName)*
    ;

whereClause
    : expression
    ;

expression
    : predicate (AND predicate)*
    ;

predicate
    : columnName comparisonOperator value
    ;

comparisonOperator
    : EQUAL
    | NOT_EQUAL1
    | NOT_EQUAL2
    | LT
    | LE
    | GT
    | GE
    ;

value
    : STRING
    | NUMBER
    ;

columnName
    : IDENTIFIER
    ;

tableName
    : IDENTIFIER
    ;