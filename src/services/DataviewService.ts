import { FilterCondition } from "cdm/DatabaseModel";
import { DataTypes, getOperatorFilterValue, OperatorFilter } from "helpers/Constants";
import { Notice } from "obsidian";
import { getAPI, isPluginEnabled } from "obsidian-dataview";
import { Literal } from "obsidian-dataview/lib/data-model/value";
import { DvAPIInterface } from "obsidian-dataview/lib/typings/api";
import { DateTime } from "luxon";
import NoteInfo from "services/NoteInfo";
class DataviewProxy {

    private static instance: DataviewProxy;
    /**
     * Check if dataview plugin is installed
     * @returns true if installed, false otherwise
     * @throws Error if plugin is not installed
     */
    getDataviewAPI(): DvAPIInterface {
        if (isPluginEnabled(app)) {
            return getAPI(app);
        } else {
            new Notice(`Dataview plugin is not installed. Please install it to load Databases.`);
            throw new Error('Dataview plugin is not installed');
        }
    }

    filter(condition: FilterCondition[], p: any): boolean {
        if (!condition || condition.length === 0) return true;
        for (const c of condition) {
            switch (getOperatorFilterValue(c.operator)) {
                case OperatorFilter.EQUAL:
                    if (p[c.field] !== c.value) return false;
                    break;
                case OperatorFilter.NOT_EQUAL:
                    if (p[c.field] === c.value) return false;
                    break;
                case OperatorFilter.GREATER_THAN:
                    if (p[c.field] <= c.value) return false;
                    break;
                case OperatorFilter.LESS_THAN:
                    if (p[c.field] >= c.value) return false;
                    break;
                case OperatorFilter.GREATER_THAN_OR_EQUAL:
                    if (p[c.field] < c.value) return false;
                    break;
                case OperatorFilter.LESS_THAN_OR_EQUAL:
                    if (p[c.field] > c.value) return false;
                    break;
                case OperatorFilter.CONTAINS:
                    if (!p[c.field].includes(c.value)) return false;
                    break;
                case OperatorFilter.STARTS_WITH:
                    if (!p[c.field].startsWith(c.value)) return false;
                    break;
                case OperatorFilter.ENDS_WITH:
                    if (!p[c.field].endsWith(c.value)) return false;
                    break;
                default:
                    throw new Error(`Unknown operator: ${c.operator}`);
            }
            return true;
        }
    }

    parseLiteral(literal: Literal | NoteInfo, dataTypeDst: string): Literal | NoteInfo {
        let parsedLiteral: Literal | NoteInfo;
        // Check empty or undefined literals
        switch (dataTypeDst) {
            case DataTypes.CALENDAR:
                // Check if original literal is a date. If not convert to current date
                parsedLiteral = DateTime.isDateTime(literal) ? literal : DateTime.now();
                break;
            case DataTypes.NUMBER:
                parsedLiteral = isNaN(literal as any) ? ""
                    : Number.parseInt(literal as string);
                break;
            default:
                parsedLiteral = DateTime.isDateTime(literal) ? literal.toFormat("yyyy-MM-dd")
                    : literal;

        }
        return parsedLiteral;
    }
    /**
     * Singleton instance
     * @returns {VaultManager}
     */
    public static getInstance(): DataviewProxy {
        if (!this.instance) {
            this.instance = new DataviewProxy();
        }
        return this.instance;
    }
}

export const DataviewService = DataviewProxy.getInstance();