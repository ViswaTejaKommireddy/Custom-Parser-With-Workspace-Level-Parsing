import { ParseTree } from "antlr4";
import { ColumnNameContext, ComparisonOperatorContext, ExpressionContext, ParseContext, PredicateContext, SelectElementsContext, SelectStatementContext, SqlStatementContext, TableNameContext, TableSourcesContext, ValueContext, WhereClauseContext } from "./TSQLParser";

export class TSQLVisitor {
    public visitParse(ctx: ParseContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitSqlStatement(ctx: SqlStatementContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitSelectStatement(ctx: SelectStatementContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitSelectElements(ctx: SelectElementsContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitTableSources(ctx: TableSourcesContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitWhereClause(ctx: WhereClauseContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitExpression(ctx: ExpressionContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitPredicate(ctx: PredicateContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitComparisonOperator(ctx: ComparisonOperatorContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitValue(ctx: ValueContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitColumnName(ctx: ColumnNameContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitTableName(ctx: TableNameContext) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            this.visitNode(child);
        }
    }

    public visitNode(ctx: ParseTree) {
        if (ctx instanceof ParseContext) {
            this.visitParse(ctx);
        }
        else if (ctx instanceof SqlStatementContext) {
            this.visitSqlStatement(ctx);
        }
        else if (ctx instanceof SelectStatementContext) {
            this.visitSelectStatement(ctx);
        }
        else if (ctx instanceof SelectElementsContext) {
            this.visitSelectElements(ctx);
        }
        else if (ctx instanceof TableSourcesContext) {
            this.visitTableSources(ctx);
        }
        else if (ctx instanceof WhereClauseContext) {
            this.visitWhereClause(ctx);
        }
        else if (ctx instanceof ExpressionContext) {
            this.visitExpression(ctx);
        }
        else if (ctx instanceof PredicateContext) {
            this.visitPredicate(ctx);
        }
        else if (ctx instanceof ComparisonOperatorContext) {
            this.visitComparisonOperator(ctx);
        }
        else if (ctx instanceof ValueContext) {
            this.visitValue(ctx);
        }
        else if (ctx instanceof ColumnNameContext) {
            this.visitColumnName(ctx);
        }
        else if (ctx instanceof TableNameContext) {
            this.visitTableName(ctx);
        }
    }
}